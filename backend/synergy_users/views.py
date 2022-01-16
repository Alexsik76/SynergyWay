from django.db.models import ProtectedError

from .models import SynergyUser, SynergyGroup
from .serializers import UserSerializer, GroupSerializer
from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response


class UsersList(generics.ListCreateAPIView):
    queryset = SynergyUser.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = SynergyUser.objects.all()
    serializer_class = UserSerializer


class GroupsList(generics.ListCreateAPIView):
    queryset = SynergyGroup.objects.all()
    serializer_class = GroupSerializer


class GroupDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = SynergyGroup.objects.all()
    serializer_class = GroupSerializer

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        try:
            self.perform_destroy(instance)
            return Response(status=status.HTTP_204_NO_CONTENT)
        except ProtectedError as error:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR, data=error.args[0])
