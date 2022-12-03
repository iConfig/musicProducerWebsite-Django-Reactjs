from django.urls import path,include 
from django.conf import settings 
from django.conf.urls.static import static 
from .views import (
    AllBeats,
    ReggaeBeats,
    DrumBeats,
    TrapBeats,
    BeatDetail,
    FeaturedBeat,
    EventList)

urlpatterns = [
    path('api/', AllBeats.as_view()),
    path('api/reggae/', ReggaeBeats.as_view()),
    path('api/drum/', DrumBeats.as_view()),
    path('api/trap/', TrapBeats.as_view()),
    path('api/featured/', FeaturedBeat.as_view()),
    path('api/event/', EventList.as_view()),
    path('api/<int:id>/', BeatDetail.as_view()),

]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                            document_root = settings.MEDIA_ROOT)