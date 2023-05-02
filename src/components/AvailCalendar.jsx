import {React, useState} from "react"; 
import { generateDate, months } from "../util/calendar";
import cn from "../util/cn";
import dayjs from "dayjs";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const AvailCalendar = () => {
  
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
    
      const [list, setList] = useState({
        "24/05/2023": ['rahularyan@gmail.com', 'aniruddha@gmail.com',],
        "26/05/2023": ['rahularyan@gmail.com', 'aniruddha@gmail.com', 'saikanthg@gmail.com', 'nishantsahoo@gmail.com',],
        "20/05/2023": ['saikanthg@gmail.com', 'nishantsahoo@gmail.com',],
        "5/05/2023" : ['nishantsahoo@gmail.com',],
        "7/05/2023" : ['saikanthg@gmail.com', ],
        "10/05/2023": ['aniruddha@gmail.com', 'saikanthg@gmail.com', 'nishantsahoo@gmail.com',],
        "11/05/2023": ['rahularyan@gmail.com', ],
        "14/05/2023": ['rahularyan@gmail.com', 'saikanthg@gmail.com', 'nishantsahoo@gmail.com',],
        "17/05/2023": ['rahularyan@gmail.com', 'saikanthg@gmail.com', ],
        "29/05/2023": ['aniruddha@gmail.com',],       
        
})
    
      console.log(list[selectDate.format("DD/MM/YYYY")]);
  
    return (
    <>
        <div className="flex justify-center border-b-2">
            <input 
            type="text" 
            className="w-3/4 rounded-full border-2 bg-gray-200 px-5 mx-10 py-2 my-2" 
            placeholder="Search user by email"
            />
        </div>
        
        <div className="pt-5 flex just ify-between">
            <h1>
                Users who are unavailable at  <span className='text-secondary' style={{fontWeight: 'bold'}}>{selectDate.toDate().toDateString()} {}</span>
            </h1>
    
        </div>

        <div className="pb-5 flex justify-between border-b-2">
            {
                Object.keys(list).includes(selectDate.format("DD/MM/YYYY")) ? (
                    <h1 className="pl-5">
                        {list[selectDate.format("DD/MM/YYYY")].map((l)=><div>{l},</div>)}
                    </h1>    
                ):(
                    <h1>
                        None
                    </h1>
                )
            }
        </div>
      
        <div className="w-94 h-96 pt-2">
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
                            <div className={Object.keys(list).includes(date.format("DD/MM/YYYY")) ? "bg-primary rounded-full text-white": ""}>
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

export default AvailCalendar