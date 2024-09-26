import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Image from "../../utils/Image";
import registerImg from "/register_img.png";
import { RegisterState } from "../../utils/UserTypes";
import config from "../../config/config";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";

const registerLink = config.registerApiLink;

const Register = () => {
  const [registerData, setRegisterData] = useState<RegisterState>({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
  });
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // handle signup fields
  const handleRegisterField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const registerInfo: RegisterState = { ...registerData };
    registerInfo[e.target.name as keyof RegisterState] = e.target.value;
    setRegisterData(registerInfo);
  };

  // handle signup
  const handleSignUp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      registerData.fullname === "" &&
      registerData.email === "" &&
      registerData.phoneNumber === "" &&
      registerData.password === ""
    ) {
      toast.error("Please enter all required fields");
    } else {
      setIsLoaded(true);
      await axios.post(registerLink, registerData);
      setRegisterData({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
      });
    }
    setIsLoaded(false);
  };
  return (
    <main>
      <section className="flex items-center justify-between flex-col xl:flex-row w-full h-[100vh]">
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
        />
        <section className="bg-secondary w-full h-full flex items-center justify-center flex-col px-0 py-2 md:px-20">
          <h2 className="text-textPrimary text-xl md:text-3xl lg:text-[45px] font-lato font-medium leading-[140%] mb-4 text-center ">
            Register Yourself
          </h2>
          <Image imgSrc={registerImg} altText="register image" />
        </section>
        <section className="bg-primaryBg w-full h-full flex items-center justify-center flex-col px-3 py-5 lg:py-2 md:px-20">
          <div className="w-full lg:w-[520px] mx-2">
            <form action="">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Enter fullname"
                  name="fullname"
                  value={registerData.fullname}
                  onChange={handleRegisterField}
                  className="w-full bg-secondary outline-none border-none py-4 px-5 mb-5 text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary"
                />
              </div>
              <div className="w-full">
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={registerData.email}
                  onChange={handleRegisterField}
                  className="w-full bg-secondary outline-none border-none py-4 px-5 mb-5 text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name="phoneNumber"
                  value={registerData.phoneNumber}
                  onChange={handleRegisterField}
                  placeholder="Enter Phone Number"
                  className="w-full bg-secondary outline-none border-none py-4 px-5 mb-5 text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary"
                />
              </div>
              <div className="w-full">
                <input
                  type="password"
                  name="password"
                  value={registerData.password}
                  onChange={handleRegisterField}
                  placeholder="Enter Password"
                  className="w-full bg-secondary outline-none border-none py-4 px-5 mb-5 text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name="role"
                  value={registerData.role}
                  onChange={handleRegisterField}
                  placeholder="Enter Role"
                  className="w-full bg-secondary outline-none border-none py-4 px-5 mb-5 text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary"
                />
              </div>
              <div className="w-full">
                {isLoaded ? (
                  <div className="flex items-center justify-center">
                    <ThreeDots
                      visible={true}
                      height="80"
                      width="80"
                      color="#E8505B"
                      radius="9"
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  </div>
                ) : (
                  <button
                    onClick={handleSignUp}
                    className="w-full bg-secondary outline-none border-none py-4 px-5 mb-5 text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary cursor-pointer"
                  >
                    Sign Up
                  </button>
                )}
              </div>
              <h4 className="text-center text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="text-secondary cursor-pointer hover:underline"
                >
                  Login
                </Link>
              </h4>
            </form>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Register;
