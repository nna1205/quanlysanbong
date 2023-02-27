import {useState} from 'react'
import useTimestampList from '../../hooks/useTimestampList'
import { useDispatch } from "react-redux";
import {addTimestamp} from '../../slices/TimestampSlice'
import { v4 as uuid } from "uuid";

const TimestampNew = () => {
    const dispatch = useDispatch();
    const timestampList = useTimestampList();
    // const minStartTime = (timestampList && (
    //     timestampList[timestampList.length - 1].endTime 
    // ))
    const minStartTime = timestampList[timestampList.length - 1] || '6:00';

    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const handleTimestampInput = (e) => {
        //Set start time
        const newStartTime = e.target.value;
        setStartTime(newStartTime);

        // Calculate end time
        const startDateTime = new Date(`01/01/2000 ${newStartTime}`);
        const endDateTime = new Date(startDateTime.getTime() + 90 * 60000);
        const endTime = endDateTime.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
        });
        setEndTime(endTime.toString().slice(0, 5));
    }

    const handleAddTimestamp = () => {
        const timestampData = {
            id: uuid(),
            startTime: startTime,
            endTime: endTime,
        }
        // Reset timestamp
        setStartTime('');
        setEndTime('')

        dispatch(addTimestamp(timestampData));
        alert(JSON.stringify(timestampData))
    }
    
    return (
        <div className="flex justify-center items-center border-2 border-blue-500 rounded-lg max-w-md mt-10">
            <input 
                type="time" 
                value={startTime} 
                onChange={handleTimestampInput} 
                min={minStartTime} 
                max="21:00" 
                className="bg-transparent pl-4 pr-2" 
                required
            />
            <iconify-icon icon="material-symbols:arrow-forward-rounded"></iconify-icon>
            <span className="ml-2 pr-6">{endTime}</span>
            <button 
                className="flex justify-center items-center font-bold bg-blue-500 border-2 border-blue-500 rounded-lg px-6 py-2" 
                onClick={handleAddTimestamp}
            >
                <iconify-icon icon="tabler:plus"></iconify-icon>
                <span className="ml-2 font-bold">Thêm giờ</span>
            </button>
        </div>
    )
}

export default TimestampNew