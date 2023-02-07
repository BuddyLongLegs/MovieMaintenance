from movies.models import ActedMovie, Movie
from django.db.models import Count, F
from django.http import JsonResponse


def allMovies(req):
    """
    Sends list of all Movies as response.
    """
    if req.method != 'GET':
        return JsonResponse({'error': 'Method not allowed'}, status=405)
    sortBy = req.GET.get('sortBy', 'title')
    order = req.GET.get('order', 'asc')
    movies = ActedMovie.objects.values(movieid=F("movie")).annotate(
        actorCount=Count('movieid'),
        title=F('movie__title'),
        description=F('movie__description'),
        releaseDate=F('movie__relaseDate'),
        upvotes=F('movie__upvotes'),
        downvotes=F('movie__downvotes')
    ).order_by(sortBy if order == 'asc' else f'-{sortBy}')
    return JsonResponse(data={'data': list(movies)})


def allActors(req):
    """
    Sends list of all Actors ordered by name as response.
    """
    if req.method != 'GET':
        return JsonResponse({'error': 'Method not allowed'}, status=405)
    actors = ActedMovie.objects.values(actorid=F('actor')).annotate(
        movieCount=Count('actorid'),
        name=F('actor__name'),
        dob=F('actor__dob')
    ).order_by('name')
    return JsonResponse({'data': list(actors)})


def upVote(req, id):
    if req.method != 'GET':
        return JsonResponse({'error': 'Method not allowed'}, status=405)
    Movie.objects.filter(id=id).update(upvotes=F('upvotes') + 1)
    return JsonResponse({'data': Movie.objects.get(id=id).upvotes})


def downVote(req, id):
    if req.method != 'GET':
        return JsonResponse({'error': 'Method not allowed'}, status=405)
    Movie.objects.filter(id=id).update(downvotes=F('downvotes') + 1)
    return JsonResponse({'data': Movie.objects.get(id=id).downvotes})
