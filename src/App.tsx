import React from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      {
        !true?
        <Dashboard  />
        :
        <Login/>
      }
   
    </div>
  );
}

export default App;