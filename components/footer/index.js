"use client";
import Link from "next/link";
import {
  RiFacebookFill,
  RiWhatsappLine,
  RiInstagramLine,
  RiYoutubeLine,
  RiArrowUpLine,
} from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";
import { apiurl, getData } from "@/utils";
import Loading from "@/app/loading";

const Footer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await getData("/generate");
        setData(response?.rows);
      } catch (error) {
        console.log("error in social media icons", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="bg-darkbule text-white">
      {/* Scroll-to-top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="hidden lg:flex lg:fixed lg:right-16 lg:bottom-6 lg:w-14 lg:h-14 lg:bg-skyblue lg:rounded-full lg:items-center lg:justify-center"
      >
        <RiArrowUpLine className="text-white text-xl" />
      </button>

      {/* Social Media Icons */}
      <div className="hidden lg:block lg:fixed lg:top-[280px] lg:left-[110px]">
        <ul className="hidden lg:flex lg:flex-col lg:space-y-4">
          {data && data.length > 0 ? (
            data.map((item) => (
              <li key={item?.id}>
                <Link
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600"
                  href={item?.url}
                  target="_blank"
                >
                  <Image
                    src={`${apiurl}/${item?.socialIcon}`}
                    alt={item?.platformName || "Social Media Icon"}
                    width={96}
                    height={96}
                  />
                </Link>
              </li>
            ))
          ) : (
            <div>No Icons</div>
          )}
        </ul>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8 px-4">
        {/* Contact Info */}
        {/* <div className="">
          <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
          <div className="h-0.5 bg-gray-300 w-16 mb-4"></div>
          <div className="flex items-center gap-4 mt-8">
            <Image
              width={10}
              height={10}
              className="w-9"
              src="/images/mail.png"
              alt="Mail Icon"
            />
            <Image
              width={10}
              height={10}
              className="w-9 md:hidden"
              src="/images/smartphone.png"
              alt="Phone Icon"
            />
            <div className="">
              <p className="hidden md:block">Do you Have any Question</p>
              <Link
                className="hover:text-skyblue duration-300 hidden md:block"
                href="mailto:info@mediatechtemple.com"
              >
                info@mediatechtemple.com
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-5">
            <Image
              width={10}
              height={10}
              className="w-9 hidden md:block"
              src="/images/smartphone.png"
              alt="Phone Icon"
            />
            <div>
              <h5>Socials Network</h5>
              <div className="flex mt-2 space-x-4">
                <Link href="https://www.facebook.com/" target="_blank">
                  <RiFacebookFill className="hover:text-skyblue duration-300 w-6 h-6" />
                </Link>
                <Link href="https://web.whatsapp.com/" target="_blank">
                  <RiWhatsappLine className="hover:text-skyblue duration-300 w-6 h-6" />
                </Link>
                <Link href="https://www.instagram.com/" target="_blank">
                  <RiInstagramLine className="hover:text-skyblue duration-300 w-6 h-6" />
                </Link>
                <Link href="https://web.telegram.org/" target="_blank">
                  <FaTelegramPlane className="hover:text-skyblue duration-300 w-6 h-6" />
                </Link>
                <Link href="https://www.youtube.com/" target="_blank">
                  <RiYoutubeLine className="hover:text-skyblue duration-300 w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div> */}
        <div className="mt-10">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={96}
            height={96}
            className="bg-white"
          />

          <div>
            <h4 className=" font-poppin text-[20px] lg:text-[26px] font-semibold text-white md:whitespace-nowrap">
              INDIA SARKARI NAUKRI
            </h4>

            <span className="text-[16px] font-medium text-skyblue md:whitespace-nowrap">
              Sarkari Naukri Website
            </span>
            <Link href="/" className="hover:text-skyblue duration-300 p-6">
              Author
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex justify-center">
          <div className="relative lg:left-10 ">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <div className="h-0.5 bg-gray-300 w-16 mb-4"></div>
            <ul className="space-y-5 mt-8">
              <li>
                <Link href="#" className="hover:text-skyblue duration-300">
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-skyblue duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy/termss"
                  className="hover:text-skyblue duration-300"
                >
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-skyblue duration-300">
                  Advertise With Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Resources */}
        <div className="relative lg:left-10">
          <h3 className="text-xl font-semibold mb-2">Resources</h3>
          <div className="h-0.5 bg-gray-300 w-16 mb-4"></div>
          <ul className="space-y-5 mt-8">
            <li>
              <Link
                href="/latest-vacancy?type=admitCards"
                className="hover:text-blue-300"
              >
                Admit Card
              </Link>
            </li>
            <li>
              <Link
                href="/latest-vacancy?type=results"
                className="hover:text-blue-300"
              >
                Exam Results
              </Link>
            </li>
            <li>
              <Link
                href="/latest-vacancy?type=answerKeys"
                className="hover:text-blue-300"
              >
                Exam Answer Key
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-300">
                Admission
              </Link>
            </li>
          </ul>
        </div>

        {/* Category */}
        <div className="lg:left-10 relative">
          <h3 className="text-xl font-semibold mb-2">Category</h3>
          <div className="h-0.5 bg-gray-300 w-16 mb-4"></div>
          <ul className="space-y-5 mt-8">
            <li>
              <Link
                href="/latest-vacancy?type=jobs"
                className="hover:text-blue-300"
              >
                Latest Jobs
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-300">
                Free Books
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-300">
                Free Notes
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-300">
                Old Papers
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-2 text-center text-sm p-4 lg:text-base text-white border-t border-borderColor pt-4 pb-4">
        {/* © All Right Reserved | */}© All Rights Reserved to
        {/* <Link
          href="https://www.mediatechtemple.com/web-design-and-development-services/"
          className="text-skyblue"
          target="_blank"
          title="Media Tech Temple"
        >
          Website Developed By
        </Link>{" "}
        <Link
          href="https://mediatechtemple.com/"
          className="text-skyblue"
          target="_blank"
          title="Media Tech Temple"
        >
          Media Tech Temple
        </Link> */}
        <Link
          href="https://mediatechtemple.com/"
          className="text-skyblue"
          target="_blank"
          title="Media Tech Temple"
        >
          {" "}
          MediaTechTemple
        </Link>
      </div>
    </div>
  );
};

export default Footer;
