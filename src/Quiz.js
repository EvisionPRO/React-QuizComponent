import React, { Component } from 'react'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_position: 1,
    }
  }
  render() {
    const { quiz_position } = this.state;
    console.log(quizData);
    return (
      <div className="QuizQuestion">
        <span>{quizData.quiz_questions[quiz_position].instruction_text}</span>
      </div>
    );
  }
}

export default Quiz
