import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useStore } from "../hooks/useStore";
import { createNote } from '../api/api';
import React from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const { authData: authToken } = useStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const note = { headline: title, body };

    setIsPending(true);

    try {
      const { id } = await createNote(note, authToken);
      setIsPending(false);
      navigate(`/notes/${id}`);
    } catch (err) {
      if (err && err.response && err.response.status === 401) {
        console.log('Unauthenticated, redirecting to login')
        navigate('/login');
      }
      console.log({ err });
    }
  }

  return (
    <div className="create">
      <h2>Add a New Note</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Note</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        {!isPending && <button>Add Note</button>}
        {isPending && <button disabled>Adding Note</button>}
      </form>
    </div>
  );
}

export default Create;
