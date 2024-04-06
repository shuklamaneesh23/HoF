import Footer from "../components/Home/Footer"
import Navbar from "../components/Home/Navbar"
export default function Borrow() {
    return (
        <div className="flex flex-col h-screen w-screen">
            <div>
                <Navbar />
            </div>
            <div className="bg-white text-black h-3/4 w-autom-12 relative p-[10%] justify-center flex flex-col">

           <div className="flex justify-center">
           <h1 className='text-[4vw]'>Welcome to Flexiloan!</h1>
           </div>

                <div className="flex flex-wrap mt-12">
                    <div className="form-control">
                        <input type="text" placeholder="Enter the loan ampunt you want to avail" className="input input-bordered w-24 md:w-[40vw]" />
                    </div>
                    <div>
                        <button className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>

                </div>
                <div className="flex justify-start pt-10">
                    <h1 className="font-mono text-[2vw] ">Available loans:</h1>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

