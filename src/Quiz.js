import React, { Component } from 'react'

import QuizQuestion from './QuizQuestion'
let quizData = require('./quiz_data.json')

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_position: 1,
    }
  }
  render() {
    // const { quiz_position } = this.state;
    // console.log(quizData);
    return (
      <div>
        <QuizQuestion quiz_question={quizData.quiz_questions[0]} />
      </div>
    );
  }
}

export default Quiz
