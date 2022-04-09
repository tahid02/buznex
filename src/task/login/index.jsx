import reactDownload from "@axetroy/react-download";
import React, { Fragment,useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { UserContext } from "../../App";

// eslint-disable-next-line react/prop-types
const LoginPage = () => {

    const  {setUser} = useContext(UserContext)
    const {handleSubmit, register, errors } = useForm({
        mode: "onBlur",
    });


    const onSubmit = data => {
        console.log(data)
       
        const url = `http://localhost:5000/login`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data  => {
                console.log({data})
                setUser(data)
               
            })
            .catch(err => console.log('update error',err))
    };
    return (
        <Fragment>
            <section style={{display:"flex", justifyContent:"center", paddingTop:"10vh"}}>
            <form
                id="contactForm"
                className="row "
                onSubmit={handleSubmit(onSubmit)}
            >
               
                <div className="col-12 col-sm-6 mb-7">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Your Email*"
                        ref={register({
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "invalid email address",
                            },
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                
               

                <div className="col-12 col-sm-6 mb-7">
                    <input
                        
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Your password*"
                        ref={register({
                            required: "password is required",
                            pattern: {
                                
                                message: "min four character",
                            },
                        })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                 
              <div>
              <Link to={process.env.PUBLIC_URL + "/signup"}>
              signup
                    </Link>
              </div>
                <div className="col-12">
                    <button
                        type="submit"
                        id="contactSubmit"
                        className="btn btn-dark btn-hover-dark"
                        data-complete-text="Well Done!"
                    >
                        login
                    </button>
                </div>
            </form>
            </section>
        </Fragment>
    );
};

export default LoginPage;
