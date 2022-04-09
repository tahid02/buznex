import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignupPage = () => {
    const {handleSubmit, register, errors } = useForm({
        mode: "onBlur",
    });

    const onSubmit = data => {
        console.log(data)
       
        const url = `http://localhost:5000/signup`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => console.log('server side response', res))
            .catch(err => console.log('update error',err))
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
                        id="name"
                        name="name"
                        placeholder="Your Name*"
                        ref={register({ required: "Name is required" })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
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
                        type="text"
                        className="form-control"
                        id="number"
                        name="number"
                        placeholder="Your number*"
                        ref={register({
                            required: "number is required",
                            pattern: {
                                message: "invalid number ",
                            },
                        })}
                    />
                    {errors.number && <p>{errors.number.message}</p>}
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
                 
                <Link to={process.env.PUBLIC_URL + "/login"}>
              login
                    </Link>
                <div className="col-12">
                    <button
                        id="contactSubmit"
                        type="submit"
                        className="btn btn-dark btn-hover-dark"
                        data-complete-text="Well Done!"
                    >
                        signup 
                    </button>
                </div>
            </form>
            </section>
        </Fragment>
    );
};

export default SignupPage;
