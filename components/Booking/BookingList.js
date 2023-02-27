import {useState, useEffect} from 'react'
import Booking from './Booking'
import BookingNew from './BookingNew'
import Modal from '../Modal'
import useBookingList from '../../hooks/useBooking'
import useFieldList from '../../hooks/useFieldList'
import useTimestampList from '../../hooks/useTimestampList'

const BookingList = () => {
    const bookingList = useBookingList();
    const fieldList = useFieldList()
    const timestampList = useTimestampList()

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div name="container" className="w-full flex flex-col justify-center items-center">
            {bookingList.length === 0 ?
                (<div className="flex flex-col justify-center items-center mt-20">
                    <div className="text-xl font-bold mb-8">Hiện tại bạn chưa có lịch đặt sân.<br/> Hãy thêm lịch để bắt đầu quản lý</div>
                    <button 
                        className="flex justify-center items-center font-bold bg-blue-500 border-2 border-blue-500 rounded-lg px-6 py-2" 
                        onClick={handleOpenModal}
                        >
                        <iconify-icon icon="tabler:plus"></iconify-icon>
                        <span className="ml-2 font-bold">Thêm lịch</span>
                    </button>
                </div>)
                :
                (<div className="grid grid-cols-3 justify-center items-cente">
                    {bookingList.map(booking => {
                        const field = fieldList.find((f) => f.id === booking.fieldId)
                        const timestamp = timestampList.find((t) => t.id === booking.bookingTime)

                        return (
                            <Booking 
                                key={booking.id} 
                                bookingData={booking}
                                fieldData={field}
                                timestampData={timestamp}
                            />
                        )
                    })}
                    <button 
                        className="w-100 h-60 p-10 flex justify-center items-center border-2 border-blue-500 rounded-lg my-2 ml-2 opacity-50"
                        onClick={handleOpenModal}
                    >
                        <iconify-icon icon="tabler:plus"></iconify-icon>
                        <span className="ml-2 font-bold">Thêm lịch</span>
                    </button>
                </div>)
            }
            {isModalOpen && (
                <Modal onClose={handleCloseModal}>
                    <BookingNew/>
                </Modal>
            )}
        </div>
    )
}

export default BookingList