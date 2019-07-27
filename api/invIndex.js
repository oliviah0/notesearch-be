// Index of notes and a Mapping of Questions : Answers
const notesIndex = require('../inverted_index/notes.json');
const questionsAnswersMap = require('../inverted_index/q_and_a.json');

/** Class that handles quickly searching for question/answer pairings based on search term.
 * index is an object with key: word, values: array of questions that have that word
 * qa is an object mapping questions to answers.
 */
class SearchEngine {
  constructor() {
    this.index = notesIndex;
    this.qa = questionsAnswersMap; // Key: Question string, value: answer (array)
  }

  /** Returns an array of objects. Each object has a question and answer property.
   * Question is a string, answer is an array of strings.
   *  that involve the search word
   *
   * @param {string} word 
   */
  searchWord(word) {
    const questions = this.index[word];

    if (!questions) return []; // No questions found
    return questions.map(question => ({
      question,
      answer: this.qa[question]
    }));

  }

  // Searches a word uses multiple words, separated by spaces
  searchWords(words) {
    // First, given the words, find all the questions that deal with each word.

    // Hold all the questions that involve the words
    let questions = new Set();
    words.split(' ').forEach((word, i) => {
      let q = this.index[word] || [];

      // First index adds the set, the next ones grab the intersection
      questions = new Set(i === 0 ? q : q.filter(ele => questions.has(ele)));
    });

 
    if (questions.size === 0) return [];

    // Return an array of all the question/answer pairs 
    return [...questions].map(question => ({
      question,
      answer: this.qa[question]
    }));
  }

  /** Returns random question(s) and answer(s) */
  random(amount=1) {
    const keys = Object.keys(this.qa);

    let results = [];
    while (amount) {
      let question = keys[keys.length * Math.random() << 0];
      
      let questionObj = {
        question,
        answer: this.qa[question] 
      };

      results.push(questionObj);
      amount--;
    }

    return results;

  }
}

module.exports = new SearchEngine();
