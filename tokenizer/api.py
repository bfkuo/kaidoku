from tokenizer import Tokenizer
from flask import Flask, request
from pymongo import MongoClient
from dotenv import load_dotenv
import os
from flask_cors import CORS, cross_origin


the_token_man = Tokenizer()

def create_app():
    load_dotenv()
    db_conn_str = os.environ['DB_URL'].replace('#user#',os.environ['DB_USER']).replace('#pass#',os.environ['DB_PASS'])
    app = Flask("konoha")
    db_client = MongoClient(db_conn_str)
    db = db_client['kaidoku']

    @app.post('/tokenize_text_all')
    def tokenize_text():
        text = request.form.get('text')
        print(text)
        return str(the_token_man.tokenize_text(text))

    @app.post('/tokenize_sentences')
    def tokenize_sentence():
        text = request.form.get('text')
        print(text)
        return str(the_token_man.break_sentences(text))

    @app.post('/tokenize_words')
    def tokenize_word():
        text = request.form.get('text')
        print(text)
        return str(the_token_man.break_words(text))


    #TODO: setup ssl for https
    @app.post('/login')
    @cross_origin()
    def login():
        email = request.form.get('email')
        pwd = request.form.get('password')
        #TODO: salt, crypt
        #TODO: allow sign in with google lol
        #TODO: just general auth...
        user = db.get_collection('users').find_one({'email':email})
        print (user, email)
        if(user is not None):
            return {
                "username":user['username'],
                "email":user['email'],
                # "joined":user['joined'] #TODO: deal with this lol
                "image":user['image'],
                "words":user['words']
            }
        else:
            return {"error":"Could not find user with provided email."}

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)



