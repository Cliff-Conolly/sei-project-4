from app import app
from controllers import cars, auth

app.register_blueprint(cars.api, url_prefix='/api')
app.register_blueprint(auth.api, url_prefix='/api')
