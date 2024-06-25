import React from "react"

import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/aboutus1.png"
import BannerImage2 from "../assets/Images/aboutus2.png"
import BannerImage3 from "../assets/Images/aboutus3.png"
import Footer from "../components/Common/Footer"
import ReviewSlider from "../components/Common/ReviewSlider"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"

const About = () => {
  return (
    <div className="bg-HomeBackground">
      <section className="bg-HomeBackground">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            We Provide Best
            <HighlightText text={"Education "} />
            For You
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
            Established in the year 1998, with an intake of 40, The department of ECE now has grown up to an intake of 120, over the years.
            </p>
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
            The Electronics & Communication Engineering Department is reputed for its knowledgeable, hardworking and caring faculty members as well as enthusiastic, intelligent and disciplined students. Electronics & Communication Engineering Department is well known for presenting consistently good academic results and excelling in co- curricular as well as extra-curricular activities.
            </p>
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
            The department regularly organises the expert/guest lectures to cover content beyond curriculum and organises the activities for student personality and professional development.
            </p>
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
            The department’s Pride IE(I) Students’ Chapter every week organises an Online Aptitude competition along with an annual Model Making Competition named as Electronics Innovation. Under this chapter the senior students keeps on guiding juniors to success.
            </p>
            
            
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <img src={BannerImage1} alt="" />
            <img src={BannerImage2} alt="" />
            <img src={BannerImage3} alt="" />
          </div>
        </div>
      </section>

      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
              HOD’s Message
              </h1>
              <p className="text-base font-medium text-lime-5 lg:w-[95%]">
              DEPARTMENT OF ELECTRONICS & COMMUNICATION ENGINEERING
              </p>
              <p className="text-4xl font-medium text-black lg:w-[95%]">
              Dr. Chittajit Sarkar
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              B.Sc.(physics Hons.) ,Ramakrishna Mission Residential College, Narendrapur, University of Calcutta,
              <br/>B. Tech, Radio Physics and Electronics, University of Calcutta.
              <br/>M. Tech ,Radio Physics and Electronics, University of Calcutta.
              <br/>Ph.D. Radio Physics and Electronics, University of Calcutta.</p>
            </div>

            <div>
              <img
                src={FoundingStory}
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
          </div>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              Welcome to the department of Electronics and Communication Engineering, Asansol Engineering College. Our institution boasts a robust undergraduate program in Electronics & Communication Engineering, granting B. Tech degrees. Additionally, we provide opportunities for postgraduate studies through our M. Tech program. Each year, we admit 120 students into our B. Tech program and 13 students into the M. Tech program.
<br/><br/>Every child possesses innate genius, and if a child isn't grasping knowledge through conventional teaching methods, perhaps it's time we adapt our approach to match their unique learning style. With this principle in mind, we've developed our teaching methodology. Our objective is to offer an outstanding platform for aspiring hardware and software engineers, equipping them to meet the ever-evolving demands of the modern industry. Our department takes pride in its commitment to academic excellence, innovation, and fostering a dynamic learning environment. As the Head of the Department, I am honored to lead a community of dedicated faculty and enthusiastic students who share a passion for knowledge and growth. Here at Electronics and Communication Engineering , we strive to provide a comprehensive educational experience that combines rigorous academic programs with practical applications. Our faculty members are not only experts in their respective fields but also mentors who are deeply invested in students’ success. They are committed to nurturing students’ intellectual curiosity and helping them to achieve academic and career goals.
<br/><br/>Undergraduate students are actively encouraged to engage in a wide range of research initiatives through the Students Innovation Centre (SIC). The creation of an IEEE student chapter focused on Microwave Theory and Technology – Society further promotes and supports students in their pursuits within this field.
</p>
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              To aspire to become a department which can provide value-based quality education, foster research and innovation, and to groom the students to be globally competent.
              </p>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
              Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              &#9989;DM-1. To create an outcome based teaching learning process in order to increase the creativity and innovativeness of the students to face the challenging world.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              &#9989;DM-2. To motivate students and promote research and development among students, so that they can choose it as an optional career.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              &#9989;DM-3. To provide ethical and value based education by promoting activities addressing the societal needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponenet />
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-HomeBackground text-white">
        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Feedback from other students
        </h1>
        <ReviewSlider />
      </div>
      <Footer />
    </div>
  )
}

export default About
