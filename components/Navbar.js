import Link from 'next/link'
import {useState} from 'react'

const Navbar = () => {
    const [searchInput, setSearchInput] = useState('')

    const handleSearchInput = (e) => {
        setSearchInput({
            searchInput: e.target.value,
        })
    }

    return ( 
        <div name="navigation" className="flex m-2 justify-center items-center border-blue-500 border-2 rounded-lg">
            <div className="w-full mx-6 my-4 flex justify-between items-center">
                <div name="logo" className="text-lg flex justify-center items-center">
                    <iconify-icon icon="fluent:sport-soccer-20-filled"></iconify-icon>
                    <span className="font-bold ml-2">Sanbong.vn</span>
                </div>
                <div name="searchBox" className="flex justify-center items-center border-blue-500 border-2 rounded-lg px-6 py-4">
                    <div className="flex justify-center items-center">
                        <iconify-icon icon="arcticons:simplesearch"></iconify-icon>
                        <input type="text" placeholder="Nhập từ khóa" onChange={handleSearchInput} className="ml-4 bg-transparent outline-transparent"></input>
                    </div>
                </div>
                <div name="navLinks_list" className="text-md flex justify-center items-center space-x-6">
                    <Link href="/" className="flex justify-center items-center">
                        <iconify-icon icon="mdi:soccer-field"></iconify-icon>
                        <span className="font-bold text-md ml-2">Sân bóng</span>
                    </Link>
                    <Link href="/" className="flex justify-center items-center">
                        <iconify-icon icon="ic:outline-account-box"></iconify-icon>
                        <span className="font-bold text-md ml-2">Thông tin</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar