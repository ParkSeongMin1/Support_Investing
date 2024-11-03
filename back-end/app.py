from flask import Flask, request, jsonify, render_template
from pymongo import MongoClient

app = Flask(__name__)

# MongoDB 연결 설정 (MongoDB Atlas나 로컬 서버에 맞게 URI 설정)
client = MongoClient("mongodb+srv://Support_Investing:wpqkfwharmaksgo!@cluster0.x7pzl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")  # 로컬 MongoDB
db = client["testdb"]  # 사용할 데이터베이스
collection = db["testcollection"]  # 사용할 컬렉션

@app.route('/')
def index():
    return render_template("../front-end/src/pages/Login.js")

# 데이터 삽입 API
@app.route('/add', methods=['POST'])
def add_data():
    data = request.json
    result = collection.insert_one(data)  # 데이터 삽입
    return jsonify({"inserted_id": str(result.inserted_id)}), 201

# 데이터 조회 API
@app.route('/data', methods=['GET'])
def get_data():
    data = list(collection.find({}, {"_id": 0}))  # 모든 데이터 조회
    return jsonify(data), 200

# Flask 애플리케이션 실행
if __name__ == '__main__':
    app.run(debug=True)