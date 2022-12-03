from rest_framework import generics 
from .models import Beat,Event
from .serializers import BeatSerializer, BeatDetailSerializer,EventSerializer
from django.shortcuts import get_object_or_404 
from rest_framework.response import Response 


#beat list
class AllBeats(generics.ListAPIView):
    queryset = Beat.published.all()
    serializer_class = BeatSerializer
    lookup_field = 'id'

#reggae beat list
class ReggaeBeats(generics.ListAPIView):
    queryset = Beat.reggae.all()
    serializer_class = BeatSerializer
    lookup_field = 'id'


#drum beat list
class DrumBeats(generics.ListAPIView):
    queryset = Beat.drum.all()
    serializer_class = BeatSerializer
    lookup_field = 'id'


#trap beat list
class TrapBeats(generics.ListAPIView):
    queryset = Beat.trap.all()
    serializer_class = BeatSerializer
    lookup_field = 'id'

#featured beat list
class FeaturedBeat(generics.ListAPIView):
    queryset = Beat.featured.all()
    serializer_class = BeatSerializer
    lookup_field = 'id'

# event list
class EventList(generics.ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    lookup_field = 'id'

# beat detail 
class BeatDetail(generics.RetrieveAPIView):
    queryset = Beat.published.all()
    serializer_class = BeatDetailSerializer
    lookup_field = 'id'




