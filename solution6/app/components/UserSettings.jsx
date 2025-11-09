"use client"

import useLocalStorage from '../hooks/useLocalStorage'; // Import des Custom Hooks

function UserSettings() {

    const [name, setName] = useLocalStorage('username', 'JohnDoe');
    
    const handleNameChange = (event) => {
        // Die setName-Funktion des Hooks aktualisiert den State UND den localStorage
        setName(event.target.value); 
    };

    return (
      <div>
        <h3 className="mb-6">
          Your saved user name (please refresh browser to test it):
          <p className="bg-red-500 p-4 w-[200px] rounded-2xl text-blue-800">
            {name}
          </p>
        </h3>

        <p>
          Enter here a user name, which will be saved!
        </p>
        <input
          type="text"
          placeholder="Please enter your user name..."
          value={name} 
          onChange={handleNameChange}
          className="bg-blue-200 p-4 rounded-2xl text-black"
        />
      </div>
    );
}

export default UserSettings;