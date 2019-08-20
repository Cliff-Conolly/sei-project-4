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
        image="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/ferrari_sf90_stradale_3_0.jpg",
        blurb="This is Ferrari’s first PHEV (plug-in hybrid vehicle) developing 986bhp, or a nice round 1000cv if you’re Italian. Doing the heavy lifting in the power stakes is a heavily revised version of Ferrari’s twin-turbo V8, which delivers 769bhp. The headline is that the SF90 Stradale produces 390kg of downforce at 155mph. It seems the SF90 is set to redefine our understanding of rapid, being the fastest series production Ferrari of all time. Thanks to AWD and hybrid tech, the SF90 will propel its lucky occupants from 0–62mph in 2.5 seconds and 0–124mph in 6.7.",
        image_2="https://www.topgear.com/sites/default/files/styles/fit_1960x1102/public/images/news-article/carousel/2019/05/73b2f9ff386e3cf631a99f09addc4b39/ferrari_sf90_stradale_4.jpg"
        )


    jaguar = Car(
        make="Jaguar",
        model="I-Pace",
        top_speed="124",
        engine_type="All Electric",
        range="257",
        production_year="2018",
        image="https://car-images.bauersecure.com/pagefiles/80592/1040x585/z_jaguar_i-pace_rear.jpg",
        blurb="Jaguar has succeeded not only in creating the best electric car on sale but also in building one of the most exciting cars you can currently buy. It is the boldest of bold moves from Jaguar: an all-electric SUV, the first credible rival to Tesla’s premium EV dominance, a car that beats its German rivals to market and a radical piece of design.",
        image_2="http://s22222.pcdn.co/wp-content/uploads/2016/11/2019-Jaguar-I-Pace-in-motion-%E2%80%93-Chasing-Cars.jpg"
    )

    tesla = Car(
        make="Tesla",
        model="Roadster",
        top_speed="250",
        engine_type="All Electric",
        range="620",
        production_year="2020",
        image="https://amp.businessinsider.com/images/5a57df4ef421493e028b4752-1334-1001.jpg",
        blurb="Tesla said the base version of the vehicle will be able to accelerate from 0-60 mph in 1.9 seconds, reach a top speed of 250 mph, and drive 620 miles per charge. Elon Musk said a premium version with a SpaceX upgrade package will include around 10 small rocket thrusters that will improve the vehicle's acceleration, maximum speed, braking, and handling.",
        image_2="https://amp.businessinsider.com/images/5a57e00e28eeccc2008b4740-1334-1001.jpg"
    )

    aston_martin = Car(
        make="Aston Martin",
        model="Valhalla",
        top_speed="220",
        engine_type="Hybrid Electric",
        range="000",
        production_year="2021",
        image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/aston-project-003-101-1561374133.jpg",
        blurb="It's been confirmed, that Bond 25 will showcase the Aston Martin's new Valhalla supercar. The Valhalla, which was first shown off at the Geneva Motorshow, is a hybrid, powered by a twin-turbo V6 along with a battery-electric motor. The Valhalla will pack power befitting its powerful name by using a turbocharged V6 and battery-electric hybrid system. Aston Martin isn't revealing the output yet, but rumors put the figure at roughly 1,000 horsepower (746 kilowatts).",
        image_2="https://pictures.topspeed.com/IMG/crop/201707/aston-martin-valkyri-3_1600x0w.jpg"
    )

    mclaren = Car(
        make="McLaren",
        model="Speedtail",
        top_speed="250",
        engine_type="Hybrid Electric",
        range="000",
        production_year="2019",
        image="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fnargessbanks%2Ffiles%2F2018%2F10%2FMcLaren-Speedtail-01.jpg",
        blurb="As the spiritual successor to the legendary McLaren F1, the 2020 McLaren Speedtail evokes similar desires with its one-of-a-kind design and out-of-this-world performance. The streamlined speedster is the fastest and most powerful McLaren ever built, and it represents the pinnacle of the company's exotic lineup.Combined with an incredibly aerodynamic shape and ultra-lightweight construction, the Speedtail can reach a claimed top speed of 250 mph. Likewise, McLaren says it will accelerate from zero to 186 mph in 12.8 seconds.",
        image_2="https://i.ytimg.com/vi/RGSsy2afEdk/maxresdefault.jpg"
    )

    porsche = Car(
        make="Porsche",
        model="Taycan",
        top_speed="155",
        engine_type="Electric",
        range="310",
        production_year="2019",
        image="https://ev-database.uk/img/auto/Porsche_Mission_E/Porsche_Mission_E-01.jpg",
        blurb="The Porsche Taycan is due to go on sale in 2020, and the German manufacturer has set the Tesla Model S in its sights as it prepares to launch its first-ever electric car. Official performance figures haven’t been confirmed yet, but Porsche is aiming for more than 300 miles of range from a single charge.Acceleration from 0-62mph should take just 3.5 seconds, with 0-124mph projected to take less than 12 seconds. The car's top speed will be around 155mph.",
        image_2="https://media.whatcar.com/wc-image/2018-10/p15_0787_a4_rgb.jpg"
    )

    volkswagen = Car(
        make="Volkswagen",
        model="ID Buzz",
        top_speed="99",
        engine_type="All Electric",
        range="373",
        production_year="2022",
        image="https://amp.businessinsider.com/images/5a4d0394396e3741008b4921-1136-852.jpg",
        blurb="Volkswagen hasn’t confirmed exactly what capacity of battery the Buzz will have, but it’s possible that the production version could carry over the concept's pair of electric motors, giving the car four-wheel drive.Volkswagen hasn’t confirmed exactly what capacity of battery the Buzz will have, but it’s possible that the production version could carry over the concept's pair of electric motors, giving the car four-wheel drive.",
        image_2="https://uploads.volkswagen-newsroom.com/system/production/media/4622/images/d52fa3a75f567bde3ee3d40018d18ba875f43e93/DB2017AU01310_full.jpg"
    )

    rimac = Car(
        make="Rimac",
        model="C_Two",
        top_speed="258",
        engine_type="All Electric",
        range="402",
        production_year="2020",
        image="https://amp.businessinsider.com/images/5b7d8b5f959f34fd0a8b5381-1334-1000.jpg",
        blurb="Croatia’s Rimac Automobili built a very, very fast all-electric hypercar called the Concept Two. It claims to have a 1,914-horsepower engine that enables a 0 to 60 mph acceleration in 1.85 seconds. That would make it one of the quickest cars in existence, quicker than the next-generation Tesla Roadster with its comparatively sluggish 0–60 in 1.9 seconds. Rimac says its 120 kWh battery enables over 400 miles of range, which is a lot more than the 200 miles found in most production EVs. And facial recognition technology will both unlock and start the car, which makes this car the perfect distillation of our current moment of technology and hype.",
        image_2="https://www.rimac-automobili.com/ctwo/gallery/c_two-studio-rear-doors-up.jpg"
    )

    rivian = Car(
        make="Rivian",
        model="R1T",
        top_speed="125",
        engine_type="All Electric",
        range="400",
        production_year="2021",
        image="https://amp.businessinsider.com/images/5bfee55cc9570135e96d6049-1536-1152.jpg",
        blurb="The futuristic Rivian R1T is an all-electric pickup truck from new American startup brand Rivian, and it promises more than 400 miles of driving range and acceleration times comparable with those of a supercar. All-wheel drive is standard on the 2021 R1T thanks to an arrangement similar to the Tesla Model X, where each axle is powered by its own electric motor. A range of 105-, 135-, and 180-kWh battery packs will be available, with ranges of more than 230, 300, and 400 miles, respectively. The 135-kWh model is the quickest of the three, with 754 horsepower and a claimed zero-to-60-mph time of 3.0 seconds. Every version of the R1T has all-wheel drive, with an electric motor at each wheel, and Rivian says that every R1T can tow more than 11,000 pounds.",
        image_2="https://www.topgear.com/sites/default/files/styles/fit_1960x1102/public/images/news-article/carousel/2018/11/f9c2deb4045d21d2409b5c74ebc1afb5/a._rivian_r1t_front_view.jpg"
    )

    lamborghini = Car(
        make="Lamborghini",
        model="Terzo Millenio",
        top_speed="186",
        engine_type="Hybrid Electric",
        range="000",
        production_year="2019",
        image="https://static.designboom.com/wp-content/uploads/2017/11/lamborghini-terzo-millennio-designboom-10.jpg",
        blurb="The Terzo Millennio uses high-capacity supercapacitors in lieu of batteries, due to their more rapid storage and discharge of energy. These supercapacitors have been made to simultaneously capture and release energy to give the car an increase in high performance, without having the depend on chemical reactions. Each wheel, the rims of which glow orange, contains an electric motor, so that the amount of torque can be controlled individually, making the car's stability as good as a modern Formula One car. Because there is a motor on every rim, the car would be all-wheel drive if it were a running model.",
        image_2="http://freshwallpapers.net/download/22582/2560x1600/download/lamborghini-terzo-millennio-2019.jpg"
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
    db.session.add(rivian)
    db.session.add(lamborghini)
    db.session.add(comment_one)
    db.session.add(comment_two)
    db.session.add(comment_three)
    db.session.add(comment_four)

    # save the data to the database
    db.session.commit()
