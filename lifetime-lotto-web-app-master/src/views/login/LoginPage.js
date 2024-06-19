import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../utils/auth";
import { FormSchema } from "../schema/FormSchema";
// import CaptchaInput from "../schema/Captcha";

const LoginPage = ({props}) => {
    const auth = useAuth();
    const { id, password } = FormSchema;

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        mode: "onChange",
        defaultValues: {
            id: "",
            password: "",
        },
    })
    
    const onFormSubmit = async (data, e) => {
        e.preventDefault();
        const body = {
            username: data.id,
            password: data.password,
        };
        await auth.login(body);
    }

    return (
    <>
        <title>Login - Lifetime Lotto</title>

        <section className="sec-login">
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
                    <div className="col-lg-10">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 d-none d-lg-block d-flex justify-content-center align-items-center pe-0">
                                <img src="assets/images/login-left-bg_withname.png" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-8 col-md-8 bg-white">
                                <div className="px-5 pb-4 pt-3">
                                    <h4 className="mb-4">Welcome To&nbsp;<i><span style={{color: "#EE015F"}}>LIFETIME</span> <span style={{color: "#4E5FED"}}> LOTTO</span></i></h4>
                                    <form onSubmit={handleSubmit(onFormSubmit)}>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 mb-2">
                                                <label>Username or Email Id</label>
                                                <input className="form-control" placeholder="Username or Email Id" {...register(id.key, id.options)} id={id.key} />
                                                <div className="error-msg" aria-live="polite" role="alert">
                                                    {errors.id && <>{errors.id.message}</>}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 mb-2">
                                                <label>Password</label>
                                                <input type="password" className="form-control" placeholder="Password" {...register(password.key, password.options)} id={password.key} />
                                                <div className="error-msg" aria-live="polite" role="alert">
                                                    {errors.password && <>{errors.password.message}</>}
                                                </div>
                                                <p className="p-0 m-0 pull-right"><Link to={"/forgot-password"}>Forgot Password?</Link></p>
                                            </div>
                                            {/* <CaptchaInput /> */}
                                            {/* <div className="col-lg-12 mb-2 mt-3">
                                                <div className="input-group mb-2">
                                                    <span className="input-group-text">
                                                        <img src="assets/images/entercode.png" className="img-fluid" alt="" />
                                                    </span>
                                                    <input type="text" className="form-control border-start-0" placeholder="Enter Code" />
                                                </div>
                                                <p className="p-0 m-0 pull-right">New to lottery? <Link to={"/registration"}>Register Here</Link>
                                                </p>
                                            </div> */}
                                        </div>
                                        <div className="row mt-3 d-flex justify-content-center align-items-center">
                                            <div className="col-lg-6">
                                                <button type="submit" className="btn btn-info w-100" variant="login-signup-btn" disabled={!isValid}>Login Now</button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="row mt-3 d-flex justify-content-center align-items-center">
                                        <div className="col-lg-6 text-center">
                                            <Link to={"/"}><i className="fa fa-arrow-left"></i> Back to Home</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
}

export default LoginPage;