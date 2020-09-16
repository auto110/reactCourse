import React from 'react';
import './App.css';
import Profile from "./Profile"

const user = {
  name: "Brian",
  interests: "Reading, Swimming, Technology",
  age: 9,
  image: "https://unsplash.com/photos/g4PLFkpUf4Q",
  color: "Red",
  movie: "Star Wars"
};

function App() {
  return (
    <div className="App">
      <Profile user = {user}/>
    </div>
  );
}

export default App;
