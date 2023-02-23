from konoha import WordTokenizer, SentenceTokenizer

class Tokenizer:

    def __init__(self) -> None:
        self.word_tokenizer = WordTokenizer('MeCab')
        self.sentence_tokenizer = SentenceTokenizer()

    def tokenize_text(self, text=""):
        tokens = []
        for sentence in self.break_sentences(text):
            tokens.extend(self.break_words(sentence))
        return tokens
       # return map(self.break_words, self.break_sentences(text))

    # Where text is a large text
    # returns sentences
    def break_sentences(self, text=""):
        return self.sentence_tokenizer.tokenize(text)

    # Where text is one sentence
    # returns words
    def break_words(self, text=""):
        return self.word_tokenizer.tokenize(text)