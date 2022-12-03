from django.db import models
from django.contrib.auth.models  import User 
from datetime import date 


class Beat(models.Model):

    class PublishedBeat(models.Manager): #creating custom manager
        def get_queryset(self):
            return super().get_queryset().filter(beat_status="publish")

    class ReggaeBeat(models.Manager): #creating custom manager
        def get_queryset(self):
            return super().get_queryset().filter(beat_category='R&B',beat_status="publish")

    class DrumBeat(models.Manager): #creating custom manager
        def get_queryset(self):
            return super().get_queryset().filter(beat_category='D&B', beat_status="publish")

    class TrapBeat(models.Manager): #creating custom manager
        def get_queryset(self):
            return super().get_queryset().filter(beat_category='Trap',beat_status="publish")

    class FeaturedBeat(models.Manager): #creating custom manager
        def get_queryset(self):
            return super().get_queryset().filter(featured_beat=True,beat_status="publish")

    # beat category
    category = ( 
        ('R&B','R&B'),
        ('D&B', 'Drum and Bass'),
        ('Trap', 'Trap')
    )
    # beat status
    status = (
        ('publish', 'Publish'),
        ('draft', 'Draft')
    )

    beat_title = models.CharField(max_length = 100, null=True, blank=True)
    beat_description = models.TextField(null=True, blank=True)
    beat_producer = models.CharField(max_length=100, null=True, blank=True)
    beat_file = models.FileField(upload_to = f'musicfile/{date.today()}', blank=False, null=False)
    uploaded_date = models.DateField(auto_now_add=True)
    uploaded_time = models.DateTimeField(auto_now_add=True)
    beat_category = models.CharField( max_length=12, choices=category, default='R&B', null=False, blank=False)
    beat_status = models.CharField( max_length=12, choices=status, default='publish', null=False, blank=False)
    featured_beat = models.BooleanField(default=False)
    uploaded_by = models.ForeignKey(User, blank=False, null=False, on_delete = models.PROTECT)
    objects = models.Manager() # defining the default model manager 
    published = PublishedBeat() # defining our custom manager 
    reggae = ReggaeBeat() # defining our custom manager
    drum = DrumBeat() # defining our custom manager
    trap = TrapBeat() # defining our custom manager
    featured = FeaturedBeat() # defining custom manager

    
    class Meta:
        ordering = ['-uploaded_time']

    def __str__(self):
        return self.beat_title


class Event(models.Model):

    status = (
        ('',''),
        ('soon','Comming Soon'),
        ('sold','Sold Out'),
    )
    event_img = models.ImageField(upload_to=f'eventImg/{date.today()}', blank=False, null=False)
    event_name = models.CharField(max_length=100, null=False, blank=False)
    event_place = models.CharField(max_length=100, null=False, blank=False)
    event_status = models.CharField(max_length=30, choices=status, default='',null=True, blank=True)
    event_date = models.DateTimeField(auto_now_add=False, null=True, blank=True)


    def __Str__(self):
        return self.event.name



class Contact(models.Model):
    name = models.CharField(max_length=60, null=False, blank=False)
    email = models.EmailField(max_length=150, null=True, blank=True)
    messages = models.TextField()
    date = models.DateTimeField(auto_now_add=True)    

    def __str__(self):
        return self.name 