from rest_framework import serializers 
from .models import Beat,Event

# beat serializer 
class BeatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beat
        fields = ['id','beat_title','beat_file','beat_producer','beat_category','featured_beat','uploaded_date']


# beat description serializer 
class BeatDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beat
        fields = ['id','beat_title','beat_file','beat_description','beat_producer','beat_category','featured_beat','uploaded_date']

# event serializer 
class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id','event_name','event_img','event_place','event_date','event_status']

