from django.urls import path
from django.conf.urls import url
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('Tests', views.get_tests, name='get_tests'),
    url(r'algorithm_manager/set_algorithm',
        views.set_algorithm,
        name="algorithm-manager-set-algorithm"),
    path('getdb', views.getdb, name='getdb')
]
