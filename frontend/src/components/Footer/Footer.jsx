import React from "react";
import { ChevronRight, Navigation, Phone, Mail } from "lucide-react";

export function Footer() {
  const links = [
    { name: "About us", url: "#" },
    { name: "Our team", url: "#" },
    { name: "Our Projects", url: "#" },
    { name: "Donate", url: "#" },
    { name: "Gallery", url: "#" },
    { name: "Testimonials", url: "#" },
    { name: "Join us", url: "#" },
    { name: "Contact us", url: "#" },
  ];

  return (
    <footer className="bg-[#2B2B2B]">
      <div className="flex flex-col md:flex-row justify-around items-start w-full md:w-[1182px] mx-3 md:mx-auto space-y-10 bg-[#2B2B2B] py-14 space-x-0 md:space-x-10">
        <div className="md:w-3/6 space-y-10">
          <h1 className="text-white text-2xl">Our Work</h1>
          <p className="text-neutral-300">
            ROHINI's Preventive Oral Health Care Treatment Initiative aims to
            provide quality dental care to underprivileged children, including
            those in government schools and juvenile homes. Our comprehensive
            services, including oral prophylaxis and fluoride application,
            target 1250 children monthly, totalling 15,000 yearly, from 2022 to
            2025.
          </p>
        </div>
        <div className="md:w-1/6 space-y-10">
          <h1 className="text-white text-2xl">Useful Links</h1>
          <ul className="text-neutral-300 space-y-3">
            {links.map((link) => (
              <li className="hover:text-[#FF4D00] hover:underline  transition-all ease-in-out duration-200 flex ">
                <ChevronRight /> <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-2/6 space-y-10">
          <h1 className="text-white text-2xl">Get In Touch</h1>
          <div className="space-y-5 text-neutral-300">
            <div className="border-b py-3 flex flex-col md:flex-row space-x-0 md:space-x-2">
              <Navigation size={40} color="#FF4D00" />
              <div>
                <p className="font-bold">Rohini Foundation</p>
                <p>
                  C/o Little Smile Dental Hospital 10/3/304/13, Opposite post
                  office, Humayunagar Masab Tank, Hyderabad, Telangana
                </p>
              </div>
            </div>
            <div className="border-b py-3 flex flex-col md:flex-row space-x-0 md:space-x-2">
              <Phone size={20} color="#FF4D00" />
              <div>
                <p>Phone : 1234567890</p>
              </div>
            </div>
            <div className="border-b py-3 flex flex-col md:flex-row space-x-0 md:space-x-2">
              <Phone size={20} color="#FF4D00" />
              <div>
                <p>Phone : 1234567890</p>
              </div>
            </div>
            <div className="border-b py-3 flex flex-col md:flex-row space-x-0 md:space-x-2">
              <Mail size={20} color="#FF4D00" />
              <div>
                <p>Email: example@xyx.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
