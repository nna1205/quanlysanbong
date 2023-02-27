import {deleteBooking} from '../../slices/BookingSlice'
import { useDispatch } from "react-redux"

const Booking = ({bookingData, fieldData, timestampData}) => {
    const dispatch = useDispatch()

    const handleDeleteBooking = (bookingId) => {
        dispatch(deleteBooking(bookingId));
    }

    const booking = {
        field: fieldData,
        timestamp: timestampData,
        ...bookingData,
    }

    return (
        <div name="container" className="relative flex flex-col justify-center items-center max-w-xl w-full border-2 border-blue-500 rounded-lg px-2 py-4 m-2">
            <div name="bookingTitle" className="text-2xl mr-auto ml-2 mb-4">
                <span className="text-blue-500 font-bold">{fieldData && fieldData.title}</span>
            </div>
            <button className="absolute top-5 right-5 text-md font-bold" onClick="">Xóa</button>
            <div name="bookingData" className="w-full flex flex-col justify-center items-center border-2 border-blue-500 rounded-lg p-2">
                <div name="bookingTime" className="w-full space-x-6 flex justify-between items-center">
                    <div className="border-2 border-blue-500 rounded-lg px-4 py-2 w-32">{booking.bookingForDate}</div>
                    <div className="flex justify-center items-center border-2 border-blue-500 rounded-lg px-4 py-2 w-32">
                        {booking.timestamp.startTime}-{booking.timestamp.endTime}
                    </div>
                </div>
                <div name="bookingInfo" className="grid grid-cols-2 space-x-4 space-y-2 w-full justify-center items-center mt-4">
                    <div className="">
                        <span className="text-blue-500 font-bold">Tên: </span> 
                        {booking.customerName}
                    </div>
                    <div className="">
                        <span className="text-blue-500 font-bold">Liên hệ: </span> 
                        {booking.customerTel}
                    </div>
                    <div className="">
                        <span className="text-blue-500 font-bold">Ghi chú: </span> 
                        {booking.customerNote}
                    </div>
                    <div className="">
                        <span className="text-blue-500 font-bold">Giá sân: </span> 
                        {booking.bookingPrice}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking