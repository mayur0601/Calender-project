
import React,{useState,useContext,useEffect} from 'react';
import './App.css';
import {getMonth} from './utils';
import CalenderHeader from './components/CalenderHeader';
import Sidebar from './components/Sidebar';
import Month from './components/Month';
import Events from './components/Events';
import GlobalContext from './context/GlobalContext';
function App() {
  console.table(getMonth());
  const [currMonth,setCurrMonth] = useState(getMonth());
  const {monthIndex} = useContext(GlobalContext);
  useEffect(()=>{
    setCurrMonth(getMonth(monthIndex));
  },[monthIndex]);
  return (
    <div className="App">
     <React.Fragment>
        <div className="h-screen flex flex-col">
          <CalenderHeader/>
          <div className="flex flex-1">
            <Sidebar/>
            <Month month={currMonth}/>
            <Events/>
            </div>
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;
