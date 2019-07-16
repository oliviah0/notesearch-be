""" Python script that creates an inverted index of the q/a's from 
all the conceptual questions and stores it as JSON.
"""

import nltk
from nltk.corpus import stopwords
import string
import json


# Functions to parse the conceptual.md file

def is_week(line):
    words = line.split()
    return words[0] == '#'

def is_question(line):
    """ Returns whether the line is a question """
    words = line.split()
    return words[0] == '###'

def sanitize_question(line):
    """ Removes markdown from the line """
    return line[7:-3]

# Functions to clean and parse the words when building index
NON_WORDS = [*stopwords.words('english'), *string.punctuation]

def filter_words(tokens):
    return ([
        word.lower()
        for word in tokens 
        if word not in NON_WORDS
    ])


def add_words_to_index(inv_index, words, question):
    for word in words:
        if word not in inv_index:
            inv_index[word] = set()
        inv_index[word].add(question)
            
INP = 'conceptual-all.md'
# First create the question with its values
q_and_words = {}
with open(INP, "r") as inp:
    
    curr_question = ""
    for line in inp:
        line = line.strip()
        if not line or is_week(line): continue
        
        # Initialize key to be question, and an array of responses
        if is_question(line):
            question = sanitize_question(line)
            q_and_words[question] = []
            curr_question = question
        else:
            # Add the answers to the question
            q_and_words[curr_question].append(line)

# We can export the q_and_words to be a Q & A 
with open('q_and_a.json', 'w') as fp:
    json.dump(q_and_words, fp)

# Now, lets build! 
# key will be the token :, value will be array of [questions] that it belongs to
inv_index = {}

for question, answer in q_and_words.items():
    tokens = nltk.word_tokenize(' '.join((question, *answer)))
    filtered_words = filter_words(tokens)
    add_words_to_index(inv_index, filtered_words, question)

# Convert keys back to arrays for serialization
inv_index_s = { key: list(value) for (key, value) in inv_index.items()}
with open('notes.json', 'w') as fp:
    json.dump(inv_index_s, fp)
