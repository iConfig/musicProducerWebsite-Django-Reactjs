from django.contrib import admin
from .models import Beat,Contact,Event


class BeatAdmin(admin.ModelAdmin):
    list_display = ['beat_title','beat_producer','beat_category','beat_status','featured_beat','uploaded_date']
    list_display_links = ['beat_title','beat_producer']
    list_filter = ['beat_producer','beat_category','beat_status','featured_beat']
    search_fields = ['beat_category','beat_producer','featured_beat']

admin.site.register(Beat, BeatAdmin)

class EventAdmin(admin.ModelAdmin):
    list_display = ['event_name','event_img','event_place','event_date','event_status']
    list_display_links = ['event_name','event_place']
    list_filter = ['event_date','event_place','event_status']
    search_fields = ['event_name','event_place','event_date']

admin.site.register(Event, EventAdmin)

class ContactAdmin(admin.ModelAdmin):
    list_display = ['name','email','date']
    list_display_links = ['name','email']

admin.site.register(Contact,ContactAdmin)

