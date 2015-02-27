webchaussette

# install the dependencies
pip install -r requirements.txt --allow-all-external

# start nginx

# start the app with gunicorn and gevent
gunicorn app:app --debug -b localhost:5000 --worker-class "socketio.sgunicorn.GeventSocketIOWorker"