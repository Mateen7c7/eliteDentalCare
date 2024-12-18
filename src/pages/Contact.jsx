import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useRef();

  // const serviceId = "service_elv17es";
  // const templateId = "template_rri8xao";
  // const publicKey = "qQ5UrayTS4lKd-z_u";

  const serviceId = "service_ztyahl3";
  const templateId = "template_1ctvzma";
  const publicKey = "D0q0Pur1iNCEVBlWG";

  // const sendEmail = () => {
  //   // e.preventDefault();

  //   emailjs
  //     .sendForm(serviceId, templateId, form.current, {
  //       publicKey: publicKey,
  //     })
  //     .then(
  //       () => {
  //         console.log("SUCCESS!");
  //       },
  //       (error) => {
  //         console.log("FAILED...", error);
  //       }
  //     );
  // };
  const submit = async (e) => {
    e.preventDefault();
    console.log(name, email, phone, message);
    setLoading(true);
    // sendEmail();
    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setLoading(false);
          alert("Message Sent");
        },
        (error) => {
          console.log("FAILED...", error);
          setLoading(false);
          alert("Message Sent");
        }
      );

    setEmail("");
    setPhone("");
    setMessage("");
    setName("");
  };
  return (
    <section className="min-h-screen w-full bg-bg">
      <div className="w-full lg:w-full h-[40vh] lg:h-[80vh]">
        <img
          src="/clinic/9.JPG"
          className="w-full h-full object-cover object-bottom md:object-center lg:object-center"
        />
      </div>
      <h4 className="text-secondary text-xl text-center mt-5 sm:text-xl sm:text-left sm:px-10 md:text-3xl lg:px-20 md:py-10 ">
        We’d love to hear from you
      </h4>
      <div className="flex flex-col gap-5 md:flex-row lg:px-20">
        <form
          ref={form}
          onSubmit={submit}
          className="w-full py-5 px-10 space-y-5 "
        >
          <div className="w-full space-y-5 ">
            <h1 className="text-center text-black text-2xl font-semibold md:text-left ">
              Name
            </h1>
            <input
              name="from_name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter your Name"
              type="text"
              className="bg-gray-200 bg-opacity-50 w-full placeholder:text-xl py-3  placeholder:text-secondary  outline-none px-5"
            />
          </div>
          <div className="w-full space-y-5 ">
            <h1 className="text-center text-black text-2xl font-semibold md:text-left">
              Phone Number
            </h1>
            <input
              name="from_phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              placeholder="Enter your Phone Number"
              type="text"
              className="bg-gray-200 bg-opacity-50 w-full placeholder:text-xl py-3  placeholder:text-secondary px-5 outline-none"
            />
          </div>
          <div className="w-full space-y-5 ">
            <h1 className="text-center text-black text-2xl font-semibold md:text-left">
              Email Id
            </h1>
            <input
              name="from_email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter your Email ID"
              type="text"
              className="bg-gray-200 bg-opacity-50 w-full placeholder:text-xl py-3  placeholder:text-secondary px-5 outline-none"
            />
          </div>
          <div className="w-full space-y-5 ">
            <h1 className="text-center text-black text-2xl font-semibold md:text-left">
              Message
            </h1>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={500}
              placeholder="Enter your Message"
              type="text"
              className="bg-gray-200 bg-opacity-50 w-full placeholder:text-xl py-3  placeholder:text-secondary px-5 h-[200px] outline-none"
            />
          </div>
          <div className="w-full center">
            <input
              className="bg-primary px-4 py-2 text-white font-semibold text-xl rounded-md"
              type="submit"
              value={loading ? "Sending..." : "SUBMIT"}
            />
          </div>
        </form>
        <div className="w-full px-10 space-y-5">
          <div className="space-y-3">
            <h4 className="text-black text-2xl font-semibold">Address</h4>
            <p className="text-secondary text-md md:text-xl">
              1st Floor, Skandanshi Shops & Spaces Building, Beside H.P. Petrol
              Bunk, Near D-Mart, Bellary Chowrasta, Kurnool 518003
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-black text-2xl font-semibold">Phone</h4>
            <p className="text-secondary text-md md:text-xl">
              +91 8143370375 <br />
              +91 9014601768 <br />
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-black text-2xl font-semibold">Email</h4>
            <p className="text-secondary text-md md:text-xl">
              elitedentalcarekurnool@gmail.com
            </p>
          </div>
          <div className="">
            <iframe
              className="w-full h-[300px] my-10"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.788897588002!2d78.02128739999999!3d15.823979099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5dd007a5d2ce9%3A0xb1304eaff17f7310!2sElite%20Dental!5e1!3m2!1sen!2sin!4v1732967206665!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
