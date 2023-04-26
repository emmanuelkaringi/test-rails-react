import React, { useState } from 'react';
import thoughtfulQuestions from '../ThoughtsArray';
import ThoughtForm from './ThoughtForm';
import '../styles/ThoughtList.css'

type Question = {
  text: string;
  id: string;
};

type ThoughtListItemProps = {
  question: Question;
  onClick: (id: string) => void;
};

const ThoughtListItem: React.FC<ThoughtListItemProps> = ({ question, onClick }) => {
  return (
    <li onClick={() => onClick(question.id)}>{question.text}</li>
  );
};

type ThoughtListProps = {
  questions: Question[];
  onQuestionSelect: (id: string) => void;
};

const ThoughtList: React.FC<ThoughtListProps> = ({ questions, onQuestionSelect }) => {
  return (
    <>
      <h2 className='thoughtlist-h2'>Thoughtful Questions</h2>
      <ul className='thought-list-ul'>
        {questions.map((question) => (
          <ThoughtListItem
            key={question.id}
            question={question}
            onClick={onQuestionSelect}
          />
        ))}
        
      </ul>
    </>
  );
};

const ThoughtListContainer: React.FC = () => {
  const questions: Question[] = thoughtfulQuestions.map((text, index) => ({ text, id: `question-${index}` }));
  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleQuestionSelect = (id: string) => {
    setActiveQuestionId(id);
    setShowForm(true);
  };

  const handleFormSubmit = (answer: string) => {
    setShowForm(false);
  };

  const handleFormBack = () => {
    setShowForm(false);
  };

  return (
    <>
      {!showForm && <ThoughtList questions={questions} onQuestionSelect={handleQuestionSelect} />}
      {showForm && activeQuestionId && (
        <ThoughtForm
          question={questions.find((q) => q.id === activeQuestionId)!}
          onSubmit={handleFormSubmit}
          onBack={handleFormBack}
        />
      )}
    </>
  );
};

export default ThoughtListContainer;