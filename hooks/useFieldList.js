import {useState, useEffect} from 'react'

function useFieldList() {
    const [fieldList, setFieldList] = useState([]);
    
    function getInitialFieldList() {
        if (typeof window !== "undefined") {
          const localFieldList = window.localStorage.getItem("fieldList");
          if (localFieldList) {
            return JSON.parse(localFieldList);
          }
          window.localStorage.setItem("fieldList", JSON.stringify([]));
          return [];
        }
        return [];
    }

    useEffect(()=> {
        setFieldList(getInitialFieldList)
    },[])

    return fieldList
}

export default useFieldList