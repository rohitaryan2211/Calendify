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
  console.log(currentDate);
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  return (
    <>
      {/* <div>DashboardCalendar</div> */}

      <div className="py-5 pb-5">
        <h1 className="pb-2 border-b-2">
          Availability for {selectDate.toDate().toDateString()} {}
        </h1>
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
                <h1 className={cn(
                  currentMonth ? "" : "text-gray-400",
                  today ? " border-red-600 border-2" : "",
                  selectDate
												.toDate()
												.toDateString() ===
												date.toDate().toDateString()
												? "border-2 border-black"
												: "",
                  "h-10 w-10 grid items-center rounded-full mx-auto my-auto hover:bg-black hover:text-white"
                  )}
                  onClick={() => {
                    setSelectDate(date);
                  }}
                  >{date.date()}</h1>
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