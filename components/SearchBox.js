import {useState} from 'react'
import useBookingList from '../hooks/useBooking'
import useFieldList from '../hooks/useFieldList'
import useTimestampList from '../hooks/useTimestampList'

const SearchBox = () => {
    const [input, setInput] = useState('');
    const [inputType, setInputType] = useState('')

    const handleInput = (e) => {
        setInput({
            input: e.target.value,
        })
    }

    const handleInputType = (e) => {
        setInputType({
            inputType: e.target.value
        })
    }

    return (
        <div className="container">
            <form className="content">
                <input type="text" className="" value={input} onChange={handleInput}/>
                <div className="">
                    <input type="radio" className="" name="booking" value="" onChange={handleInputType}>Tên người đặt</input>
                    <input type="radio" className="" name="booking" value="" onChange={handleInputType}>Liên hệ</input>
                    <input type="radio" className="" name="booking" value="" onChange={handleInputType}>Ngày đặt</input>
                    <input type="radio" className="" name="booking" value="" onChange={handleInputType}>Giờ trống</input>
                </div>
                <button 
                    className="flex justify-center items-center font-bold bg-blue-500 border-2 border-blue-500 rounded-lg px-6 py-2"
                    type="submit" 
                    onClick=""
                    >
                    <iconify-icon icon="arcticons:simplesearch"></iconify-icon>
                    <span className="ml-2 font-bold">Thêm sân</span>
                </button>
            </form>
        </div>
    )
}

export default SearchBox