from django.db import models


# Create your models here.


class SynergyGroup(models.Model):
    name = models.CharField('Name', max_length=255)
    description = models.CharField('Description', max_length=255)

    def __str__(self):
        return f'{self.id}: {self.name}'


class SynergyUser(models.Model):
    username = models.CharField('Username', max_length=255)
    created = models.DateTimeField('Created', auto_now_add=True)
    group = models.ForeignKey(SynergyGroup,
                              on_delete=models.PROTECT,
                              related_name='user',
                              related_query_name='users')

    def __str__(self):
        return self.username
