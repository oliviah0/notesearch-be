const notesIndex = require('../inverted_index/notes.json');
const questionsAnswersMap = require('../inverted_index/q_and_a.json');

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
    // Hold all the questions that involve the words
    let questions = [];
    words.split(' ').forEach(word => {
      let q = this.index[word];
      questions = [...questions, ...q];
    });

    // Remove duplicate questions
    questions = new Set(questions);
    if (questions.size === 0) return [];

    // Return an array of all the question/answer pairs 
    return [...questions].map(question => ({
      question,
      answer: this.qa[question]
    }));


  }
}

module.exports = new SearchEngine();
