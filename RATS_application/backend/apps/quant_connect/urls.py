from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('/Tests', views.get_tests, name='get_tests'),
]
