from .views import allMovies, allActors, upVote, downVote
from django.urls import path

urlpatterns = [
    path('movies/', allMovies),
    path('actors/', allActors),
    path('upvote/<int:id>/', upVote),
    path('downvote/<int:id>/', downVote)
]
