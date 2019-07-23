from flask import Blueprint, jsonify, request
from models.car import Car, CarSchema, Comment, CommentSchema
from lib.secure_route import secure_route

api = Blueprint('cars', __name__)
car_schema = CarSchema()
comment_schema = CommentSchema()


@api.route('/cars', methods=['GET'])
def index():
    cars = Car.query.all()
    return car_schema.jsonify(cars, many=True), 200

@api.route('/cars/<int:car_id>', methods=['GET'])
def show(car_id):
    car = Car.query.get(car_id)
    if not car:
        return jsonify({'message': 'not found'}), 404
    return car_schema.jsonify(car), 200

@api.route('/cars', methods=['POST'])
@secure_route
def create():
    data = request.get_json()
    car, errors = car_schema.load(data)
    if errors:
        return jsonify(errors), 422
    car.save()
    return car_schema.jsonify(car), 201

@api.route('/cars/<int:car_id>', methods=['PUT'])
@secure_route
def update(car_id):
    car = Car.query.get(car_id)
    if not car:
        return jsonify({'message': 'Not Found'}), 404
    data = request.get_json()
    car, errors = car_schema.load(data, instance=car, partial=True)
    if errors:
        return jsonify(errors), 422
    car.save()
    return car_schema.jsonify(car), 202

@api.route('/cars/<int:car_id>', methods=['DELETE'])
@secure_route
def delete(car_id):
    car = Car.query.get(car_id)
    if not car:
        return jsonify({'message': 'Not Found'})
    car.remove()
    return '', 204

@api.route('/cars/<int:car_id>/comments', methods=['POST'])
def comment_create(car_id):
    car = Car.query.get(car_id)
    if not car:
        return jsonify({'message': 'not found'}), 404
    data = request.get_json()
    comment, errors = comment_schema.load(data)
    if errors:
        return jsonify(errors), 422
    comment.car = car
    comment.save()
    return car_schema.jsonify(car)

@api.route('/cars/<int:car_id>/comments/<int:comment_id>', methods=['DELETE'])
def comment_delete(**kwargs):
    comment = Comment.query.get(kwargs['comment_id'])
    if not comment:
        return jsonify({'message': 'Not Found'}), 404
    comment.remove()
    return '', 204
