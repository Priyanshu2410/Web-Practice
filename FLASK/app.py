from flask import Flask,render_template
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime 
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']= "sqlite:///todo.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']= False
db = SQLAlchemy(app)

class Todo(db.Model):
    SRno = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(200),nullable=False)
    dec = db.Column(db.String(500),nullable=False)
    # created = db.Column(db.DataTime,default=datetime.utcnow)

def __repr__(self) -> str:
        return f"{self.SRno} - {self.name}"

@app.route('/')
def hello_world():
    return render_template('index.html')
    # return 'Hello, World!'
@app.route('/product')
def product():
    return 'dsk'

if __name__ == "__main__":
    app.run(debug=True)