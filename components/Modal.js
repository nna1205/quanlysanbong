import {useState} from 'react'

const Modal = (props) => {
    return (
        <>
            <div className="absolute shadow-lg max-w-md mx-auto flex justify-center items-center p-2 rounded-md">
                <div className="bg-black z-50">{props.children}</div>
                <div className="absolute -top-6 -right-2 z-50 flex justify-center items-center cursor-pointer">
                    <button onClick={props.onClose} className="text-blue-500 text-lg rounded-full">
                        <iconify-icon icon="ic:round-close"></iconify-icon>
                    </button>
                </div>
            </div>
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black backdrop-opacity-50 opacity-90"></div>
        </>
    )
}

export default Modal