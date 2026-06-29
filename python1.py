import random

def lempar_dadu():
    # Logika: Pilih angka acak dari 1 sampai 6 (inklusif)
    hasil = random.randint(1, 6)
    if hasil == 1:
        return "Anda mendapatkan angka 1!"
    if hasil == 4:
        return "Anda mendapatkan angka 4!"
    return hasil

# Uji coba melempar dadu
print("Menghitung hasil lemparan dadu...")
print(lempar_dadu())
print(lempar_dadu())
print(lempar_dadu())
print(lempar_dadu())
print(lempar_dadu())
print(lempar_dadu())
print(lempar_dadu())
print(lempar_dadu())