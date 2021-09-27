import React,{useContext} from 'react'
import calenderLogo from "../assets/logo.png"
import GlobalContext from "../context/GlobalContext";
function CalenderHeader() {
    const {monthIndex,setMonthIndex} = useContext(GlobalContext);
    function handlePrevmonth(){
        setMonthIndex(monthIndex-1)
    }
    function handleNextmonth(){
        setMonthIndex(monthIndex+1);
    }

    return (
        <header className="px-4 py-2 flex items-center">
            <img src={calenderLogo} alt="calender" className="mr-2 w-12 h-12"/>
            <h1 className="mr-10 text-xl text-gray-500 font-bold">Calender</h1>
            <button className="border rounded py-2 px-4 mr-5">
                Today
            </button>
            <button onClick={handlePrevmonth}>
                <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
                    chevron_left
                </span>
            </button>
            <button onClick={handleNextmonth}>
                <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
                    chevron_right
                </span>
            </button>
        </header>
    )
}

export default CalenderHeader
