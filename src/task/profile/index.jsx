/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment,useContext,useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { UserContext } from "../../App";

// eslint-disable-next-line react/prop-types
const ProfilePage = () => {
    const {user} = useContext(UserContext);
    const [userInfo, setUserInfo] = useState(user)
    let id  = user.userData[0]._id;
  useEffect(
    () => {
        fetch(`http://localhost:5000/profile/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log("profile page",data)
            if (data) {
                 setUserInfo(data)
            }
           
        })
        
  ,[]})

    console.log({user})
    return (  
        <Fragment>

            <section className="" style={{textAlign:"center",paddingTop:"20vh"}}>
                this is profile 
                    <div>name:{user.userData[0].name} </div>
                    <div>gender:{user.userData[0].gender} </div>
                    <div>email:{user.userData[0].email} </div>
                    <div>number:{user.userData[0].number } </div>
                    <div>age:{user.userData[0].age} </div>
                    <Link to="/updateProfile">update profile</Link>
            </section>
            
           
        </Fragment>
    );
};

export default ProfilePage;
