import { React } from "react";

function ListingPageComponent({ onScroll, listInnerRef, userList, userImg }) {
  return (
    <div className="list-container">
      <div
        onScroll={onScroll}
        ref={listInnerRef}
        className="scrolling"
        style={{ height: "100vh",  overflowY: "auto", display:"flex",flexWrap:"wrap",backgroundImage:" linear-gradient(to bottom right, #9795EF, #F9C5D1)"
      }}
      >
        {userList.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundColor:"white",
                width:"320px",
                height:"400px",
                marginTop: "40px",
                marginLeft: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                boxShadow:"rgb(107, 100, 100) 5px 5px 5px 5px"
              }}
            > 
              <img style={{
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor:"lavender",
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
