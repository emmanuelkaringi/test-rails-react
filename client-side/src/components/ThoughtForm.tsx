import React, { useState } from 'react';
import '../styles/ThoughtList.css'

type Question = {
  text: string;
  id: string;
};

type ThoughtFormProps = {
  question: Question;
  onBack: () => void;
  onSubmit: (answer: string) => void;
};

const ThoughtForm: React.FC<ThoughtFormProps> = ({ question, onBack, onSubmit }) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(answer);
    setAnswer('');
  };

  return (
    <>
    <form onSubmit={handleSubmit} className='answer-thought'>
      <h3>{question.text}</h3>
      <label>
        Your answer:
        <input type="text" value={answer} onChange={(event) => setAnswer(event.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
    <button className='back-btn' onClick={onBack}>Back</button>
    </>
  );
};

export default ThoughtForm;