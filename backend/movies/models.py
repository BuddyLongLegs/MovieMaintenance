from django.db import models
from datetime import date


class Movie(models.Model):
    title = models.CharField(max_length=250, null=True)
    description = models.CharField(max_length=1000, null=True)
    relaseDate = models.DateField(default=date.today)
    upvotes = models.BigIntegerField(default=0)
    downvotes = models.BigIntegerField(default=0)


class Actor(models.Model):
    name = models.CharField(max_length=100, null=True)
    dob = models.DateField(default=date.today)


class ActedMovie(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, null=True)
    actor = models.ForeignKey(Actor, on_delete=models.CASCADE, null=True)
