from app import app, db
from models.car import Car, Comment
from models.user import UserSchema

user_schema = UserSchema()


with app.app_context():
    db.drop_all()   # drop all the database tables
    db.create_all() # create all the database tables

    user, errors = user_schema.load({
        'username': 'CliffRock',
        'email': 'cliff@email',
        'password': 'pass',
        'password_confirmation': 'pass'
    })

    if errors:
        raise Exception(errors)

    # create some cars
    ferrari = Car(
        make="Ferrari",
        model="SF90",
        # licence="GH12 007",
        top_speed="211",
        engine_type="Hybrid Electric"
        )

    jaguar = Car(
        make="Jaguar",
        model="I-Pace",
        # licence="HY56 7LL",
        top_speed="124",
        engine_type="All Electric"
    )

    tesla = Car(
        make="Tesla",
        model="Model 3",
        # licence="YE55 8KP",
        top_speed="155",
        engine_type="All Electric"
    )

    aston_martin = Car(
        make="Aston Martin",
        model="Valhalla",
        # licence="DB08 007",
        top_speed="220",
        engine_type="Hybrid Electric"
    )

    comment_one = Comment(
        content="Ferrari will do for electric, what it did for the combustion engine!",
        car=ferrari
    )

    comment_two = Comment(
        content="My next vehicle!",
        car=jaguar
    )

    comment_three = Comment(
        content="It's electrying!",
        car=tesla
    )

    comment_four = Comment(
        content="I think I'm in Heaven!",
        car=aston_martin
    )


    # add the cars to the session
    db.session.add(user)
    db.session.add(ferrari)
    db.session.add(jaguar)
    db.session.add(tesla)
    db.session.add(aston_martin)
    db.session.add(comment_one)
    db.session.add(comment_two)
    db.session.add(comment_three)
    db.session.add(comment_four)

    # save the data to the database
    db.session.commit()
