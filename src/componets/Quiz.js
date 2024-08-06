import React from 'react';
import PropTypes from 'prop-types';
import OneChoiceQuestion from './OneChoiceQuestion';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import InputQuestion from './InputQuestion';

function Quiz({ question, onAnswer }) {
  const renderQuestion = () => {
    switch (question.type) {
      case 'one-choice':
        return <OneChoiceQuestion question={question} onAnswer={onAnswer} />;
      case 'multiple-choice':
        return <MultipleChoiceQuestion question={question} onAnswer={onAnswer} />;
      case 'input':
        return <InputQuestion question={question} onAnswer={onAnswer} />;
      default:
        return null;
    }
  };

  return (
    <div className="quiz">
      <h1>{question.title}</h1>
      {question.image && <img src={question.image} alt="quiz" />}
      <p>{question.description}</p>
      {renderQuestion()}
    </div>
  );
}

Quiz.propTypes = {
  question: PropTypes.object.isRequired,
  onAnswer: PropTypes.func.isRequired
};

export default Quiz;
