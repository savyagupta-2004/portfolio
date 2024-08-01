import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const handlesend = () => toast("Thanks! The Team will get in touch with you");
  // const handlesend = () => {
  //   alert("Thanks! The Team will get in touch with you");
  // };
  useEffect(() => {
    Aos.init();
  }, []);
  const [form, setform] = useState({ naam: "", phone: "", mail: "" });
  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: [e.target.value] });
  };
  return (
    <>
      <div className="wow py-10">
        <h1 className="font-bold text-5xl flex justify-center items-center">
          Let's Chat
        </h1>
        <div className="flex justify-center items-center gap-3">
          <div className="mx-auto">
            <input
              required="true"
              value={form.naam}
              onChange={handlechange}
              name="naam"
              type="text"
              placeholder="Enter Your Name"
              className=" border  py-2  my-3 w-full rounded-full  border-green-500 p-3 "
              data-aos="fade-right"
              minLength="3"
            ></input>
            <input
              value={form.phone}
              onChange={handlechange}
              name="phone"
              type="number"
              placeholder="Enter Your Phone number"
              className=" rounded-full border border-green-500 py-2 w-full p-3"
              data-aos="fade-left"
              minLength="10"
            ></input>
            <div className="input2 w-full py-2">
              <input
                value={form.mail}
                onChange={handlechange}
                name="mail"
                type="text"
                placeholder="Enter Your Gmail-Username"
                className=" rounded-full border border-green-500  p-3 py-2 my-1 w-full"
              ></input>
              <div className="flex justify-center items-center my-2">
                <button
                  onClick={handlesend}
                  type="button"
                  className=" my-2 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  disabled={
                    form.naam == "" || form.mail == "" || form.phone == ""
                      ? true
                      : false
                  }
                >
                  Send
                </button>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
