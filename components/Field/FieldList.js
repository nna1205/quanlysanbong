import {useState, useEffect} from 'react'
import Field from './Field'
import FieldNew from './FieldNew'
import useFieldList from '../../hooks/useFieldList'
import Modal from '../Modal'

const FieldList = () => {
    const fieldList = useFieldList();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div name="container" className="w-full flex flex-col justify-center items-center">
            {fieldList.length === 0 ?
                (<>
                    <div className="text-xl font-bold mb-8">Hiện tại bạn chưa có sân bóng nào.<br/> Hãy thêm sân để bắt đầu quản lý</div>
                    <button 
                        className="flex justify-center items-center font-bold bg-blue-500 border-2 border-blue-500 rounded-lg px-6 py-2" 
                        onClick={handleOpenModal}
                        >
                        <iconify-icon icon="tabler:plus"></iconify-icon>
                        <span className="ml-2 font-bold">Thêm sân</span>
                    </button>
                </>)
                :
                (<div className="grid grid-cols-3 justify-center items-cente">
                    {fieldList.map(field => {
                        return (
                            <Field 
                                key={field.id} 
                                fieldData={field}
                            />
                        )
                    })}
                    <button 
                        className="w-84 p-10 flex justify-center items-center border-2 border-blue-500 rounded-lg my-2 ml-4 opacity-50"
                        onClick={handleOpenModal}
                    >
                        <iconify-icon icon="tabler:plus"></iconify-icon>
                        <span className="ml-2 font-bold">Thêm sân</span>
                    </button>
                </div>)
            }
            {isModalOpen && (
                <Modal onClose={handleCloseModal}>
                    <FieldNew/>
                </Modal>
            )}
        </div> 
    )
}

export default FieldList