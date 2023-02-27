import TimestampList from '../Timestamp/TimestampList'
import {useState} from 'react'
import useFormIsFilledOut from '../../hooks/useFormFill'
import { useDispatch } from "react-redux";
import {addField} from '../../slices/FieldInfoSlice';
import { v4 as uuid } from "uuid";

const FieldNew = () => {
    const dispatch = useDispatch();
    
    const [info, setInfo] = useState({
        title: '',
    })

    const handleTitle = (event) => {
        setInfo({
            ...info,
            title: event.target.value,
        })
    }

    const isValid = useFormIsFilledOut(info)

    const handleAddField = (e) => {
        const fieldData = {
            id: uuid(),
            title: info.title
        }
        e.preventDefault();
        {isValid ? 
            dispatch(
                addField(fieldData)
            ) 
            : null;
        }
        setInfo({...info, title: ''})
        alert(JSON.stringify(fieldData))
    }

    return (
        <form 
            name="field" 
            onSubmit={handleAddField}
            className="flex flex-col justify-center items-center max-w-md border-2 border-blue-500 rounded-lg p-2"
        > 
            <div name="fieldTitle" className="text-2xl mr-auto ml-2 mb-4 mt-2">
                <input
                    name="title" 
                    type="text"
                    value={info.title} 
                    placeholder="Nhập tên sân bóng" 
                    className="text-blue-500 font-bold bg-transparent" 
                    onChange={handleTitle} 
                    required
                />
            </div>
            <div name="fieldInfo" className="w-full flex flex-col justify-center items-center border-2 border-blue-500 rounded-lg p-2">
                <div className="w-full mb-2 px-2">
                    <TimestampList />
                </div>
                <div className="w-full p-2">
                    <button 
                        className="flex justify-center items-center font-bold bg-blue-500 border-2 border-blue-500 rounded-lg px-6 py-2 ml-auto" 
                        type="submit"
                        disabled={!isValid}
                    >
                        <iconify-icon icon="tabler:plus"></iconify-icon>
                        <span className="ml-2">Thêm sân</span>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default FieldNew