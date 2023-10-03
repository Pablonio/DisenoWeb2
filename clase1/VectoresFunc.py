

def cotenido(contador):
    array = []
    for i in range(contador):
        a = input(f'Introduce: ')
        array.append(a)
    return array

def imprimir(array):
    print("Elementos del array:")
    for i, a in enumerate(array):
        print(f"elemento {i + 1}: {a}")

contador = int(input("Tamano de array: "))
mostrar = cotenido(contador)
imprimir(mostrar)

