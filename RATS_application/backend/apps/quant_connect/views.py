from django.shortcuts import render

from django.http import HttpResponse
from .components.tests import Test


def index(request):
    return (request, "templates/quant_connect.html")


def get_tests(request):
    return Tests().get_tests(request)
