from django.shortcuts import render
from django.http import  JsonResponse
from googletrans import Translator , LANGUAGES
from gtts import gTTS
import pygame


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


def translate(request):
    if request.method == "POST":
        language = request.POST['translatingTo']
        translating_from = request.POST['translatingFrom']
        word = request.POST['word']
        translator = Translator()
        translation = translator.translate(word,dest=language,src=translating_from).text
        
        return JsonResponse({'translation' : translation})

def read_out(request):
    if request.method == 'POST':
        status_code = 200
        print('working readout')
        language = request.POST['language']
        
        word = request.POST['word']
        
        
        speech = gTTS(lang = language, text= word) 
        audio_file = 'test.wav'
        speech.save(audio_file)
        pygame.mixer.init() 
        
        sound = pygame.mixer.Sound(audio_file)
        sound.play()
        pygame.time.wait(int(sound.get_length() * 1000)) 
        
        

        return status_code

    
