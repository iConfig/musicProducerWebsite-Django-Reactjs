# Generated by Django 4.1.3 on 2022-11-30 07:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='beat',
            name='beat_file',
            field=models.FileField(upload_to='musicfile/2022-11-30'),
        ),
    ]