from tokenizer import Tokenizer
from flask import Flask, request

the_token_man = Tokenizer()

def create_app():
    app = Flask("konoha")

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

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)



