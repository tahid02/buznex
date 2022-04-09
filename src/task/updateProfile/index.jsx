import React, { Fragment,useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const UpdateProfilePage = () => {
    const  {user} = useContext(UserContext)
    const {handleSubmit, register, errors } = useForm({
        mode: "onBlur",
    });


    const onSubmit = (data) => {


       
        console.log('userUpdate Data', data)
        
        fetch(`http://localhost:5000/update/${user.userData[0]._id}`,{
            method:'PATCH',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then( result => {
            console.log(result);
            if (result) {
                console.log('updated successfully')            
            }
        })
    };

    return (
        <Fragment>
            <section style={{display:"flex", justifyContent:"center", padding:"10vh"}}>
            <form
                id="contactForm"
                className="row "
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="col-12 col-sm-6 mb-7">
                    <input
                        type="text"
                        className="form-control"
                        id="gender"
                        name="gender"
                        placeholder="Your gender*"
                        ref={register({ required: "gender is required" })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
           
                
                <div className="col-12 col-sm-6 mb-7">
                    <input
                        type="text"
                        className="form-control"
                        id="age"
                        name="age"
                        placeholder="Your age*"
                        ref={register({
                            required: "age is required",
                            pattern: {
                                message: "invalid age ",
                            },
                        })}
                    />
                    {errors.number && <p>{errors.number.message}</p>}
                </div>

              
                 
                <Link to={process.env.PUBLIC_URL + "/profile"}>
                        go to profile
                    </Link>
                <div className="col-12">
                    <button
                        id="contactSubmit"
                        type="submit"
                        className="btn btn-dark btn-hover-dark"
                        data-complete-text="Well Done!"
                    >
                        update
                    </button>
                </div>
            </form>
            </section>
        </Fragment>
    );
};

export default UpdateProfilePage;
