from django.conf import settings
from django.http import HttpResponseBadRequest

class AllowDynamicSubdomainsMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        host = request.META.get('HTTP_HOST', '').split(':')[0]

        # Verifica si el host es un subdominio de trycloudflare.com
        if host.endswith('.trycloudflare.com') or host == 'localhost' or host == '127.0.0.1':
            response = self.get_response(request)
            return response
        else:
            # Si no está permitido, devuelve un error
            return HttpResponseBadRequest("Invalid HTTP_HOST header.")

