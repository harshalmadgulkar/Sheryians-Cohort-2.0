import { useState } from 'react';
import './App.css';

function App() {

  // Implement remove functionality and <Card/> component

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");

  const [allUsers, setallUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    let user = { name, imageUrl, role, description };
    setallUsers([...allUsers, user]);

    //reset all states
    setName('');
    setImageUrl('');
    setRole('');
    setDescription('');
    console.log("form submitted");
  };

  return (
    <div className='h-screen bg-black text-white text-center'>
      <h1 >Contact List</h1>

      <form
        onSubmit={(e) => submitHandler(e)}
        className='px-2 py-10 flex flex-wrap justify-center'
      >
        <div>
          <input placeholder='Enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[48%]'
          />

          <input placeholder='Image URL'
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            type="text"
            className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[48%]'
          />

          <input placeholder='Enter role'
            value={role}
            onChange={(e) => setRole(e.target.value)}
            type="text"
            className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[48%]'
          />

          <input placeholder='Enter Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[48%]'
          />

        </div>

        <button
          type="submit"
          className="px-5 py-2 text-xl active:scale-95 cursor-pointer font-semibold bg-emerald-600 w-[40%] rounded">
          Submit
        </button>
      </form>

      <div className='px-2 py-10 flex flex-wrap'>
        {allUsers.map((user, idx) => (
          <div id={idx}
            className='lg:w-[23vw} md:w-[30vw] sm:w-[45vw] rounded-xl py-8 px-8 flex items-center flex-col text-center bg-white text-black'
          >
            <img src={user.imageUrl} className='h-24 w-24 rounded-full object-center object-cover' />
            <h1 className='text-2xl mt-2 font-bold'>{user.name}</h1>
            <h5 className='text-blue-500 text-lg font-semibold my-2'>{user.role}</h5>
            <p className='text-sm font-medium leading-tight'>{user.description}</p>
            <button
              className='px-4 py-2 rounded text-xs cursor-pointer active:scale-95 bg-red-600 text-white font-semibold mt-3'
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
