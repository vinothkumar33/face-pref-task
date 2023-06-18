import React, { useRef, useEffect, useState } from "react";
import ListigPageComponent from "./listpagecomponent";
import axios from "axios";
import { json } from "react-router-dom";


function ListingPageContainer({setview}) {
  const listInnerRef = useRef();
  const [currPage, setCurrPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [userList, setUserList] = useState([]);
  const [lastList, setLastList] = useState(false);
  const[img,setImg]=useState([{}]);
  const[data,setData]=useState([{}]);


  const handleChange=()=>{
    console.log("logout");
    setview(false);
}

//fetching a fake users data
  useEffect(() => {
    const fetchData = async () => {
        const response2=await axios.get('https://dummyjson.com/users');
      
        console.log(response2.data.users);
      
      if (!response2.data.users.length) {
        setLastList(true);
        return;
      }
      setPrevPage(currPage);
      setUserList([...userList, ...response2.data.users]);
      setImg(response2.data.users);
    };
    if (!lastList && prevPage !== currPage) {
      fetchData();
    }
  }, [currPage, lastList, prevPage, userList]);

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setCurrPage(currPage + 1);
      }
    }
  };

  return (
    <>
    <div 
    style={{
      backgroundColor:" #9795EF"
      }}>
          <button style={{
       marginLeft:"1000px"
       }} className="button" onClick={handleChange}>Logout</button>
    </div>
    <ListigPageComponent
      onScroll={onScroll}
      listInnerRef={listInnerRef}
      userList={userList}
      userImg={img}
    />
    
    </>
    
  );
}

export default ListingPageContainer;
