import subprocess
import os
from django.apps import apps
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.http import JsonResponse
from flask import request
from django.conf import settings
from datetime import date, datetime
import requests
import json


class AlgorithmManager:

    def _run_algorithm(self, params):
        check_response = requests.post(settings.BASE_URL_SERVICES + ':6004/algorithm',
                                        json=params
                                        )

        return check_response.text

    def set_algorithm(self, request):
        params = request.data
        print(params)
        algorithm_results = json.loads(self._run_algorithm(params))
        with open(settings.RATS_BACKEND_DIR + "/quant_connect/results/" + request.data['algorithm'] + '_' + str(datetime.now().strftime("%Y%m%d%H%M%S")) + '.json', 'w') as f:
            json.dump(algorithm_results, f, indent=4)
        return JsonResponse(algorithm_results)

    def get_past_runs(self, request):
        files_dir = settings.RATS_BACKEND_DIR + "/quant_connect/results/"
        past_runs = os.listdir(files_dir)
        return JsonResponse({'past_runs': past_runs})
