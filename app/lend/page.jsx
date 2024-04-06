"use client";
import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Navbar";
import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Lend() {

    const { account ,amount} = useContext(UserContext);

    return (
        <div className="flex flex-col h-screen w-screen">
            <div>
                <Navbar />
            </div>
            <div className="bg-white text-black h-3/4 w-autom-12 relative p-[10%] justify-center flex flex-col">
                <div className="flex justify-center">
                <h1 className='text-[4vw]'>Welcome to Flexiloan!</h1>
                </div>
                <div>
                <div className="flex justify-around w-1/2 pt-12">
                    <div className="flex flex-col gap-6">
                        <div><p className="font-semibold">Wallet Address: </p></div>
                        <div><p className="font-semibold">Balance</p></div>
                        <div><p className="font-semibold">Interest Rate:</p></div>
                        <div><p className="font-semibold">Max Period of time:</p></div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div><p className="">{account} </p></div>
                        <div><p className="">{amount?.slice(0,5)} ETH</p></div>
                        <div><input type="text" placeholder="Enter ROI here" class="input input-bordered input-sm w-full max-w-xs" /></div>
                        <div><input type="text" placeholder="Enter max years here.." class="input input-bordered input-sm w-full max-w-xs" /></div>
                       
                    </div>
                </div>
                <div className="flex justify-center mt-12">
                    <label htmlFor="my-drawer" className="btn btn-primary btn-sm drawer-button">Save Details</label>
                </div>
                </div>
            </div>
            <div className="h-1/4">
                <Footer />
            </div>
            
        </div>
    )
}