import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useStore } from "../hooks/useStore";
import { getNotes } from "../api/api";
import { useEffect, useState} from "react";
import React from "react";

const Notes = () => {
  const navigate = useNavigate();
  const { authData: authToken } = useStore();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function get() {
      try {
        const notesFromApi = await getNotes(authToken);
        setNotes(notesFromApi);
      } catch (err) {
        if (err && err.response && err.response.status === 401) {
          console.log('Unauthenticated, redirecting to login')
          navigate('/login');
        }
        console.log({ err });
      }
    }
    get();
  }, [authToken]);

  return (
    <div className="NodeList">
      {notes.map(note => (
        <div className="note-preview" key={note.id}>
          <Link to={`/notes/${note.id}`}>
            <h2>{note.headline}</h2>
          </Link>

        </div>
      ))}
    </div>
  )
}

export default Notes;
