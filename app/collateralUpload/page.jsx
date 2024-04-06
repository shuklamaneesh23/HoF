import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Navbar";


export default function CollateralUpload() {
    return (
        <div className="flex flex-col h-screen w-screen">
            <div>
                <Navbar />
            </div>
            <div className="bg-white text-black h-3/4 w-autom-12 relative p-[10%] justify-center items-center flex flex-col">
                <div className="card w-96 bg-gradient-to-b from-blue-500 to-purple-700 text-primary-content">
                    <div className="card-body gap-12">
                        <h2 className="card-title">Upload Collateral here</h2>
                        <p>Get your documents here and let your collateral value get updated so that you can avail loan in no time.</p>
                        <div className="card-actions justify-end">
                        <input type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
                        </div>
                        <div className="flex justify-center">
                        <button className="btn btn-active btn-secondary">Upload</button>
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
