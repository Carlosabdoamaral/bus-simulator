def show(
        stop_number,
        up_new, up_old, up_dif,
        down_new, down_old, down_dif,
        full, empty
):
    print(f"""
PARADA #{stop_number}

ANTES
Em pé: {up_old}/20
Sentados: {down_old}/40

AGORA
Em pé: {up_new}/20
Sentados: {down_new}/40
Está cheio: {full}
Está vazio: {empty}
Diferença de pessoas em pé: {up_dif}
Diferença de pessoas sentadas: {down_dif}

    """)