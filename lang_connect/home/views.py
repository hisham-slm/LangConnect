import os
from django.shortcuts import render,redirect
from django.urls import reverse
from django.http import HttpResponse, JsonResponse, FileResponse
import pyttsx3
from googletrans import Translator , LANGUAGES
from gtts import gTTS


def home(request):
    
    language_options = LANGUAGES.items()
    language_codes = []
    language_names = []
    
    for options in language_options:
        language_codes.append(options[0])
        language_names.append(options[1].capitalize())
    
    zipped_language = zip(language_codes, language_names)
    zipped_language2 = zip(language_codes, language_names)
    return render(request, 'index.html' , {'zipped_language':zipped_language , 'zipped_language2':zipped_language2})

def play(request):
    engine = pyttsx3.init()
    
    string = 'hello world'
    
    engine.say(string)
    
    engine.runAndWait()
    
    return render(request, 'index.html')


def translate(request):
    if request.method == "POST":
        language = request.POST['translatingTo']
        translating_from = request.POST['translatingFrom']
        word = request.POST['word']
        translator = Translator()
        print(word)
        translation = translator.translate(word,dest=language,src=translating_from).text
        
        return JsonResponse({'translation' : translation})

def read_out(request):
    if request.method == 'POST':
        # word = request.POST['word']
        # print(word)
        
        # engine = pyttsx3.init()
        
        # engine.say(word)
        # engine.runAndWait()
        
        # return {'working'}
        
        language = request.POST['language']
        
        word = request.POST['word']
        
        speech = gTTS(lang = language, text= word) 
        audio_file = 'test.mp3'
        speech.save(audio_file)
        
        
        try:
            return FileResponse(open(audio_file, 'rb'), content_type='audio/mpeg')
        except FileNotFoundError:
            return HttpResponse("Audio file not found", status=404)
    
