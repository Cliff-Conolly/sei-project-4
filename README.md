# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Software Engineering Immersive Project #4: Tor

Project 4 by:  Cliff Conolly

---

## Introduction:

Tor is an app that use Python and Flask for the backend and an internal API. It is modeled after Wikipedia in that it is a database which lists current and future all electric and hybrid electric vehicles. It allows all users to view the vehicles from the homepage, but only 'registered' users can add vehicles to the database.

---

## Timeframe:
1 week (July 2019)

---


## Technologies used:
* React
* Python
* Flask
* Marshmallow
* PostgreSQL
* SQLAlchemy

---


## Overview:


###### Homepage
![Home Page](src/assets/screenshots/homepage.png)

The homepage allows users to sign in if they would like to add a new vehicle to the database or non-registered users to just be able to view the collection of vehicles (see below) via the 'Stable' button.

###### Sign In & Stable
![Sign In & Stable](src/assets/screenshots/sign_in.gif)

Non-registered users are able to register (see below) via the 'Sign In' form by clicking the 'Create Account' button.


###### Register
![Register](src/assets/screenshots/register.gif)


Once registered users are able to create a vehicle by clicking the 'Forge' button (see below).


###### Forge
![Forge](src/assets/screenshots/forge.png)

---

## Wins & Challenges:

I've decided to put these two categories together because their relationship is quite symbiotic. Before the project started we had a 3 day review of Python & Flask, and from the onset I could see that it would require detailed note taking. In addition I videoed our teacher who gave a summary at the end of each day of what we had done. This was priceless and it took many hours to put down on paper because I was very meticulous with the details. To this day I thank my past self for this, because when the project started right after being taught (foresight by the teacher), it made the backend almost effortless to re-do. Therefore, this was my greatest challenge and win on this project.


![Notes](src/assets/screenshots/notes.gif)

---

## Process:

Before and during the process, hand sketches were drawn to show possible relationships between models for SQLAlchemy and concepts for the frontend user interface.

![Process](src/assets/screenshots/TorProcess.gif)

---

## Bugs:

There is a bug when the user clicks an image of a vehicle in the 'Stable' page that lists all of them. The error is occurring in the <CarsShow> component and being caught during rendering, and can probably be fixed with adding an 'error boundary' to the child component tree to help with error handling behavior.

![Bug](src/assets/screenshots/bug.gif)

---

## Future features:

- Going forward I will continue to work on the app and allow it to be able to consume data from an external API to get charging points throughout London.
- There is an mp4 file for the 'Forge' interface that I want to embed and will research on how to do that.
- In addition I will also touch up on some of the styling.

---

## API Documentation

#### Sample of Seeds:

###### 1. Create a car:

```
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
```

###### 2. Add the car to the database:

```
db.session.add(ferrari)
```


### Live site: https://tor-electric.herokuapp.com/cars
