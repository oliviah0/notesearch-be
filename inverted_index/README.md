# Rebuilding the inverted index

The md_to_json.py takes in the conceptual-all.md text and converts it into an inverted index as a .json file.

If you want to modify the script and re-run it:

1) Create a virtual environment and use it

```bash
python3 -m venv venv
source venv/bin/activate
```

2) Install requirements (nltk mostly)
pip3 install -r requirements.txt

3) Run the script
python3 md_to_json.py

These two .jsons are created:
#### notes.json
the inverted index. Keys are words (string), values are an array of all the questions (as strings), that contain that word in their answer.

#### q_and_a.json
Just a map of question : answer.
Question is a string.
Answer is an array of strings. 


