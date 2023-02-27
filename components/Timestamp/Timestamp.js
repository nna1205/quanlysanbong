import {useContext, useEffect} from 'react'
import {BookingContext} from'../Field/Field'
import {deleteTimestamp} from '../../slices/TimestampSlice'
import { useDispatch } from "react-redux"

const Timestamp = ({id, startTime, endTime}) => {
    const dispatch = useDispatch()
    const timestampList = useContext(BookingContext)
    const booked = timestampList && timestampList.includes(id)

    const formatTime = (time) => {
        const result = time.toLocaleString([], {
            hour12: false,
        })
        return result
    }

    // const handleDeleteTimestamp = (timestampId) => {
    //     dispatch(deleteTimestamp(timestampId))
    // }

    return (
        <div 
            name="container" 
            className={
                `${booked? 'bg-blue-500' : null} 
                relative flex justify-center items-center border-2 border-blue-500 rounded-lg px-4 py-2 ml-2 shadow-md`
            }
        >
            {/* <button className="absolute top-2 right-2 text-md font-bold z-40" onClick="">Xóa</button> */}
            <button className="w-full h-full flex justify-center items-center">
                <div name="content" className="flex justify-center items-center">
                    <span className="text-md font-bold">{formatTime(startTime)}-{formatTime(endTime)}</span>
                </div>
            </button>
        </div>
    )
}

export default Timestamp