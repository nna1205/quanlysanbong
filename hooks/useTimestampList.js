import {useState, useEffect} from 'react'

function useTimestampList() {
    const [timestampList, setTimestampList] = useState([]);
    
    function getInitialTimestampList() {
        if (typeof window !== "undefined") {
          const localTimestampList = window.localStorage.getItem("timestampList");
          if (localTimestampList) {
            return JSON.parse(localTimestampList);
          }
          window.localStorage.setItem("timestampList", JSON.stringify([]));
          return [];
        }
        return [];
    }

    useEffect(()=> {
        setTimestampList(getInitialTimestampList)
    },[])

    return timestampList
}

export default useTimestampList