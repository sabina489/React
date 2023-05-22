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


import CreateItem from "./components/CreateItem";

import NewItems from "./components/NewItems/NewItems";
// import Create from "./components/Create";

function App() { 
  const items = [
    {
      id:'i1',
      title:'insurance',
      amount:100,
      date : new Date(2013, 2, 2),
      
    },
    {
      id:'i1',
      title:'react',
      amount:500,
      date : new Date(2013, 2, 2),
      
    },
    {
      id:'i1',
      title:'python',
      amount:800,
      date : new Date(2020, 2, 2),
    },
  ]



  return (
    <div>
      <NewItems/>
      <h2>Let's get started!</h2>
  
      <CreateItem title={items[0].title} amount={items[0].amount} date={items[0].date} ></CreateItem>     
      <CreateItem title={items[1].title} amount={items[1].amount} date={items[1].date}></CreateItem>     
      <CreateItem title={items[2].title} amount={items[2].amount} date={items[2].date}></CreateItem>     

      {/* <CreateItem items ={Create}></CreateItem> */}


    </div>
  );
}



export default App;

