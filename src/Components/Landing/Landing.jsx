import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import styled from "styled-components";
import one from "../../assets/1.svg";
import two from "../../assets/2.svg";
import three from "../../assets/3.svg";
import four from "../../assets/4.svg";
import design from "../../assets/yoga-image.png";
import lady from "../../assets/yoga lady.png";
import five from "../../assets/five.svg";
import six from "../../assets/six.svg";
import seven from "../../assets/seven.svg";
import eight from "../../assets/eight.svg";
import nine from "../../assets/nine.svg";
import ten from "../../assets/ten.svg";
import eleven from "../../assets/eleven.png";
import twelve from "../../assets/twelve.png";
import medicine from "../../assets/medicine.png";
import star from "../../assets/star.svg";

const StyledButton = styled(Button)`
  && {
    background-color: #4caf50; /* Set your desired background color */
    color: white; /* Set text color */
  }
`;

const Landing = () => {
  return (
    <>
      {/* landing page */}

      <div className="flex justify-center relative items-left flex-col w-9/12 ml-20 max-md:ml-5 w-11/12 ">
        <h3 className="text-2xl my-3">Namaste, Welcome to Amrutam</h3>
        <h1 className="bg-[url('../../assets/bg.png')] bg-cover bg-center text-5xl font-bold my-3 max-md:text-4xl:font-normal max-sm:text-3xl ">
          Step into Holistic Healing with Ayurveda <br className="my-3" />
          Book Consultation With certified Experts
        </h1>
        <h2 className="text-1xl my-3">
          Dive into the world of Ayurveda and experience personalized health
          solutions and
          <br></br> holistic guidance from the trusted Ayurvedic doctors
          anytime, anywhere.
        </h2>
        <Stack direction="row" spacing={2} className="my-3">
          <StyledButton variant="contained">Book a Appointment</StyledButton>
        </Stack>
      </div>

      {/* flour pillor for safety */}

      <div className="flex justify-center items-center w-full h-30 mt-20 flex-wrap bg-yellow-50">
        <div className="relative w-80 flex border-x-2">
          <img src={one} className="object-cover" alt="Lady" />
          <p className="flex items-center justify-center">
            Convenient Online & In Clinic Consultations
          </p>
        </div>
        <div className="relative w-80 flex border-r-2 ">
          <img src={two} className="object-cover" alt="Lady" />
          <p className="flex items-center justify-center">
            Safe and effective treatment
          </p>
        </div>
        <div className="relative w-80  flex border-r-2 ">
          <img src={three} className="object-cover" alt="Lady" />
          <p className="flex items-center justify-center">
            Experienced Ayurvedic Practitioners
          </p>
        </div>
        <div className="relative w-80  flex border-r-2">
          <img src={four} className="object-cover" alt="Lady" />
          <p className="flex items-center justify-center">
            Personalized Treatment Plans & Guidance
          </p>
        </div>
      </div>

      {/* Ayurveda magic page */}

      <div className="flex justify-center items-center w-screen flex-col relative">
        <p className="text-4xl mt-10 text-green-500 w-4/5 text-center">
          Discover Ayurveda’s magic with us{" "}
        </p>
        <p className="text-2xl mt-10 text-black w-3/5 text-center max-md:text-base max-md:w-4/5">
          Ayurvedic treatment aims to balance your body and mind, bringing
          harmony and vitality. It's like a journey to better health using
          ancient wisdom, a totally effective approach for a better life.{" "}
        </p>
        {/* <div className="flex  mt-12">
          <div>
            <div className="w-96 flex ml-12 my-8">
              <div>
                <h1 className="text-2xl text-right font-medium">
                  Personalized Wellness
                </h1>
                <p className="text-right">
                  Get treatments made just for you based on your individual
                  doshas ( body type)
                </p>
              </div>
              <img
                src={five}
                className="h-20 w-20 bg-blue-100 rounded-full p-3"
              ></img>
            </div>
            <div className="w-96 flex mr-12 my-8">
              <div>
                <h1 className="text-2xl text-right font-medium">
                  Focus on prevention
                </h1>
                <p className="text-right">
                  Stop problems even before they start.
                </p>
              </div>
              <img
                src={six}
                className="h-20 w-20 bg-green-50 rounded-full p-3"
              ></img>
            </div>
            <div className="w-96 flex ml-12 my-8">
              <div>
                <h1 className="text-2xl text-right font-medium">
                  Mind-Body Connection
                </h1>
                <p className="text-right">
                  Keep your mind and body in sync for a happy life.
                </p>
              </div>
              <img
                src={seven}
                className="h-20 w-20 bg-red-50 rounded-full p-3"
              ></img>
            </div>
          </div>
          <div>
            <img src={design} className="h-80 w-80 relative top-10"></img>
            <img src={lady} className="h-80 w-80 absolute bottom-0"></img>
          </div>
          <div>
            <div className="w-96 flex my-8">
              <img
                src={eight}
                className="h-20 w-20 bg-purple-100 rounded-full p-3"
              ></img>
              <div>
                <h1 className="text-2xl text-left font-medium">
                  Holistic Healing
                </h1>
                <p className="text-left">
                  Fix the root problem for long-lasting health.
                </p>
              </div>
            </div>
            <div className="w-96 flex ml-12 my-8">
              <img
                src={nine}
                className="h-20 w-20 bg-yellow-50 rounded-full p-3"
              ></img>
              <div>
                <h1 className="text-2xl text-left font-medium">
                  Natural Remedies
                </h1>
                <p className="text-left">
                  Using herbs and natural therapies for healing.
                </p>
              </div>
            </div>
            <div className="w-96 flex my-8">
              <img
                src={ten}
                className="h-20 w-20 bg-green-50 rounded-full p-3"
              ></img>
              <div>
                <h1 className="text-2xl text-left font-medium">
                  Personalized Wellness
                </h1>
                <p className="text-left">
                  Stay strong and healthy for life, not just for today.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Consultation parts */}

      <div className="flex justify-center items-center w-screen bg-yellow-50 flex-col pb-10">
        <h1 className="w-4/5 mt-10 text-4xl text-center text-green-900">
          What sets Ayurvedic consultations apart?
        </h1>
        <div className="flex justify-center items-center flex-wrap w-11/12 mt-10">
          <div className="flex justify-center items-center flex-col h-56 w-1/3 max-lg:w-96 p-5 bg-white rounded-xl border-t-4 border-green-900 m-2">
            <h1 className="text-3xl text-center text-green-900">
              स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।"
            </h1>
            <p className="text-1xl text-center text-green-900 mt-5">
              [ Meaning: The Goal of Ayurveda is to maintain the health of a
              healthy person and to cure the disease of a diseased person. ]
            </p>
          </div>
          <div className="flex justify-center items-center flex-col w-2/6 m-2 max-lg:w-96">
            <img src={eleven} className=" h-56 w-full"></img>
          </div>
          <div className="flex justify-center items-center flex-col m-2 h-56 w-96 max-lg:w-96 p-5 bg-white rounded-xl border-t-4 border-green-900">
            <h1 className="text-3xl text-center text-green-900">
              Precise Diagnosis
            </h1>
            <p className="text-1xl text-center text-green-900  mt-5">
              Ayurveda's core principles revolve around Vata, Pitta, and Kapha
              doshas, guiding you with precise diagnosis and treatment.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col ml-2 m-2 h-56 w-1/4 p-5 max-lg:w-96 bg-white rounded-xl border-t-4 border-green-900">
            <h1 className="text-3xl text-center text-green-900">
              Precise Diagnosis
            </h1>
            <p className="text-1xl text-center text-green-900 mt-5">
              Ayurveda's core principles revolve around Vata, Pitta, and Kapha
              doshas, guiding you with precise diagnosis and treatment.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col w-1/5 m-2 max-lg:w-96">
            <img src={medicine} className="h-56 w-full"></img>
          </div>
          <div className="flex justify-center items-center flex-col ml-2 m-2 h-56 w-1/4 p-5 bg-white rounded-xl border-t-4 border-green-900 max-lg:w-96">
            <h1 className="text-3xl text-center text-green-900">
              Individual Treatment
            </h1>
            <p className="text-1xl text-center text-green-900 mt-5">
              all Treatments are personalized based on a person's unique
              constitution and health concerns.
            </p>
          </div>
          <div className="flex justify-center m-2 items-center flex-col w-1/5 max-lg:w-96">
            <img src={twelve} className="h-56 w-full"></img>
          </div>
        </div>
      </div>

      {/* book Consultation page */}

      <div
        className="h-screen w-screen flex justify-center items-center flex-col"
        style={{
          backgroundImage: `url(" + eleven + ")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <h1 className="text-6xl text-center text-green-900">
          Ready to restore harmony in your mind, body and spirit?
        </h1>
        <Stack direction="row" spacing={2} className="my-3">
          <StyledButton variant="contained">Book a consultation</StyledButton>
        </Stack>
      </div>

      {/* Ayurvedic approach */}

      <div className="min-w-screen flex justify-center items-center flex-col">
        <h1 className="text-6xl text-center text-green-900 mb-10 font-bold">
          Our ayurvedic approach
        </h1>
        <p className="mb-20 text-2xl w-4/5  text-center">
          At Amrutam we follow a unique and personalized approach to healing.
          Our expert practitioners begin each treatment process by conducting a
          thorough analysis of the patient’s body type, medical history, and
          current health conditions.
        </p>
        <div className=" w-3/4 flex justify-center items-center flex-row flex-wrap">
          <div className=" w-60 h-80 flex justify-center items-center flex-col bg-yellow-50  mr-5 p-5 text-center rounded-2xl border-t-8 border-emerald-900 mb-5">
            <div className="h-16 w-16 rounded-full bg-emerald-900 mb-5 text-4xl flex justify-center items-center text-white font-bold">
              1
            </div>
            <h1 className="text-2xl text-center text-green-900 mb-5 font-bold">
              Make Appointment
            </h1>
            <p className="mb-5">
              You must make an appointment in advance, to choose the service and
              date.
            </p>
          </div>
          <div className=" w-60 h-80 flex justify-center items-center flex-col bg-yellow-50 mr-5 p-5 text-center rounded-2xl border-t-8 border-emerald-900 mb-5">
            <div className="h-16 w-16 rounded-full bg-emerald-900 mb-5 text-4xl flex justify-center items-center text-white font-bold">
              2
            </div>
            <h1 className="text-2xl text-center text-green-900 mb-5 font-bold">
              Consultations
            </h1>
            <p className="mb-5">
              The next stage involves a thorough consultation with an Ayurveda
              personalized approach to practitioner.
            </p>
          </div>
          <div className="w-60 h-80 flex justify-center items-center flex-col bg-yellow-50 mr-5 p-5 text-center rounded-2xl border-t-8 border-emerald-900 mb-5">
            <div className="h-16 w-16 rounded-full bg-emerald-900 mb-5 text-4xl flex justify-center items-center text-white font-bold">
              3
            </div>
            <h1 className="text-2xl text-center text-green-900 mb-5 font-bold">
              Treatment Planning
            </h1>
            <p className="mb-5">
              The Ayurvedic practitioner creates a personalized treatment plan
              for you
            </p>
          </div>
          <div className=" w-60 h-80 flex justify-center items-center flex-col bg-yellow-50 p-5 text-center rounded-2xl border-t-8 border-emerald-900 mb-5">
            <div className="h-16 w-16 rounded-full bg-emerald-900 text-center mb-5 text-4xl flex justify-center items-center text-white font-bold">
              4
            </div>
            <h1 className="text-2xl text-center text-green-900 mb-5 font-bold">
              Maintenance
            </h1>
            <p className="mb-5">
              These visits allow for assessment of progress, adjustments to the
              treatment.
            </p>
          </div>
        </div>
      </div>

      {/* {  review} */}

    
      
    </>
  );
};

export default Landing;
