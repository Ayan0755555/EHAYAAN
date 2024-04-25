import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginIcons from "../assest/signin.gif";
import { Link } from "react-router-dom";
import Image from "../helpers/Image";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirm: "",
    profilePic: "",
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleUploadPic = async (e) => {
    const file = e.target.files[0];

    const ImagePic = await Image(file);

    setData((preve) => {
      return {
        ...preve,
        profilePic: ImagePic,
      };
    });
  };
  console.log("data is coming", data);

  return (
    <section id="signup">
      <div className="max-auto container p-4">
        <div className="bg-white shadow-md p-2 py-4 w-full max-w-md mx-auto">
          <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
            <div>
              <img src={data.profilePic || loginIcons} alt="login icons" />
            </div>
            <form>
              <label>
                <div className="text-xs bg-opacity-85 cursor-pointer bg-slate-200 py-3 text-center absolute bottom-0 w-full">
                  Upload Photo
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleUploadPic}
                />
              </label>
            </form>
          </div>

          <form className="p-6" onSubmit={handleSubmit}>
            <div className="grid">
              <label htmlFor="email">Name :</label>
              <div className="bg-slate-200 p-2">
                <input
                  type="text"
                  placeholder="Enter Email"
                  required
                  name="name"
                  value={data.name}
                  onChange={handleOnchange}
                  className="w-full h-full  outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="grid mt-6">
              <label htmlFor="email">Email :</label>
              <div className="bg-slate-200 p-2">
                <input
                  type="email"
                  placeholder="Enter Email"
                  required
                  name="email"
                  value={data.email}
                  onChange={handleOnchange}
                  className="w-full h-full  outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="password">Password :</label>
              <div
                className="bg-slate-200 p-2 flex "
                onClick={() => setShow((preve) => !preve)}
              >
                <input
                  type={show ? "text" : "password"}
                  placeholder="Enter Password"
                  required
                  name="password"
                  value={data.password}
                  onChange={handleOnchange}
                  className="w-full h-full  outline-none bg-transparent"
                />
                <div className="cursor-pointer">
                  <span>{show ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="password">Confirm Password :</label>
              <div
                className="bg-slate-200 p-2 flex "
                onClick={() => setConfirm((preve) => !preve)}
              >
                <input
                  type={confirm ? "text" : "password"}
                  placeholder="Enter Confirm Password"
                  required
                  name="confirm"
                  value={data.confirm}
                  onChange={handleOnchange}
                  className="w-full h-full  outline-none bg-transparent"
                />
                <div className="cursor-pointer">
                  <span>{confirm ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-r-full hover:bg-yellow-600 mt-6 mx-auto block">
              Register
            </button>
          </form>
          <p className="my-4">
            Already have a Account?
            <Link
              to="/login"
              className="hover:text-blue-600 text-pink-900 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
