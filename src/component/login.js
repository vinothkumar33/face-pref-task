import { useFormik } from "formik";
import { useState } from "react";



function Login({setview}) {
    const[logedIn,setLogedIn]=useState();

    //get a user username and password
    const formik=useFormik({
        initialValues: {
          username: "",
          password:""
        },
        onSubmit:(values)=>{
            setLogedIn("logging in")
            setview(true);
             
        },
        validate: (values) => {
          let errors = {};
          if (!values.username) {
            errors.username = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
            errors.username = 'Invalid User Name';
          }
          if(!values.password) errors.password="Required"
          return errors;
        }
      })
    return(
        <>
           <div className="loginscreen">
                 <div className="sub-container">
                   <div className="head">
                     <h1 >LOGIN</h1>
                   </div>
                   <form onSubmit={formik.handleSubmit}>
                      <label><h2>User Name</h2></label>
                      <br />
                      <input type="text" className="inputbox" id="username" placeholder="Username as email"
                       value={formik.values.username} onChange={formik.handleChange} required />
                       <div>{formik.errors.username}</div>
                      <label><h2>Password</h2></label>
                      <input type="password" className="inputbox" id="password" placeholder="Enter password" 
                      value={formik.values.password}  onChange={formik.handleChange} required />
                      <div>{formik.errors.password}</div>
                      <br />
                      <br />
                      <button type="submit" class="button">LOGIN</button>
                    </form>
                 </div>
           </div>
          
        </>
    )
}

export default Login;