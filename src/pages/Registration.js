import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Registration = () => {
  const navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [cpassword, setCpassword] = useState("");
  const handleRegistration = (e) => {
    e.preventDefault();
    // console.log(name, email, password, cpassword);
    if (name == "") {
      toast.error("Name is required!");
    } else if (email == "") {
      toast.error("Email is required !!");
    } else if (password == "") {
      toast.error("Password is required !!!");
    } else if (cpassword == "") {
      toast.error("Plase confirm your password !!!!");
    } else if (password != cpassword) {
      toast.error("Password not matched_try again!");
    } else {
      navigate("/");
    }
  };
  return (
    <div className="max_width">
      <div>
        <form className="bg-gray-900 text-white w-1/3 mt-10 py-12 mx-auto">
          <h1 className="mb-5 font-mono text-2xl underline text-center">
            Registration Form
          </h1>
          <div className="w-3/4 mb-2 mx-auto">
            <h5 className="text-lg font-bold mb-1">Name :</h5>
            <input
              onChange={(e) => setName(e.target.value)}
              className="input_field"
              type="text"
              placeholder="Please enter your Full name"
            />
          </div>
          <div className="w-3/4 mb-2 mx-auto">
            <h5 className="text-lg font-bold mb-1">Email :</h5>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="input_field"
              type="email"
              placeholder="Please enter your email"
            />
          </div>
          <div className="w-3/4 mb-2 mx-auto">
            <h5 className="text-lg font-bold mb-1">Password :</h5>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="input_field"
              type="password"
              placeholder="Give a Password"
            />
          </div>
          <div className="w-3/4 mb-2 mx-auto">
            <h5 className="text-lg font-bold mb-1">Confirm Password :</h5>
            <input
              onChange={(e) => setCpassword(e.target.value)}
              className="input_field"
              type="password"
              placeholder="Confirm your password"
            />
          </div>
          <p onClick={handleRegistration} className="submit_button">
            Submit
          </p>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Registration;
