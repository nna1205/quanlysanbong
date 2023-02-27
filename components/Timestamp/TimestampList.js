import {useState, useEffect} from 'react'
import Timestamp from './Timestamp'
import useTimestampList from '../../hooks/useTimestampList'  

const TimestampList = () => {
    const timestampList = useTimestampList();

    const timestampListLength = timestampList.length
    // const lastEndTime = timestampListLength > 0 ? timestampList[timestampListLength - 1].endTime : null;

    return (
        <div name="container" className="w-full">
            <div name="label" className="mr-auto mb-2">
                <span className="text-lg font-bold">Khung giờ sân</span>
            </div>
            <div className="py-2 w-full ">
                {timestampListLength > 0 ? 
                    (<div className="grid grid-cols-3 justify-center items-center">
                        {timestampList.map(timestamp => {
                            return (
                                <Timestamp
                                    key={timestamp.id}
                                    id={timestamp.id} 
                                    startTime={timestamp.startTime} 
                                    endTime={timestamp.endTime} 
                                />  
                            )
                        })}
                    </div>) 
                    : (<div className="text-sm text-gray-400">Hãy thêm khung giờ sân để tạo lịch đặt sân</div>)
                }
            </div>
        </div>
    )
}

export default TimestampList