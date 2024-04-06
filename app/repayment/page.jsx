import Navbar from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';
import PaymentDetails from '../components/Home/payment';
export default function Repayment() {
    return (
        <div className="flex flex-col h-screen w-screen">
            <div>
                <Navbar />
            </div>
            <div className="bg-white text-black h-3/4 w-autom-12 relative p-[10%] justify-center items-center flex flex-col">
                <div className="card w-96 bg-gradient-to-b from-blue-500 to-purple-700 text-primary-content">
                    <div className="card-body gap-12">
                        <h2 className="card-title">Repayment</h2>
                        <p>Enter your loan_ID here.</p>
                        <div className="card-actions justify-center">
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input type="text" className="grow" placeholder="load_id" />
                            </label>                        </div>
                        <div className="flex justify-center">
                            <button className="btn btn-active btn-secondary">Get loan Details</button>
                        </div>
                    </div>
                </div>

            </div>
          
            <div>
                <Footer />
            </div>
        </div>
    )
};