import random
from api.calculator.difference import difference
from api.calculator.is_full import is_full
from api.calculator.is_empty import is_empty
from api.show.show import show

def simulator():
    global up_new, up_dif, down_dif
    up_old_arr = []
    up_new_arr = []
    up_dif_arr = []

    down_old_arr = []
    down_new_arr = []
    down_dif_arr = []

    stop_number = 0

    while stop_number <= 20:
        up_new = 0
        up_old = 0
        down_new = 0
        down_old = 0

        # ÍNICIO
        if stop_number == 0:

            # UP
            up_old = 0
            up_old_arr.append(up_old)
            up_new = random.randint(0, 20)
            up_new_arr.append(up_new)

            # DOWN
            down_old = 0
            down_old_arr.append(down_old)
            down_new = random.randint(0, 40)
            down_new_arr.append(down_new)

        # ÚLTIMA PARADA
        elif stop_number == 20:
            up_new = 0
            up_new_arr.append(0)

            down_new = 0
            down_new_arr.append(0)

            down_old = down_new_arr[stop_number - 1]
            up_old = up_new_arr[stop_number - 1]

        # QUALQUER OUTRA
        else:
            # UP
            up_old = up_new_arr[stop_number - 1]
            up_old_arr.append(up_old)
            up_new = random.randint(0, 20)
            up_new_arr.append(up_new)

            # DOWN
            down_old = down_new_arr[stop_number - 1]
            down_old_arr.append(down_old)
            down_new = random.randint(0, 40)
            down_new_arr.append(down_new)

        down_dif = difference(down_old, down_new)
        up_dif = difference(up_old, up_new)
        full = is_full(up_new, down_new)
        empty = is_empty(up_new, down_new)

        down_dif_arr.append(down_dif)
        up_dif_arr.append(up_dif)

        show(stop_number, up_new, up_old, up_dif, down_new, down_old, down_dif, full, empty)

        stop_number += 1

    return [up_old_arr, up_new_arr, down_old_arr, down_new_arr, up_dif_arr, down_dif_arr]
