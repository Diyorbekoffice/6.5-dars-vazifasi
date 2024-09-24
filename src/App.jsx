import React, { useState } from 'react';

function App() {
  const [text, setText] = useState(''); 
  const [user, setUser] = useState([]);  

  function handleClick(event) {
    event.preventDefault();
    if (!text.trim()) {
      alert('Task yozilmagan! Iltimos, vazifani kiriting.');
      return;
    }
    const users = {
      id: Date.now(),  
      text,  
    };
    setUser([...user, users]); 
    setText('');  
  }

  const handleDelete = (id) => {
    setUser(user.filter((item) => item.id !== id));
  };

  return (
    <div className="container justify-center w-96 mx-auto mt-5 border p-10 rounded-md">
      <div className="flex gap-2 items-center">
        <input 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder='Add a new task' 
          className='bg-slate-950 text-white w-80 border-2 rounded-md border-indigo-600 h-10 p-3' 
          type="text" 
        />
        <button 
          onClick={handleClick} 
          className='h-10 w-10 bg-purple-500 rounded-md text-xl pb-1 text-slate-100' 
        >
          +
        </button>
      </div>

      <h1 className='text-white mt-12'>Tasks</h1>

      <div className="wrapper container mx-auto bg-slate-950">
        {user.length > 0 ? user.map((value) => (
          <div key={value.id} className="text-white bg-slate-900 p-4 m-2 rounded shadow-md flex justify-between items-center">
            <h2>{value.text}</h2>
            <button 
              onClick={() => handleDelete(value.id)} 
              className="bg-red-500 text-white rounded px-2"
            >
              Delete
            </button>
          </div>
        )) : <p className="text-gray-400 mt-5">No tasks yet.</p>}
      </div>
    </div>
  );
}

export default App;
