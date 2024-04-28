import React from 'react'
import playstore from '../assets/playstore.png'
import applestore from '../assets/applestore.png'
import contact from '../assets/contact.png'

const Homeapp = () => {
  return (
    <>     

      <div class="grid-container">
        <div class="div1">
          <h1 className=" text-green-500">Amrutam Home App</h1>
          <p className="mb-5">
            The Amrutam Home App is your one-stop app for all things Ayurveda!
            Apart from mimicking the significant characteristics of our website,
            this app offers a wide range of additional features.
          </p>
        </div>
        <div class="div2">
          {" "}
          <div className=" flex justify-center items-center max-md:w-full">
            <img src={contact}></img>
          </div>
        </div>
        <div class="div3">
          {" "}
          <h3 className="mb-5">
            Get a diet & lifestyle consultation with ayurvedic experts across
            the globe{" "}
          </h3>
          <h2 className="mb-5">Get the App now</h2>
          <div className="flex justify-center items-center flex-row mb-5 max-sm:flex-col">
            <img src={playstore}></img>
            <img src={applestore}></img>
          </div>
        </div>
      </div>

    </>
  );
}

export default Homeapp