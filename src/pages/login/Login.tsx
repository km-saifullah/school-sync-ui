import { Link } from "react-router-dom";
import loginImg from "/login_img.png";
import Image from "../../utils/Image";
import React, { useState } from "react";
import { LoginState } from "../../utils/UserTypes";

const Login = () => {
  const [loginData, setLoginData] = useState<LoginState>({
    email: "",
    password: "",
  });

  // handle login input fields
  const handleLoginField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const loginInfo = { ...loginData };
    loginInfo[e.target.name as keyof LoginState] = e.target.value;
    setLoginData(loginInfo);
  };

  // handle login
  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    <main>
      <section className="flex items-center justify-between flex-col xl:flex-row w-full h-[100vh]">
        <section className="bg-secondary w-full h-full flex items-center justify-center flex-col px-0 py-2 md:px-20">
          <h2 className="text-textPrimary text-xl md:text-3xl lg:text-[45px] font-lato font-medium leading-[140%] mb-4 text-center ">
            Login Yourself
          </h2>
          <Image imgSrc={loginImg} altText="login image" />
        </section>
        <section className="bg-primaryBg w-full h-full flex items-center justify-center flex-col px-3 py-5 lg:py-2 md:px-20">
          <div className="w-full lg:w-[520px] mx-2">
            <form action="">
              <div className="w-full">
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginField}
                  className="w-full bg-secondary outline-none border-none py-4 px-5 mb-5 text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary"
                />
              </div>
              <div className="w-full">
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginField}
                  placeholder="Enter Password"
                  className="w-full bg-secondary outline-none border-none py-4 px-5 mb-5 text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary"
                />
              </div>
              <div className="w-full">
                <button
                  onClick={handleSignIn}
                  className="w-full bg-secondary outline-none border-none py-4 px-5 mb-5 text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary cursor-pointer"
                >
                  Sign In
                </button>
              </div>
              <h4 className="text-center text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary pb-5 cursor-pointer">
                Forgot Password
              </h4>
              <h4 className="text-center text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary">
                Does not have an account?{" "}
                <Link
                  to={"/register"}
                  className="text-secondary cursor-pointer hover:underline"
                >
                  Sign Up
                </Link>
              </h4>
            </form>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Login;
