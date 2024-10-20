from django.shortcuts import render

def wordle_game(request):
    return render(request, 'wordle/game.html')