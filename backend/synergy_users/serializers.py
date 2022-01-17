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


class UserSerializer(serializers.HyperlinkedModelSerializer):

    created = serializers.DateTimeField(format="%H:%M:%S %d-%m-%Y",
                                        required=False)
    group = GroupFieldSerializer(required=False)

    class Meta:
        model = SynergyUser
        fields = ('url', 'pk', 'username', 'created', 'group')
        extra_kwargs = {
            'url': {'view_name': 'synergyuser-detail', 'lookup_field': 'pk'}
        }
