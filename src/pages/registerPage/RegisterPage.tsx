import React, { useEffect, useState } from "react";
import * as Style from "pages/registerPage/style";
import { Image, Input, Form, Row } from "antd";
import { Link } from "react-router-dom";
import imageRegister from "assets/images/register.png";
import { UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import "pages/registerPage/style.css";
import { register } from "services/authentication/authentication.service";
import { IRegisterNewAccountState } from "models/IUserState";
import { ToastContainer, toast } from "react-toastify";

const RegisterPage = (props: any) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [day, setDay] = useState(1);
    const [month, setMonth] = useState(1);
    const [year, setYear] = useState(1999);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");
    const { history } = props;

    const handleSubmit = () => {
        const data: IRegisterNewAccountState = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            dayOfBirth: Number(day),
            monthOfBirth: Number(month),
            yearOfBirth: Number(year),
            phoneNumber: {
                ISD_CodeId: "+84",
                phoneNumber: phoneNumber,
            },
            gender: gender,
            avatar: "https://anhdep123.com/wp-content/uploads/2021/05/hinh-avatar-trang.jpg",
            loginInformation: {
                password: password,
                facebookToken: "",
                googleToken: "",
            },
        };
        register(data)
            .then((response) => {
                if (response) {
                    toast.success("Register successfully");
                    history.push("/");
                }
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    return (
        <div
            className="ant"
            style={{
                flexDirection: "row",
                display: "flex",
                width: "100vw",
                height: "100vh",
            }}
        >
            <ToastContainer />
            <div
                style={{
                    width: "40%",
                    height: "100%",
                    backgroundColor: "#add2c9",
                }}
            >
                <Image
                    style={{ width: "100%", height: "100%" }}
                    src={imageRegister}
                />
            </div>
            <div style={{ width: "60%", height: "20%" }}>
                <div
                    style={{
                        flexDirection: "column",
                        textAlign: "end",
                        margin: 20,
                    }}
                >
                    <p>
                        Already have an account?{" "}
                        <Link
                            style={{ color: "red", fontWeight: "bold" }}
                            to="/"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
                <p
                    style={{
                        marginTop: 80,
                        fontWeight: "bold",
                        fontSize: 35,
                        textAlign: "center",
                    }}
                >
                    Sign up to Taskeeper
                </p>
                <div style={{ textAlign: "center" }}>
                    <div style={{ flexDirection: "row" }}>
                        <input
                            id="firstName"
                            name="firstName"
                            placeholder="First Name"
                            style={{
                                width: 300,
                                height: 52,
                                border: "1px solid #000000",
                                boxSizing: "border-box",
                                borderRadius: 8,
                                marginRight: 20,
                            }}
                            value={firstName}
                            onChange={(e: any) => setFirstName(e.target.value)}
                        />
                        <input
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                            style={{
                                width: 300,
                                height: 52,
                                border: "1px solid #000000",
                                boxSizing: "border-box",
                                borderRadius: 8,
                            }}
                            value={lastName}
                            onChange={(e: any) => setLastName(e.target.value)}
                        />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <input
                            id="email"
                            name="email"
                            placeholder="Email"
                            style={{
                                width: 409,
                                height: 52,
                                border: "1px solid #000000",
                                boxSizing: "border-box",
                                borderRadius: 8,
                            }}
                            value={email}
                            onChange={(e: any) => setEmail(e.target.value)}
                        />
                    </div>
                    <div style={{ marginTop: 20, flexDirection: "row" }}>
                        <select
                            name="day"
                            id="day"
                            value={day}
                            onChange={(e: any) => setDay(e.target.value)}
                            style={{
                                width: 150,
                                height: 52,
                                border: "1px solid #000000",
                                boxSizing: "border-box",
                                borderRadius: 8,
                                marginRight: 20,
                            }}
                        >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </select>
                        <select
                            name="month"
                            id="month"
                            style={{
                                width: 180,
                                height: 52,
                                border: "1px solid #000000",
                                boxSizing: "border-box",
                                borderRadius: 8,
                                marginRight: 20,
                            }}
                            value={month}
                            onChange={(e: any) => setMonth(e.target.value)}
                        >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </select>
                        <select
                            name="year"
                            id="year"
                            style={{
                                width: 250,
                                height: 52,
                                border: "1px solid #000000",
                                boxSizing: "border-box",
                                borderRadius: 8,
                            }}
                            value={year}
                            onChange={(e: any) => setYear(e.target.value)}
                        >
                            <option value={1999}>1999</option>
                            <option value={2000}>2000</option>
                            <option value={2001}>2001</option>
                            <option value={2002}>2002</option>
                        </select>
                    </div>
                    <div style={{ marginTop: 20, flexDirection: "row" }}>
                        <input
                            value={"+84"}
                            disabled
                            style={{
                                width: 80,
                                height: 52,
                                border: "1px solid #000000",
                                boxSizing: "border-box",
                                borderRadius: 8,
                            }}
                        />
                        <input
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={(e: any) =>
                                setPhoneNumber(e.target.value)
                            }
                            style={{
                                width: 329,
                                height: 52,
                                border: "1px solid #000000",
                                boxSizing: "border-box",
                                borderRadius: 8,
                            }}
                        />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <input
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e: any) => setPassword(e.target.value)}
                            style={{
                                width: 409,
                                height: 52,
                                border: "1px solid #000000",
                                boxSizing: "border-box",
                                borderRadius: 8,
                            }}
                        />
                    </div>
                    <div style={{ marginTop: 20, flexDirection: "row" }}>
                        <input
                            id="male"
                            name="gender"
                            type="radio"
                            value={"male"}
                            onChange={(e: any) => setGender(e.target.value)}
                        />
                        <label style={{ marginRight: 30 }}>Male</label>
                        <input
                            id="female"
                            name="gender"
                            value={"female"}
                            type="radio"
                            onChange={(e: any) => setGender(e.target.value)}
                        />
                        <label style={{ marginRight: 30 }}>Female</label>
                        <input
                            id="other"
                            name="gender"
                            type="radio"
                            value={"other"}
                            onChange={(e: any) => setGender(e.target.value)}
                        />
                        <label>Other</label>
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <button
                            style={{
                                background: "#2d7474",
                                borderRadius: 12,
                                width: 243,
                                height: 49,
                                justifyContent: "center",
                                marginBottom: 0,
                            }}
                            onClick={() => handleSubmit()}
                        >
                            <p
                                style={{
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    fontSize: 18,
                                    paddingTop: 5,
                                }}
                            >
                                SIGN UP
                            </p>
                        </button>
                    </div>
                </div>
                <div style={{ width: "100%", height: "65%" }}></div>
            </div>
        </div>
    );
};
export default RegisterPage;
