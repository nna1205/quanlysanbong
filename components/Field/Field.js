import {createContext} from 'react'
import TimestampList from '../Timestamp/TimestampList'
import useBookingList from '../../hooks/useBooking'
import {deleteField} from '../../slices/FieldInfoSlice'
import { useDispatch } from "react-redux"

export const BookingContext = createContext(null);

const Field = ({fieldData}) => {
    const dispatch = useDispatch()

    const bookingList = useBookingList()
    const bookingData = bookingList.filter(booking => booking.fieldId === fieldData.id)
    const timestampList = bookingData.map(booking => booking.bookingTime)
    console.log(fieldData.id)
    const handleDeleteField = (fieldId) => {
        dispatch(deleteField(fieldId))
    }

    return (
        <BookingContext.Provider value={timestampList}>
            <div name="container" className="relative flex flex-col justify-center items-center max-w-md border-2 border-blue-500 rounded-lg p-2 ml-4 my-2">
                <div name="fieldTitle" className="text-blue-500 text-2xl font-bold mr-auto ml-2 mb-4">
                    <span className="text-blue-500 font-bold">{fieldData.title}</span>
                </div>
                <button className="absolute top-5 right-5 text-md font-bold z-40" onClick="">Xóa</button>
                <div name="fieldInfo" className="w-full flex flex-col justify-center items-center border-2 border-blue-500 rounded-lg p-2">
                    <TimestampList bookedTimestamp={timestampList}/>
                    <div className="flex justify-center items-center space-x-6 my-2">
                        <div name="Đã đặt" className="flex justify-center items-center">
                            <div className="border-2 border-blue-500 bg-blue-500 rounded-sm w-5 h-5"></div>
                            <span className="text-sm font-md ml-2">Đã đặt</span>
                        </div>
                        <div name="Chưa đặt" className="flex justify-center items-center">
                            <div className="border-2 border-blue-500 rounded-sm w-5 h-5"></div>
                            <span className="text-sm font-md ml-2">Chưa đặt</span>
                        </div>
                    </div>
                </div>
            </div>
        </BookingContext.Provider>
    )
}

export default Field