import { Link } from "react-router-dom";
import Image from "../../utils/Image";
import addStudentImg from "/public/add_student_img.png";

const AddStudent = () => {
  return (
    <main>
      <section className="flex items-center justify-between flex-col xl:flex-row w-full h-[100vh]">
        <section className="bg-primary w-full h-full flex items-center justify-center flex-col px-0 py-2 md:px-20">
          <h2 className="text-textPrimary text-xl md:text-3xl lg:text-[45px] font-lato font-medium leading-[140%] mb-4 text-center ">
            Add Student
          </h2>
          <Image imgSrc={addStudentImg} altText="add student image" />
        </section>
        <section className="bg-primaryBg w-full h-full flex items-center justify-center flex-col px-3 py-5 lg:py-2 md:px-20">
          <div className="w-full lg:w-[520px] mx-2">
            <form action="">
              <div className="w-full flex items-center justify-center gap-x-5">
                <input
                  type="text"
                  placeholder="Enter firstname"
                  name="firstName"
                  //   value={registerData.fullname}
                  //   onChange={handleRegisterField}
                  className="w-full bg-secondary outline-none border-none py-4 px-5 mb-5 text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary"
                />
                <input
                  type="text"
                  placeholder="Enter lastname"
                  name="lastName"
                  //   value={registerData.fullname}
                  //   onChange={handleRegisterField}
                  className="w-full bg-secondary outline-none border-none py-4 px-5 mb-5 text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary"
                />
              </div>
              <div className="w-full flex items-center justify-center gap-x-5">
                <input
                  type="email"
                  placeholder="Class"
                  name="studentClass"
                  //   value={registerData.email}
                  //   onChange={handleRegisterField}
                  className="w-full bg-secondary outline-none border-none py-4 px-5 mb-5 text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary"
                />
                <input
                  type="email"
                  placeholder="Roll Number"
                  name="rollNumber"
                  //   value={registerData.email}
                  //   onChange={handleRegisterField}
                  className="w-full bg-secondary outline-none border-none py-4 px-5 mb-5 text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary"
                />
              </div>
              <div className="w-full flex items-center justify-center gap-x-5">
                <input
                  type="text"
                  name="section"
                  //   value={registerData.phoneNumber}
                  //   onChange={handleRegisterField}
                  placeholder="Section"
                  className="w-full bg-secondary outline-none border-none py-4 px-5 mb-5 text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary"
                />
                <input
                  type="text"
                  name="role"
                  //   value={registerData.password}
                  //   onChange={handleRegisterField}
                  placeholder="Role"
                  className="w-full bg-secondary outline-none border-none py-4 px-5 mb-5 text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary"
                />
              </div>
              <div className="w-full flex items-center justify-center gap-x-5">
                <input
                  type="email"
                  name="email"
                  //   value={registerData.phoneNumber}
                  //   onChange={handleRegisterField}
                  placeholder="Email"
                  className="w-full bg-secondary outline-none border-none py-4 px-5 mb-5 text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary"
                />
                <input
                  type="password"
                  name="password"
                  //   value={registerData.password}
                  //   onChange={handleRegisterField}
                  placeholder="Password"
                  className="w-full bg-secondary outline-none border-none py-4 px-5 mb-5 text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary"
                />
              </div>
              <div className="w-full flex items-center justify-center gap-x-5">
                <input
                  type="text"
                  name="dob"
                  //   value={registerData.role}
                  //   onChange={handleRegisterField}
                  placeholder="Date of Birth: 01-01-2000"
                  className="w-full bg-secondary outline-none border-none py-4 px-5 mb-5 text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary"
                />
                <input
                  type="text"
                  name="gender"
                  //   value={registerData.role}
                  //   onChange={handleRegisterField}
                  placeholder="Gender"
                  className="w-full bg-secondary outline-none border-none py-4 px-5 mb-5 text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary"
                />
              </div>
              <div className="w-full flex items-center justify-center gap-x-5">
                <input
                  type="text"
                  name="phone"
                  //   value={registerData.role}
                  //   onChange={handleRegisterField}
                  placeholder="Phone"
                  className="w-full bg-secondary outline-none border-none py-4 px-5 mb-5 text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary"
                />
                <input
                  type="file"
                  name="photo"
                  //   value={registerData.role}
                  //   onChange={handleRegisterField}
                  placeholder="Photo"
                  className="w-full bg-secondary outline-none border-none py-4 px-5 mb-5 text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary"
                />
              </div>
              <div className="w-full flex items-center justify-center gap-x-5">
                <input
                  type="text"
                  name="address"
                  //   value={registerData.role}
                  //   onChange={handleRegisterField}
                  placeholder="Address"
                  className="w-full bg-secondary outline-none border-none py-4 px-5 mb-5 text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary"
                />
              </div>
              <div className="w-full">
                <button
                  // onClick={handleSignUp}
                  className="w-full bg-secondary outline-none border-none py-4 px-5 mb-5 text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary cursor-pointer"
                >
                  Add Student
                </button>
              </div>
              <h4 className="text-center text-textPrimary text-base font-ibmPlex font-normal leading-[135%] rounded-md placeholder:text-textPrimary">
                Do you want to go home?{" "}
                <Link
                  to={"/"}
                  className="text-secondary cursor-pointer hover:underline"
                >
                  Home
                </Link>
              </h4>
            </form>
          </div>
        </section>
      </section>
    </main>
  );
};

export default AddStudent;
