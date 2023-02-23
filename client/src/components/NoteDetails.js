import { useParams, useNavigate } from 'react-router-dom';
import { getNote } from '../api/api';
import { useEffect, useState } from "react";
import { useStore } from "../hooks/useStore";
import React from 'react';

const NoteDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { authData: authToken } = useStore();
  const [note, setNote] = useState([]);

  useEffect(() => {
    async function get() {
      try {
        setNote(await getNote(id, authToken));
      } catch (err) {
        if (err && err.response && err.response.status === 401) {
          console.log('Unauthenticated, redirecting to login')
          navigate('/login');
        }
        console.log({ err });
      }
    }
    get();
  }, [authToken, id]);



  return (
    <div className="NodeDetails">
      <h2>{note.headline}</h2>
      <p>{note.body}</p>
      CreatedAt: {note.createdAt}
    </div>
  )
}

export default NoteDetails;

