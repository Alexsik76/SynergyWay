# Generated by Django 4.0 on 2022-01-10 16:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('synergy_users', '0002_alter_synergyuser_groups'),
    ]

    operations = [
        migrations.RenameField(
            model_name='synergyuser',
            old_name='groups',
            new_name='group',
        ),
    ]
