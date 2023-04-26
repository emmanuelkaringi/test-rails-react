import React, { useState } from 'react';
import { Thought } from '../types';

type ThoughtProps = {
  thought: Thought;
  onToggleFavorite: (id: string) => void;
  isFavorited: boolean;
};

const Thought: React.FC<ThoughtProps> = ({ thought, onToggleFavorite, isFavorited }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedAnswer, setEditedAnswer] = useState(thought.answer);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedAnswer(thought.answer);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    thought.answer = editedAnswer;
    setIsEditing(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedAnswer(event.target.value);
  };

  return (
    <div>
      <h3>{thought.question}</h3>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <textarea value={editedAnswer} onChange={handleInputChange} />
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </form>
      ) : (
        <>
          <p>{thought.answer}</p>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
      <button onClick={() => onToggleFavorite(thought.id)}>
        {isFavorited ? 'Unfavorite' : 'Favorite'}
      </button>
    </div>
  );
};

export default Thought;
