import { NextPage } from "next";
import Image from "next/image";
import Logo from "../Svg/Logo";
import Calender from "../Svg/Calender";
import RightArrow from "@/Svg/RightArrow";
import ProfilePic from "@/Svg/ProfilePic";
import Rashmin from "../app/Rashmin.png";
import UpArrow from "@/Svg/UpArrow";
import DownArrow from "@/Svg/DownArrow";
import Button from "./components/Button";
import ScheduleList from "./components/ScheduleList";
import p1 from "@/app/1.jpeg";
import p2 from "@/app/2.png";
import p3 from "@/app/3.jpeg";
import p4 from "@/app/4.jpeg";
import p5 from "@/app/5.png";

interface Props {}

const Landing: NextPage<Props> = ({}) => {
  return (
    <div className="w-full grid place-items-center">
      {/* top-design */}
      <div className="bg-primary w-[390px] h-[756px]">
        <div className="flex items-center justify-center flex-col mt-[54px] mb-[10px]">
          <div>
            <Logo />
          </div>
          <div className="font-normal text-lg ">Residential</div>
          <div className="text-secondary font-bold relative text-center z-[2] my-2">
            {/* <div className="w-[162px] bg-primary-2 rounded-full z-[-1] top-[0] h-[162px] absolute"></div> */}
            <span className="text-[46px] leading-[50px]">Happiness </span>{" "}
            <span className="text-[46px]">Program</span>
            {/* <div className="w-[60px] bg-primary-2 rounded-full z-[] h-[60px] absolute"></div> */}
          </div>
          <div className="border border-t-secondary border-b-secondary border-l-transparent border-r-transparent px-1 my-[16px]">
            at{" "}
            <span className="font-semibold ">
              Art of Living Triveni Ashram, Pune
            </span>
          </div>
          <div className="flex items-center justify-center">
            <span>
              <Calender />
            </span>
            <span>13 - 15 August 2023 </span>
          </div>
        </div>
        {/* form-start */}
        <form className="flex flex-col justify-center items-center space-y-4 mt-[20px]">
          <div className="flex flex-col w-[330px] ">
            <label className="text-sm mb-1 opacity-80" htmlFor="">
              Name
            </label>
            <input
              className="border border-gray-200 rounded
               h-[42px]"
              type="text"
              name=""
              id=""
              placeholder="  Enter"
              required
            />
          </div>

          <div className="flex flex-col w-[330px]">
            <label className="text-sm mb-1 opacity-80" htmlFor="">
              WhatsApp Number
            </label>
            <input
              className=" h-[42px] border border-gray-200 rounded"
              type="text"
              name=""
              id=""
              placeholder="  Enter"
              required
            />
          </div>

          <div className="flex flex-col w-[330px]">
            <label className="mb-1 opacity-80" htmlFor="city">
              City
            </label>
            <select className=" h-[42px] border rounded" name="city" id="city">
              <option value="new-york">New York</option>
              <option value="los-angeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
              <option value="miami">Miami</option>
            </select>
          </div>

          <div className="flex flex-col w-[330px]">
            <label className="mb-1 opacity-80" htmlFor="ArtOfLiving">
              Have you done Art of Living Course?
            </label>
            <select
              className=" h-[42px] border border-gray-200 rounded
            "
              name="ArtOfLiving"
              id="ArtOfLiving"
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>

          <Button />
        </form>
      </div>

      <div
        className="w-[390px] flex items-center justify-center my-12 
      "
      >
        <div className="space-y-1 pl-1">
          <span className="font-bold text-xs opacity-70">Faculty</span>
          <h1 className="font-semibold text-xl text-secondary">
            Rashmin Pulekar
          </h1>
          <p className="text-xs font-normal opacity-70">
            TEDx Speaker, Youth Coach, International Art of Living Faculty
          </p>
          <h1 className="font-semibold text-xl   text-secondary">& Team</h1>
        </div>
        <div className="w-[270px] h-[170px]">
          <div className="rounded-full  bg-primary w-[150px] h-[150px] relative">
            <Image
              className="rounded-full absolute top-3 left-4"
              src={Rashmin}
              height={150}
              width={150}
              alt=""
            />
            <div
              className="bg-[#FFCB9B] w-8 h-8 rounded-full
          absolute bottom-[-14px] right-[0px]"
            ></div>
          </div>
        </div>
      </div>

      <div className="bg-primary w-[390px] h-[689px]">
        <h2
          className="text-secondary text-3xl font-bold mt-[60px] mb-[16px] flex
           justify-center"
        >
          Highlights
        </h2>
        <ul className="list-disc pl-8 space-y-7 text-base opacity-70 ">
          <li>
            Learn & Experience the world’s most powerful breathing technique -{" "}
            <span className="font-bold">Sudarshan Kriya</span>
          </li>
          <div className="bg-white w-[306px] py-3 px-5 rounded">
            <h2 className="pl-6 my-2">Benefits of Sudarshan Kriya</h2>
            <div className="flex justify-between">
              <div
                className="flex w-1/2
              "
              >
                <span>
                  <UpArrow />
                </span>
                <span
                  className="pl-1
                "
                >
                  Concentration Clarity of Mind Confidence
                </span>
              </div>
              <div className="flex w1/2">
                <span>
                  <DownArrow />
                </span>
                <span
                  className="pl-1
                "
                >
                  Stress <br /> Anxiety <br /> Overthinking
                </span>
              </div>
            </div>
          </div>
          <li>
            Fulfilled Morning Yoga, Blissful Meditations & Musical Evenings
          </li>
          <li>Youth Activities, Games & Interactive Group Processes</li>
          <li>Opportunity to network with happy minds</li>
          <li>Multiple accommodation options available</li>
        </ul>
        <div className="w-full flex justify-center my-5">
          <Button />
        </div>
      </div>

      <div className="w-[390px] ">
        <h2 className="text-secondary font-bold text-center text-3xl mt-[50px] mb-[16px]">
          Schedule
        </h2>
        <div className="space-y-4">
          <div className="flex justify-center">
            <ScheduleList
              date="13 August"
              list={[
                "Reporting by 4 pm",
                "Session starts at 5 pm",
                "Understanding body - breath - mind",
                "Learning & Experiencing Sudarshan Kriya",
                "Dinner at 8 pm",
              ]}
            />
          </div>
          <div className="flex justify-center">
            <ScheduleList
              date="14 August"
              list={[
                "Morning Yoga at 6:30 am",
                "Breakfast at 8:30 am",
                "Morning Session starts at 10 am",
                "Formula of Happy & Stress Free Life",
                "Lunch at 1 pm",
                "Afternoon Session starts at 2:30 pm",
                "Practical tips to reduce anxiety & frustration",
                "Ashram tour at 5 pm - River front, Campus, Goshala & much more...",
                "Dinner at 7:30 pm followed by Games & Musical Evening",
              ]}
            />
          </div>
          <div className="flex justify-center">
            <ScheduleList
              date="15 August"
              list={[
                "Morning Yoga at 6:30 am followed by Independance Day Celebration",
                "Breakfast at 8:30 am",
                "Morning Session starts at 10 am",
                "Dive deeper into the self",
                "Home going instructions",
                "Lunch at 1 pm",
              ]}
            />
          </div>
          
        </div>
      </div>

      <div className="w-[390px]  bg-primary h-[740px]">
        <div className="text-center  my-8">
            <Button />
          </div>
        <h2 className="text-secondary text-center text-4xl font-bold">
          Photo Gallery
        </h2>
        <div className="w-full relative px-4 "><Image className="object-cover object-center h-[250px] w-[250px]  absolute top-[200px] left-[0px] rounded-full z-[5]" src={p1} width={250} height={250} alt=""/>
      <Image className="object-cover h-[200px] z-[1] w-[200px] rounded-full absolute top-[50px]" src={p2} width={250} height={250} alt=""/>
      <Image className="object-cover h-[195px] z-[2] w-[195px] rounded-full absolute top-[80px] left-[135px]" src={p3} width={250} height={250} alt=""/>
      <Image className="object-cover h-[190px] z-[3] w-[190px] rounded-full absolute top-[210px] left-[200px]" src={p4} width={250} height={250} alt=""/>
      <Image className="object-cover h-[190px] z-[4] w-[190px] rounded-full absolute top-[360px] left-[160px]"  src={p5} width={250} height={250} alt=""/>
      
      </div>
      </div>

     
    
    </div>
  );
};

export default Landing;
