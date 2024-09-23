import { Link } from "react-router-dom";
import Image from "../../utils/Image";
import registerImg from "/register_img.png";

const Register = () => {
  return (
    <main>
      <section className="flex items-center justify-between flex-col xl:flex-row w-full h-[100vh]">
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
                  placeholder="Enter Fullname"
                  className="w-full bg-secondary outline-none border-none py-4 px-5 mb-5 text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="w-full bg-secondary outline-none border-none py-4 px-5 mb-5 text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="w-full bg-secondary outline-none border-none py-4 px-5 mb-5 text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Enter Password"
                  className="w-full bg-secondary outline-none border-none py-4 px-5 mb-5 text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Enter Role"
                  className="w-full bg-secondary outline-none border-none py-4 px-5 mb-5 text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary"
                />
              </div>
              <div className="w-full">
                <button className="w-full bg-secondary outline-none border-none py-4 px-5 mb-5 text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary cursor-pointer">
                  Sign Up
                </button>
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
