import React, { useState } from "react";
function Contact() {
  const [btn1, setbtn1] = useState(true);
  const [btn2, setbtn2] = useState(false);
  const [btn3, setbtn3] = useState(false);
  const [btn4, setbtn4] = useState(false);
  const [btn5, setbtn5] = useState(false);
  return (
    <section className="w-screen px-24 max-lg:px-12 max-md:px-6 max-sm:px-1 py-12 bg-[#DCCFED] flex max-md:gap-12 max-md:flex-col justify-between">
      <div className="flex flex-col gap-12">
        <div className="text-2xl text-[#331C52]">
          Let's discuss <br />
          on something <span className="text-purple-600">cool</span> togather
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-[#331C52] font-medium">I'm intrested in ...</div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <button
                className={`${
                  btn1
                    ? "bg-[#331C52] text-[#DCCFED]"
                    : "text-[#331C52] bg-[#DCCFED]"
                } px-2 py-1 font-medium border border-[#331C52] rounded-md`}
                 onClick={e=>{
                    setbtn1(true);
                    setbtn2(false);
                    setbtn3(false);
                    setbtn4(false);
                    setbtn5(false);
                }}
              >
                Ecommerce Website
              </button>
              <button
                className={`${
                  btn2
                    ? "bg-[#331C52] text-[#DCCFED]"
                    : "text-[#331C52] bg-[#DCCFED]"
                } px-2 py-1 font-medium border border-[#331C52] rounded-md`}
                onClick={e=>{
                    setbtn1(false);
                    setbtn2(true);
                    setbtn3(false);
                    setbtn4(false);
                    setbtn5(false);
                }}
              >
                Saas Website
              </button>
            </div>
            <div className="flex gap-4">
              <button
                className={`${
                  btn3
                    ? "bg-[#331C52] text-[#DCCFED]"
                    : "text-[#331C52] bg-[#DCCFED]"
                } px-2 py-1 font-medium border border-[#331C52] rounded-md`}
                onClick={e=>{
                    setbtn1(false);
                    setbtn2(false);
                    setbtn3(true);
                    setbtn4(false);
                    setbtn5(false);
                }}
              >
                Landing page
              </button>
              <button
                className={`${
                  btn4
                    ? "bg-[#331C52] text-[#DCCFED]"
                    : "text-[#331C52] bg-[#DCCFED]"
                } px-2 py-1 font-medium border border-[#331C52] rounded-md`}
                onClick={e=>{
                    setbtn1(false);
                    setbtn2(false);
                    setbtn3(false);
                    setbtn4(true);
                    setbtn5(false);
                }}
              >
                Portfolio
              </button>
              <button
                className={`${
                  btn5
                    ? "bg-[#331C52] text-[#DCCFED]"
                    : "text-[#331C52] bg-[#DCCFED]"
                } px-2 py-1 font-medium border border-[#331C52] rounded-md`}
                onClick={e=>{
                    setbtn1(false);
                    setbtn2(false);
                    setbtn3(false);
                    setbtn4(false);
                    setbtn5(true);
                }}
              >
                Blog Website
              </button>
            </div>
          </div>
        </div>
      </div>
      <form className="flex flex-col justify-between gap-4 h-full w-1/3 max-md:w-full">
         <input type="text" placeholder="Your Name" className="w-full outline-purple-600 rounded-sm border-none px-3 py-1" />
         <input type="email" placeholder="Your email" className="w-full outline-purple-600 rounded-sm border-none px-3 py-1" />
         <textarea placeholder="Your message" className="w-full outline-purple-600 rounded-sm border-none px-3 py-1 h-full" rows={5}></textarea>
        <button className="w-full bg-[#331C52] text-[#DCCFED] mx-1 py-1 rounded-md font-medium" onClick={e=>e.preventDefault()}>Submit</button>
      </form>
    </section>
  );
}

export default Contact;
