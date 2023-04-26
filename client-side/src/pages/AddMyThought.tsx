import Header from "../components/Header";
import NavBar from "../components/NavBar";
import React, { useState } from 'react';
import { addThought } from '../MyThoughtsDB';
import { Thought } from '../types';
import '../styles/ThoughtList.css'

type ThoughtFormProps = {};

const ThoughtForm: React.FC<ThoughtFormProps> = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newThought: Thought = {
      id: String(Date.now()),
      question: question,
      answer: answer,
    };
    addThought(newThought);
    setQuestion('');
    setAnswer('');
  };

  return (
    <div className="add-thought-form">
      <Header/>
      <NavBar />
    
    <form onSubmit={handleSubmit}>
      <label>
        Question: <br />
        <input type="text" value={question} onChange={(event) => setQuestion(event.target.value)} />
      </label>
      <br />
      <label>
        Answer: <br />
        <input type="text" value={answer} onChange={(event) => setAnswer(event.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default ThoughtForm;
