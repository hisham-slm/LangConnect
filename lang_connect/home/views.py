from django.shortcuts import render,redirect
from django.urls import reverse
from django.http import JsonResponse
import pyttsx3
from googletrans import Translator , LANGUAGES


def home(request):
    translation = request.GET.get('translation', '')
    return render(request, 'index.html' , {'translation': translation})

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
        translation = translator.translate(word,dest=language,src=translating_from).text
        
        return JsonResponse({'translation' : translation})
