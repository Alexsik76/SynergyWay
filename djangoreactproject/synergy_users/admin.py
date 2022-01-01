from django.contrib import admin
from synergy_users.models import SynergyGroup, SynergyUser
# Register your models here.
admin.site.register(SynergyGroup)
admin.site.register(SynergyUser)
