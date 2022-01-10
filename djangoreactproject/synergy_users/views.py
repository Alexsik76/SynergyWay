from .models import SynergyUser, SynergyGroup
from .serializers import UserSerializer, GroupSerializer
from rest_framework import generics


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
