import React from 'react';
import Footer from "../components/Home/Footer"
import Navbar from "../components/Home/Navbar"

export default function KYCPage(){
    return(
        <div className="flex flex-col h-screen w-screen">
            <div>
             <Navbar />
            </div>
            <div className="bg-white text-black h-3/4 w-autom-12 relative p-[10%] justify-center flex flex-col">
                {/* <h1 className='text-[6vw] font-semibold text-red-600'>Coming soon....</h1> */}
                <h1 className='text-[4vw] font-semibold text-red-600'>OOPS!☹️ , UIDAI not responding...</h1>
                <h1 className='text-[3vw] font-semibold text-red-600'>Try again after some time..</h1>
            </div>
            <div>
                <Footer />
            </div>
        </div>

    )
}