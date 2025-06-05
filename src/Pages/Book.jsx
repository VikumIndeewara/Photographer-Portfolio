import React, { useState } from "react";
import img from "../assets/Images/contact.jpg";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

const Book = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);

  const accessKey = "4a8480e8-8b75-47a3-8e82-083e4147478d";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "contact form",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
    },
  });

  if (isSuccess) {
    Swal.fire({
      title: "Message Sent!",
      text: "Message Sent Successfully!!",
      icon: "success",
    });
  }

  return (
    <div className="w-dvw h-full bg-black overflow-hidden">
      <div className="flex container mx-auto lg:gap-10 gap-2 justify-center md:py-20 py-10 max-w-7xl">
        <div className="w-1/2 lg:block hidden ">
          <img src={`${img}`} className="h-full w-full object-cover" />
        </div>
        <div className="text-white lg:w-1/2 w-4/5  text-center flex flex-col justify-center">
          <div className="font-wosker lg:text-7xl text-5xl">BOOK NOW</div>
          <div className="flex flex-col w-full justify-center items-center">
            <div className="md:w-[500px] h-full ">
              <p className="w-full text-center items-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
                nulla error autem non perspiciatis labore aliquid doloremque
                ipsum modi commodi, recusandae id facilis ipsam molestias
                eligendi. Sunt dolores quo dolorem!
              </p>
              <div className="w-full lg:hidden h-1/3 p-2 mx-2 ">
                <img src={`${img}`} className="h-full w-full object-cover" />
              </div>
              <div className="w-full h-full my-10">
                <form
                  className="flex flex-col gap-16 justify-center"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="flex justify-between md:flex-row flex-col gap-16">
                    <div className="w-full">
                      <label className="block text-white text-lg font-bold mb-2 text-start ">
                        Your Name
                      </label>
                      <div className="relative w-[90%] flex justify-center">
                        <input
                          name="name"
                          type="text"
                          required
                          {...register("name", { required: true })}
                          className="w-full h-[40px] clip-mini absolute left-0 right-0  top-[2px] z-10 px-5 text-sm bg-black"
                          placeholder="Enter Name"
                        />

                        <div className="w-full h-[45px] scale-[101%] clip-mini absolute bg-white top-0 left-0 bottom-0"></div>
                      </div>
                    </div>
                    <div className="w-full">
                      <label className="block text-white text-lg font-bold mb-2 text-start ">
                        Your Mobile
                      </label>
                      <div className="relative w-[90%] flex justify-center">
                        <input
                          name="mobile"
                          type="text"
                          required
                          {...register("mobile", { required: true })}
                          className="w-full h-[40px] clip-mini absolute left-0 bg-black right-0 top-[2px] z-10 p-5 text-sm"
                          placeholder="Enter Mobile"
                        />
                        <div className="w-full h-[45px] scale-[101%] bg-white  clip-mini absolute top-0 left-0 bottom-0"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <label className="block text-white text-lg font-bold mb-2 text-start ">
                      Your Email
                    </label>
                    <div className="relative w-[90%] flex justify-center">
                      <input
                        name="email"
                        type="email"
                        required
                        {...register("email", { required: true })}
                        className="w-full h-[40px] clip-half absolute left-0 right-0 top-[2px] z-10 p-5 text-sm bg-black"
                        placeholder="Enter Email"
                      />
                      <div className="w-full h-[45px] scale-[101%] bg-white  clip-half absolute top-0 left-0 bottom-0"></div>
                    </div>
                  </div>
                  <div className="w-full h-[100px]">
                    <label className="block text-white text-lg font-bold mb-2 text-start ">
                      Description
                    </label>
                    <div className="relative w-[90%] flex-grow grow-2 flex justify-center">
                      <textarea
                        name="message"
                        type="text"
                        required
                        {...register("message", { required: true })}
                        className="w-full h-[100px] clip-full absolute left-0 right-0 top-[2px] z-10 p-5 text-sm bg-black"
                        placeholder="Enter Description"
                      />
                      <div className="w-full h-[105px] scale-[101%] bg-white  clip-full absolute top-0 left-0 bottom-0"></div>
                    </div>
                  </div>
                  <div>
                    <button className="btn font-Poppins lg:text-2xl px-10 py-3 my-5 text-xl  clip-button hover:bg-brand2 hover:text-white text-center">
                      submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
