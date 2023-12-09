import React  from "react";
import { Link } from "react-router-dom";
import Banner from "../banner.png";

export const Register = () => {
    return (
        <div className="row">
            <div className="col-md-6 side-banner">
                <img src={ Banner } alt="banner" />
            </div>
            <div className="col-md-5 d-flex">
                <div className="align-self-center">
                    <h1>Register</h1>
                    <div className="">
                        <form action="/register" method="post" className="d-flex row gy-5 mt-3">
                            <div className="form-group py-1 row my-3">
                                <span className="d-flex">
                                    <h4 className="mb-4" htmlFor="telephone">HP</h4><h4 className="mx-2 text-danger">*</h4>
                                </span>
                                <input type="tel" name="telephone" placeholder="HP" data-tip="Masukkan alamat telephone Anda" />
                            </div>
                            <div className="form-group py-1 row my-3">
                                <span className="d-flex">
                                    <h4 className="mb-4" htmlFor="email">Email</h4><h4 className="mx-2 text-danger">*</h4>
                                </span>
                                <input type="email" name="email" placeholder="Email" data-tip="Masukkan alamat email Anda" />
                            </div>
                            <div className="form-group py-1 row my-3">
                                <span className="d-flex">
                                    <h4 className="mb-4" htmlFor="password">Password</h4><h4 className="mx-2 text-danger">*</h4>
                                </span>
                                <input type="password" name="password" placeholder="Password" data-tip="Masukkan kata sandi Anda" />
                            </div>
                          <Link type="submit" className="btn btn-danger p-3 rounded text-center">Register</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
