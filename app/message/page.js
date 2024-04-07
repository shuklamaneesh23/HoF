import Footer from "../components/Home/Footer"
import Navbar from "../components/Home/Navbar"
import Message from "../components/Notifications/Message"

export default function Unread() {
    return (
        <div className="flex flex-col h-screen w-screen">
        <div>
            <Navbar />
        </div>
        <div className="bg-white text-black h-3/4 w-autom-12 relative p-[10%] justify-center flex flex-col">

            <Message />
        </div>
        <div>
            <Footer />
        </div>
    </div>
    )
};