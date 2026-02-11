import { useState, useEffect } from "react";
import axios from 'axios';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/notes/read');
      setNotes(response.data.notes);
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/notes/create', { title, description });
      console.log(response);
      setTitle("");
      setDescription("");
      fetchNotes();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/notes/delete/${id}`);
      console.log(response);
      fetchNotes();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <form className="flex gap-4 mb-8" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded p-1"
          placeholder="Enter title"
        />

        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border rounded p-1"
          placeholder="Enter description"
        />

        <button type="submit" className="p-1 bg-blue-500 text-white rounded">Submit</button>
      </form>

      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">My Notes</h1>

      {loading ? (
        <p className="text-center">Loading notes...</p>
      ) : (
        <div className="flex flex-wrap gap-6 max-w-6xl mx-auto">
          {notes?.map((note) => (
            <div key={note._id} className="bg-white rounded-xl p-6 shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold text-gray-800 capitalize mb-2">
                {note.title.slice(0, 20)}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {note.description}
              </p>
              <button
                className="p-1 border border-red-500 rounded-xl bg-red-500 text-white mt-4 cursor-pointer"
                onClick={() => handleDelete(note._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;