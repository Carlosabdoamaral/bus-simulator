def difference(old, new):
    dif = 0

    if old >= new:
        dif = old - new
    else:
        dif = new - old

    return dif