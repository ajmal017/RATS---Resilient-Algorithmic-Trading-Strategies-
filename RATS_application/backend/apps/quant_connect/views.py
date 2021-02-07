from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from .components.tests import Test
from django.views.decorators.csrf import csrf_exempt
from .components.algorithm_manager import AlgorithmManager


def index(request):
    return (request, "templates/quant_connect.html")


def get_tests(request):
    return Tests().get_tests(request, 'quant_connect.html')


@api_view(['POST'])
def set_algorithm(request):
    return AlgorithmManager().set_algorithm(request)
