import React, { useState } from 'react';
import axios from 'axios';

const SearchPerson = () => {
  const [name, setName] = useState('');
  const [person, setPerson] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5340/person/${name}`);
      setPerson(response.data);
      setError('');
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('Person not found');
      } else {
        setError('Server error');
      }
      setPerson(null);
    }
  };

  return (
    <div className=" bg-gray-100 flex items-center justify-center mt-16 p-5">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-5 text-center">Search Person</h1>
        <div className="mb-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleSearch}
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Search
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {person && (
          <div className="mt-5 p-4 bg-gray-50 rounded-lg shadow-inner">
            <h2 className="text-xl font-bold mb-2">{person.form1.name}</h2>
            <div className="space-y-2">
              <p><span className="font-semibold">College ID:</span> {person.form1.college_id}</p>
              <p><span className="font-semibold">Age:</span> {person.form1.age}</p>
              <p><span className="font-semibold">Gender:</span> {person.form1.gender}</p>
              <p><span className="font-semibold">School Name:</span> {person.form1.school_name}</p>
              <p><span className="font-semibold">Phone:</span> {person.form1.phone}</p>
              <p><span className="font-semibold">Email:</span> {person.form1.email}</p>
              <p><span className="font-semibold">Route Name:</span> {person.form2.routename}</p>
              <p><span className="font-semibold">Stop Name:</span> {person.form2.stopname}</p>
              <p><span className="font-semibold">Selected Bus:</span> {person.form3.selectedBus}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPerson;
