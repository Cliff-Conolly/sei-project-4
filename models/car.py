from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema

class Car(db.Model, BaseModel):

    __tablename__ = 'cars'


    make = db.Column(db.String(40), nullable=False)
    model = db.Column(db.String(40), nullable=False)
    top_speed = db.Column(db.Integer, nullable=False)
    engine_type = db.Column(db.String(20))
    range = db.Column(db.Integer, nullable=False)
    production_year = db.Column(db.Integer, nullable=False)
    image = db.Column(db.String(300))
    blurb = db.Column(db.String(1000))
    image_2 = db.Column(db.String(300))


class CarSchema(ma.ModelSchema):

    class Meta:
        model = Car

    comments = fields.Nested('CommentSchema', many=True, exclude=('car', 'created_at', 'updated_at'))

class Comment(db.Model, BaseModel):

    __tablename__ = 'comments'

    content = db.Column(db.Text, nullable=False)
    car_id = db.Column(db.Integer, db.ForeignKey('cars.id'))
    car = db.relationship('Car', backref='comments')

class CommentSchema(ma.ModelSchema, BaseSchema):

    class Meta:
        model = Comment
