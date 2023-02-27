import {useState} from 'react'
import { useDispatch } from "react-redux"
import {addBooking} from '../../slices/BookingSlice'
import useFieldList from '../../hooks/useFieldList'
import useTimestampList from '../../hooks/useTimestampList'
import { v4 as uuid } from "uuid"

const BookingNew = ({fieldId}) => {
    const dispatch = useDispatch();

    const fieldList = useFieldList()
    const timestampList = useTimestampList()

    const [booking, setBooking] = useState({
        fieldId: '',
        customerName: '',
        customerTel: '',
        customerNote: '',
        bookingForDate: '',
        bookingTime: '',
        bookingPrice: '300.000',
        bookedDate: new Date(),
    })

    const handleBookingInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setBooking({
            ...booking,
            [name]: value
        })
    }

    const handleAddBooking = () => {
        const bookingData =  {
            id: uuid(),
            ...booking,
        }
        dispatch(addBooking(bookingData));
        alert(JSON.stringify(bookingData))
    }

    return (
        <form className="border-2 border-blue-500 p-2 rounded-lg max-w-md" onSubmit={handleAddBooking}>
            <div name="fieldTitle" className="text-blue-500 text-2xl font-bold mr-auto ml-2 mb-4 mt-2">
                <select 
                    className="text-blue-500 font-bold w-40 bg-black border-2 border-blue-500 rounded-lg"  
                    name="fieldId" 
                    value={booking.fieldId} 
                    onChange={handleBookingInput}
                >
                    <option className="hidden bg-transparent" value="" disabled selected>Chọn sân</option>
                    {fieldList.map(field => {
                        return (
                            <option className="" key={field.id} value={field.id}>{field.title}</option>
                        )
                    })}
                </select>
            </div>
            <div className="border-2 border-blue-500 p-2 rounded-lg">
                <div name="dateTime" className="flex items-center space-x-4 mb-2">
                    <input
                        name="bookingForDate" 
                        value={booking.bookingForDate} 
                        onChange={handleBookingInput} 
                        type="date" 
                        className="border-2 border-blue-500 p-2 bg-transparent rounded-lg" 
                        required
                    />
                    <select 
                        className="border-2 border-blue-500 p-2 bg-transparent rounded-lg w-28"
                        name="bookingTime" 
                        value={booking.bookingTime}
                        onChange={handleBookingInput}
                    >
                        <option className="hidden bg-transparent" value="" disabled selected>Thời gian</option>
                        {timestampList.map(timestamp => {
                            return (
                                <option className="bg-black" key={timestamp.id} value={timestamp.id}>{timestamp.startTime}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="grid grid-cols-2 justify-center items-center space-y-2 mb-6 p-2">
                    <input 
                        type="text"
                        name="customerName"
                        value={booking.customerName}
                        placeholder="Nhập tên người đặt" 
                        onChange={handleBookingInput} 
                        className="bg-transparent border-b-2 border-blue-500 ml-2"
                        required 
                    />
                    <input 
                        type="tel"
                        name="customerTel"
                        value={booking.customerTel}
                        placeholder="Nhập liên hệ" 
                        onChange={handleBookingInput} 
                        className="bg-transparent border-b-2 border-blue-500 ml-6"
                        required 
                    />
                    <input 
                        type="text"
                        name="customerNote"
                        value={booking.customerNote}
                        placeholder="Thông tin khác" 
                        onChange={handleBookingInput}
                        className="bg-transparent border-b-2 border-blue-500 ml-2"
                    />
                    <div className="ml-6">
                        <span className="">Tổng tiền:</span>
                        <span className="">300.000 VND</span>
                    </div>
                </div>
                <div className="">
                    <button
                        className="flex justify-center items-center font-bold bg-blue-500 border-2 border-blue-500 rounded-lg px-6 py-2 ml-auto"
                        type="submit"
                    >
                        <iconify-icon icon="tabler:plus"></iconify-icon>
                        <span className="ml-2">Xác nhận</span>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default BookingNew