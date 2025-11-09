"use client"

import useLocalStorage from '../hooks/useLocalStorage'; // Import des Custom Hooks

function UserSettings() {

    const [name, setName] = useLocalStorage('username', 'Gast');
    
    const handleNameChange = (event) => {
        // Die setName-Funktion des Hooks aktualisiert den State UND den localStorage
        setName(event.target.value); 
    };

    return (
        <div >
            <h3>Willkommen zurück, {name}! 👋</h3>
            <p>Dein Name wird im Browser gespeichert.</p>

            <input
                type="text"
                placeholder="Gib deinen Namen ein..."
                value={name} // Das Eingabefeld spiegelt den aktuellen Wert wider
                onChange={handleNameChange}
             
            />
            
            <p >
                Probiere es aus: Ändere den Namen und lade die Seite neu.
            </p>
        </div>
    );
}

export default UserSettings;