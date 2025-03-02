"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Jost } from "next/font/google";

import { FaCalendar, FaFacebookF, FaPinterestP, FaCoins } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { MdWorkspacePremium, MdLocationSearching, MdEqualizer } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

import EmployListData from "@/app/employers/EmployListData";
import MiddleJobListData from "./MiddleJobListData";

const jost = Jost({
  weight: ["500"],
  subsets: ["latin"],
});

interface DataType {
  branch: [];
}
interface branchDatType{
    branch:[{
      url:String,
      icon:String,
      name:String,
      field:String,
      location:String,
      minSalary:String,
      maxSalary:String
    }]
  }
  

const MiddleCompany = ({branch}:branchDatType) => {
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    setVideoSrc("/vedio.mp4");
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center space-y-3">
      <div className="w-full">
        {/* About Company Section */}
        <div className="w-full flex flex-col space-y-5 p-3">
          <div className={`${jost.className} text-xl w-full flex items-start`}>About Company</div>
          <div style={{ fontWeight: 400 }} className={`${jost.className} text-[#77838f] flex flex-col space-y-3 text-md`}>
            <span>
              Moody’s Corporation, often referred to as Moody’s, is an American business and financial services company. It is the holding company for
              Moody’s Investors Service (MIS), an American credit rating agency, and Moody’s Analytics (MA), an American provider.
            </span>
            <span>
              Moody’s was founded by John Moody in 1909 to produce manuals of statistics related to stocks and bonds and bond ratings. Moody’s was
              acquired by Dun & Bradstreet in 1962. In 2000, Dun & Bradstreet spun off Moody’s Corporation as a separate company that was listed on the
              NYSE under MCO. In 2007, Moody’s Corporation was split into two operating divisions, Moody’s Investors Service, the rating agency, and
              Moody’s Analytics, with all of its other products.
            </span>
            <span>
              Moody’s Corporation, often referred to as Moody’s, is an American business and financial services company. It is the holding company for
              Moody’s Investors Service (MIS), an American credit rating agency, and Moody’s Analytics (MA), an American provider of financial analysis
              software and services.
            </span>
          </div>
        </div>

        {/* Social Profiles Section */}
        <div className="w-full flex flex-col lg:flex-row lg:space-x-2 lg:space-y-0 lg:items-center lg:justify-center space-y-2 p-3 border-y">
          <div className={`${jost.className} text-lg w-full flex items-start`}>Social Profiles :</div>
          <div className="w-full flex items-center justify-start space-x-3">
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center justify-center space-x-1 bg-[#1967d2] text-white rounded-lg p-2 hover:cursor-pointer">
                <div className="text-white">
                  <FaFacebookF />
                </div>
                <div className={`${jost.className} text-md`}>Facebook</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center justify-center space-x-3 bg-[#bc91e8] text-white rounded-lg p-2 hover:cursor-pointer">
                <div className="text-white">
                  <FaTwitter />
                </div>
                <div className={`${jost.className} text-md`}>Twitter</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center justify-center space-x-1 bg-[#d93025] text-white rounded-lg p-2 hover:cursor-pointer">
                <div className="text-white">
                  <FaPinterestP />
                </div>
                <div className={`${jost.className} text-md`}>Pinterest</div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="w-full flex flex-col items-start justify-start space-y-5 p-3 border-y">
          <div className={`${jost.className} text-2xl w-full flex items-center justify-center`}>Portfolio</div>
          <div className="w-full flex items-start justify-start space-x-3 md:px-10">
            <Image className="rounded-xl" src="/Portfolio1.jpg" width={300} height={200} alt="Portfolio Image 1" />
            <Image className="rounded-xl" src="/Portfolio2.jpg" width={300} height={200} alt="Portfolio Image 2" />
            <Image className="rounded-xl" src="/Portfolio3.jpg" width={300} height={200} alt="Portfolio Image 3" />
            <Image className="rounded-xl" src="/Portfolio4.jpg" width={300} height={200} alt="Portfolio Image 4" />
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full flex flex-col space-y-2 p-3">
          <div className={`${jost.className} text-2xl w-full flex items-start`}>Video</div>
          <div className="w-full">
            {videoSrc && (
              <video key={videoSrc} controls className="w-full rounded-md">
                <source src={videoSrc} type="video/mp4" />
              </video>
            )}
          </div>
        </div>

        {/* Job Listings */}
        {/* Ensure `branch` is properly passed to avoid hydration errors */}
        <MiddleJobListData branch={branch} />
        {/* <EmployListData data={data} /> */}
      </div>
    </div>
  );
};

export default MiddleCompany;
