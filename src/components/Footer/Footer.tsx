import Link from "next/link";
import {
  BsFillSendFill,
  BsMessenger,
  BsTelephoneInbound,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="container mx-auto px-4">
        <Link href="/" className="font-black text-tertiary-dark">
          Hotelzz
        </Link>
        <h4 className="font-semobold text-[40px] py-6">Contact</h4>
        <div className="flex flex-wrap gap-16 items-center justify-between">
          <div className="flex-1">
            <p>Beraid Dhaka</p>
            <div className="flex items-center py-4">
              <BsFillSendFill />
              <p className="ml-2">Moshiur Rahman</p>
            </div>
            <div className="flex items-center ">
              <BsTelephoneInbound />
              <p className="ml-2">017166959995</p>
            </div>
            <div className="flex items-center">
              <BsMessenger />
              <p className="ml-2">Moshiur Rahman</p>
            </div>
          </div>
          <div className="flex-1 md:text-right">
            <p className="pb-4">Our Story</p>
            <p className="pb-4">Get in Touch</p>
            <p className="pb-4">Our Privacy</p>
            <p className="">Customer Assistance</p>
          </div>
          <div className="flex-1 text-right">
            <p className="pb-4">Dining Experience</p>
            <p className="pb-4">Wellness</p>
            <p className="pb-4">Fitness</p>
            <p>Sports</p>
          </div>
        </div>
      </div>
      <div className="bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0"/>
    </footer>
  );
};

export default Footer;
