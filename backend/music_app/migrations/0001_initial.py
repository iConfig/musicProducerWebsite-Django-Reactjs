# Generated by Django 4.1.3 on 2022-11-30 07:13

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Beat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('beat_title', models.CharField(blank=True, max_length=100, null=True)),
                ('beat_description', models.TextField(blank=True, null=True)),
                ('beat_producer', models.CharField(blank=True, max_length=100, null=True)),
                ('beat_file', models.FileField(upload_to='music/2022-11-30')),
                ('uploaded_date', models.DateField(auto_now_add=True)),
                ('uploaded_time', models.DateTimeField(auto_now_add=True)),
                ('beat_category', models.CharField(choices=[('Latest', 'Latest'), ('D&B', 'Drum and Bass'), ('Trap', 'Trap')], default='Latest', max_length=12)),
                ('beat_status', models.CharField(choices=[('publish', 'Publish'), ('draft', 'Draft')], default='publish', max_length=12)),
                ('uploaded_by', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['-uploaded_time'],
            },
        ),
    ]
