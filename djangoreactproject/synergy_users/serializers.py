from rest_framework import serializers

from .models import SynergyGroup, SynergyUser


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = SynergyGroup
        fields = ('pk', 'name', 'description')
   

class GroupFieldSerializer(serializers.RelatedField):

    queryset = SynergyGroup.objects.all()

    def to_representation(self, value):
        return value.name

    def to_internal_value(self, data):
        obj = self.queryset.get(name=data)
        return obj


class UserSerializer(serializers.ModelSerializer):
    created = serializers.DateTimeField(format="%H:%M:%S %d-%m-%Y")
    group = GroupFieldSerializer()

    class Meta:
        model = SynergyUser
        fields = ('pk', 'username', 'created', 'group')

