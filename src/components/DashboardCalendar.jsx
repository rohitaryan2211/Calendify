import {React, useState} from "react"; 
import { generateDate, months } from "../util/calendar";
import cn from "../util/cn";
import dayjs from "dayjs";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";


const DashboardCalendar = () => {
    
  const days = [
    "Sun",
    "Mon",
    "Tue", 
    "Wed", 
    "Thurs", 
    "Fri", 
    "Sat", 
  ];


  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  console.log(selectDate.format('DD/MM/YYYY'));

  const [list, setList] = useState([
    "24/05/2023",
    "25/05/2023",
  ])

  const deleteByValue = value => {
    setList(oldValues => {
      return oldValues.filter(fruit => fruit !== value)
    })
  }

  console.log(list);

  return (
    <>

      <div className="py-5 pb-5 flex justify-between">
        <h1>
          {selectDate.toDate().toDateString()} {}
        </h1>

        {
          list.includes(selectDate.format("DD/MM/YYYY")) ? (
            <button className="bg-primary px-2 py-1 rounded-lg hover:bg-secondary text-white"
              onClick={() => deleteByValue(selectDate.format('DD/MM/YYYY'))}
            >
              Unavailable
            </button> 
          ):(
            <button className="bg-primary px-2 py-1 rounded-lg hover:bg-secondary text-white"
              onClick={() => setList((oldArray) => [...oldArray, selectDate.format('DD/MM/YYYY')])}
            >
              Available
            </button>
          )
          
        }
        
        

      </div>
      
      <div className="w-94 h-96">
        <div className="flex justify-between">
          <div>
            <h1>{months[today.month()]}, {today.year()}</h1>
          </div>
          <div className="flex item-center gap-5 ">
            <GrFormPrevious className="h-5 w-5 my-1 cursor-pointer" 
              onClick={() => 
              {
                setToday(today.month(today.month()-1));
              }}
            />
            <h1>Today</h1>
            <GrFormNext className="h-5 w-5 my-1 cursor-pointer"
              onClick={() => {
                setToday(today.month(today.month()+1));
              }}
            />
          </div>
        </div>

        <div className=" h-14 grid grid-cols-7 text-center mt-2 py-5">
          {days.map((day, index) => 
          {
            return <h1 key={index}>{day}</h1>
          } 
          )}
        </div>

        <div className="w-full grid grid-cols-7 text-center">
          {generateDate(today.month(), today.year()).map(({date, currentMonth, today}, index) => 
          {
            return (
              <div key={index} className=" h-14 border-t-2 place-content-center py-2">
                <h1 className={
                  cn(
                    currentMonth ? "" : "text-gray-400",
                    today ? " border-red-600 border-2" : "",
                    selectDate
                          .toDate()
                          .toDateString() ===
                          date.toDate().toDateString()
                          ? "border-2 border-black"
                          : "",
                    "h-10 w-10 grid items-center rounded-full mx-auto my-auto hover:bg-black hover:text-white"
                  )
                }
                  onClick={() => {
                    setSelectDate(date);
                  }}
                  >
                    <div className={list.includes(date.format("DD/MM/YYYY")) ? "bg-primary rounded-full text-white": ""}>
                      {date.date()}
                    </div>
                  </h1>
              </div>
            );
          } 
          )}
        </div>
      </div>

    </>
  )
}

export default DashboardCalendar