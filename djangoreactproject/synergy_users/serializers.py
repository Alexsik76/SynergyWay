from rest_framework import serializers

from .models import SynergyGroup, SynergyUser


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = SynergyGroup
        fields = ('pk', 'name', 'description')


def get_group_choices():
    all_groups = SynergyGroup.objects.all()
    choices = [(obj.id, obj.name) for obj in all_groups]
    return choices


class GroupField(serializers.RelatedField):

    queryset = SynergyGroup.objects.all()

    def to_representation(self, value):
        return value.name

    def to_internal_value(self, data):
        obj = self.queryset.get(name=data)
        return obj


class UserSerializer(serializers.ModelSerializer):
    group = GroupField()

    class Meta:
        model = SynergyUser
        fields = ('pk', 'username', 'created', 'group')

