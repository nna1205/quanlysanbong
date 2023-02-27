import {useState, useEffect} from 'react'

function useBookingList() {
  const [bookingList, setBookingList] = useState([])

  function getInitialBookingList() {
    if (typeof window !== "undefined") {
      const localBookingList = window.localStorage.getItem("bookingList");
      if (localBookingList) {
        return JSON.parse(localBookingList);
      }
      window.localStorage.setItem("bookingList", JSON.stringify([]));
      return [];
    }
      return [];
  }

  useEffect(() => {
    setBookingList(getInitialBookingList)
  },[])

  return bookingList;
}

export default useBookingList;