import React, { useState }  from "react";
import { Link } from "react-router-dom";
import Banner from "../banner.png";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Store/UserSlice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    // states
    const [email, setEmail]       = useState('');
    const [password, setPassword] = useState('');
    // redux state
    const {loading, error} = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginEvent = (e) => {
        e.preventDefault();
        let userCredentials = {
            email, password
        }
        dispatch(loginUser(userCredentials)).then((result) => {
            if (result.payload) {
                setEmail('');
                setPassword('');
                navigate('/dashboard');
            }
        })
    }
    
    return (
        <div className="row">
            <div className="col-md-6 side-banner">
                <img src={ Banner } alt="banner" />
            </div>
            <div className="col-md-5 d-flex">
                <div className="align-self-center">
                    <h1>Get Started</h1>
                    <div className="">
                        <form onSubmit={handleLoginEvent} method="post" className="d-flex row gy-5 mt-3">
                            <div className="form-group py-1 row my-3">
                                <span className="d-flex">
                                    <h4 className="mb-4" htmlFor="email">Email</h4><h4 className="mx-2 text-danger">*</h4>
                                </span>
                                <input type="email" name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} data-tip="Masukkan alamat email Anda" />
                            </div>
                            <div className="form-group py-1 row my-3">
                                <span className="d-flex">
                                    <h4 className="mb-4" htmlFor="password">Password</h4><h4 className="mx-2 text-danger">*</h4>
                                </span>
                                <input type="password" name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} data-tip="Masukkan kata sandi Anda" />
                            </div>
                          <button type="submit" className="btn btn-danger p-3 rounded text-center">
                                { loading ? 'Loading...' : 'Login' }
                          </button>
                          {error && (
                            <div className="alert alert-danger" role='alert'> {error} </div>
                          )}
                          <Link to="/register" className="btn btn-link x text-uppercase text-danger text-bold text-center"> Register Now </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
