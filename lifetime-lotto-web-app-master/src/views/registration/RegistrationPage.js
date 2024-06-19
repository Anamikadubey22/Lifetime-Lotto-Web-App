import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getCountries } from "../../utils";
import { useAuth } from "../../utils/auth";
import { FormSchema } from "../schema/FormSchema";

export default function RegistrationPage({props}) {
    const auth = useAuth();

    const [countries, setCountriesList] = useState([]);
    const { firstName, lastName, country, phone, username, email, password } = FormSchema;

    useEffect(() => {
        const fetchCountries = async () => {
            const res = await getCountries();
            if (res) {
                setCountriesList(res);
            }
        };
        fetchCountries();
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        mode: "onChange",
        defaultValues: {
            [firstName.key]: "",
            [lastName.key]: "",
            [country.key]: "",
            [phone.key]: "",
            [username.key]: "",
            [email.key]: "",
            [password.key]: "",
            confirmPassword: "",
        },
    });

    const onSubmit = async (data) => {
        const body = {
            fname: data.firstName,
            lname: data.lastName,
            country: data.country,
            mobileNo: `${data.phone}`,
            userName: data.username,
            email: data.email,
            password: data.password,
        };
        await auth.register(body);
    };
    return (
    <>
        <title>Registration - Lifetime Lotto</title>

        <section className="sec-login">
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
                    <div className="col-lg-11">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 d-none d-lg-block pe-0 lgn-img" style={{backgroundImage: "url(assets/images/login-left-bg_withname.png)"}}>
                                </div>
                                <div className="col-lg-8 col-md-8 bg-white">
                                    <div className="px-5 pb-4 pt-3">
                                        <h4 className="mb-4">Register</h4>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 mb-2">
                                                <label>First Name</label>
                                                <input className="form-control" name={firstName.key} placeholder={firstName.placeholderText} {...register(firstName.key, firstName.options)} id={firstName.key} />
                                                <div className="error-msg" aria-live="polite" role="alert">
                                                    {errors.firstName && <>{errors.firstName.message}</>}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 mb-2">
                                                <label>Last Name</label>
                                                <input className="form-control" name={lastName.key} placeholder={lastName.placeholderText} {...register(lastName.key, firstName.options)} id={lastName.key} />
                                                <div className="error-msg" aria-live="polite" role="alert">
                                                    {errors.lastName && <>{errors.lastName.message}</>}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 mb-2">
                                                <label>Country</label>
                                                <select type="country" className="form-control" name={country.key} id={country.key} placeholder={country.placeholderText} {...register(country.key, country.options)}>
                                                    <option selected disabled>
                                                        Select Country
                                                    </option>
                                                    {countries.map((country) => {
                                                        return <option>{country.name}</option>;
                                                    })}
                                                </select>
                                                <div className="error-msg" aria-live="polite" role="alert">
                                                    {errors.country && <>{errors.country.message}</>}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 mb-2">
                                                <label>Mobile No.</label>
                                                <input className="form-control" name={phone.key} placeholder={phone.placeholderText} {...register(phone.key, phone.options)} id={phone.key} />
                                                <div className="error-msg" aria-live="polite" role="alert">
                                                    {errors.phone && <>{errors.phone.message}</>}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 mb-2">
                                                <label>Username</label>
                                                <input className="form-control" name={username.key} placeholder={username.placeholderText} {...register(username.key, username.options)} id={username.key} />
                                                <div className="error-msg" aria-live="polite" role="alert">
                                                    {errors.username && <>{errors.username.message}</>}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 mb-2">
                                                <label>E-mail ID</label>
                                                <input className="form-control" name={email.key} placeholder={email.placeholderText} {...register(email.key, email.options)} id={email.key} />
                                                <div className="error-msg" aria-live="polite" role="alert">
                                                    {errors.email && <>{errors.email.message}</>}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 mb-2">
                                                <label>Password</label>
                                                <input className="form-control" name={password.key} placeholder={password.placeholderText} {...register(password.key, password.options)} id={password.key} />
                                                <div className="error-msg" aria-live="polite" role="alert">
                                                    {errors.password && <>{errors.password.message}</>}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 mb-2">
                                                <label>Confirm Password</label>
                                                <input className="form-control" name="confirmPassword" placeholder="confirm password" {...register(password.key, password.options)} id={password.key} />
                                                <div className="error-msg" aria-live="polite" role="alert">
                                                    {errors.password && <>{errors.password.message}</>}
                                                </div>
                                            </div>
                                            <div className="col-lg-12 mb-2 mt-3">
                                                {/* <div className="input-group mb-2">
                                                    <span className="input-group-text">
                                                        <img src="assets/images/entercode.png" className="img-fluid" alt="" />
                                                    </span>
                                                    <input type="text" className="form-control border-start-0" placeholder="Enter Code" />
                                                </div> */}
                                                <p className="p-0 m-0 pull-left">I agree with <Link to={"/privacy-policy"}>Privacy Policy</Link>, <Link to={"/terms-and-conditions"}>Terms & Conditions</Link></p>
                                                <p className="p-0 m-0 pull-right">Already have an account? <Link to={"/login"}>Login Here</Link>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row mt-3 d-flex justify-content-center align-items-center">
                                            <div className="col-lg-6">
                                                <button disabled={!isValid} type="submit" variant="login-signup-btn" className="btn btn-info w-100">Register Now</button>
                                            </div>
                                        </div>
                                        <div className="row mt-3 d-flex justify-content-center align-items-center">
                                            <div className="col-lg-6 text-center">
                                                <Link to={"/"}><i className="fa fa-arrow-left"></i> Back to Home</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
}