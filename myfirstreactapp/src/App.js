import React, { useState } from 'react';
import Tweet from "./tweet";

function App()
{
  const [users,setUsers] = useState([
    {name:"Ashay", message:"hi"},
    {name:"adit", message:"hello"},
    {name:"yug", message:"bye"}
  ]);
  return (
    <div className="app">
      {users.map(user=>(
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;





// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
