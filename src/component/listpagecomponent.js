import { React } from "react";

function ListingPageComponent({ onScroll, listInnerRef, userList, userImg }) {
  return (
    <div>
      <div
        onScroll={onScroll}
        ref={listInnerRef}
        style={{ height: "100vh",  overflowY: "auto" }}
      >
        {userList.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundImage:"linear-gradient(to bottom right, rgba(255, 0, 0, 0.6), pink)",
               
                width:"320px",
                height:"480px",
                marginTop: "40px",
                marginLeft: "500px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                boxShadow:"rgb(107, 100, 100) 5px 5px 5px 5px"
              }}
            > 
              <img style={{
                  height: "200px",
                  borderRadius: "50%",
                  backgroundColor:"pink",
                  boxShadow:
                    "0 5px 9px 0 rgba(0, 0, 0, 0.2), 0 7px 21px 0 rgba(0, 0, 0, 0.19)"
                }} src={userImg[index].image} />
                <div style={{
                  width:"250px",
                   marginTop: "5px",
                   display: "flex",
                   justifyContent: "center",
                   alignItems: "center",
                   flexDirection: "column",
                   borderWidth:"2px",
                   borderStyle:"double",
                   borderColor:"white"
                  }}>
                   <p>Name: {item.firstName +" "+ item.lastName}</p>
                   <p>D O B :{item.birthDate}</p>
                   <p>Age: {item.age}</p>
                   <p>Email:{item.email}</p>
                   <p>Phone:{item.phone}</p>
                </div>
             
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListingPageComponent;
