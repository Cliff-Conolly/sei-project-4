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
        top_speed="211",
        engine_type="Hybrid Electric",
        range="16",
        production_year="2020",
        image="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/ferrari_sf90_stradale_3_0.jpg"
        )

    jaguar = Car(
        make="Jaguar",
        model="I-Pace",
        top_speed="124",
        engine_type="All Electric",
        range="257",
        production_year="2018",
        image="https://car-images.bauersecure.com/pagefiles/80592/1040x585/z_jaguar_i-pace_rear.jpg"
    )

    tesla = Car(
        make="Tesla",
        model="Model 3",
        top_speed="155",
        engine_type="All Electric",
        range="325",
        production_year="2017",
        image="https://icdn2.digitaltrends.com/image/tesla-model-3-red-2.jpg"
    )

    aston_martin = Car(
        make="Aston Martin",
        model="Valhalla",
        top_speed="220",
        engine_type="Hybrid Electric",
        range="999",
        production_year="2021",
        image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/aston-project-003-101-1561374133.jpg"
    )

    mclaren = Car(
        make="McLaren",
        model="Speedtail",
        top_speed="250",
        engine_type="Hybrid Electric",
        range="999",
        production_year="2019",
        image="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fnargessbanks%2Ffiles%2F2018%2F10%2FMcLaren-Speedtail-01.jpg"
    )

    porsche = Car(
        make="Porsche",
        model="Taycan",
        top_speed="155",
        engine_type="Electric",
        range="310",
        production_year="2019",
        image="https://ev-database.uk/img/auto/Porsche_Mission_E/Porsche_Mission_E-01.jpg"
    )

    volkswagen = Car(
        make="Volkswagen",
        model="ID Buzz",
        top_speed="99",
        engine_type="Electric",
        range="373",
        production_year="2022",
        image="https://amp.businessinsider.com/images/5a4d0394396e3741008b4921-1136-852.jpg"
    )

    rimac = Car(
        make="Rimac",
        model="C_Two",
        top_speed="258",
        engine_type="Electric",
        range="402",
        production_year="2020",
        image="https://amp.businessinsider.com/images/5b7d8b5f959f34fd0a8b5381-1334-1000.jpg"
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
    db.session.add(mclaren)
    db.session.add(porsche)
    db.session.add(volkswagen)
    db.session.add(rimac)
    db.session.add(comment_one)
    db.session.add(comment_two)
    db.session.add(comment_three)
    db.session.add(comment_four)

    # save the data to the database
    db.session.commit()
