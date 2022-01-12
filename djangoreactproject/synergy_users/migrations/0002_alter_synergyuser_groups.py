# Generated by Django 4.0 on 2022-01-10 16:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('synergy_users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='synergyuser',
            name='groups',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='user', related_query_name='users', to='synergy_users.synergygroup'),
        ),
    ]