from rest_framework import serializers

from .models import SynergyGroup, SynergyUser


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = SynergyGroup
        fields = ('pk', 'name', 'description')


class UserSerializer(serializers.ModelSerializer):
    group = GroupSerializer(required=False)

    class Meta:
        model = SynergyUser
        fields = ('pk', 'username', 'created', 'group')
