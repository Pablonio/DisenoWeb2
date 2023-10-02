Numero = int(input())

contador=0
tres='fizz'
cinco='buzz'

while (Numero>contador):
    contador = contador + 1
    if (contador % 3 == 0 and contador % 5 == 0):
        print(tres, cinco)
    elif (contador % 3 == 0):
        print(tres)
    elif (contador % 5 == 0):
        print(cinco)
    else:
        print(contador)


