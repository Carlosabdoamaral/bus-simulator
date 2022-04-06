from flask import Flask, jsonify
from flask_cors import cross_origin, CORS

from calculator.simulator import simulator

app = Flask(__name__)
cors = CORS(app, resources={r"/": {"origins": "http://localhost:port"}})

@app.route('/')
@cross_origin()
def getData():
    data = simulator()

    up_old_list = data[0]
    up_new_list = data[1]
    down_old_list = data[2]
    down_new_list = data[3]
    up_dif = data[4]
    down_dif = data[5]

    return jsonify(
        up_old_arr=up_old_list,
        up_new_arr=up_new_list,
        up_diff=up_dif,
        down_old_arr=down_old_list,
        down_new_arr=down_new_list,
        down_diff=down_dif
    )


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
