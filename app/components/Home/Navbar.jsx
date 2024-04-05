import Link from "next/link"
import ConnectWalletButton from "./ConnectWallet"
export default function Navbar(){
    return(
        <div className="navbar w-[96%] bg-base-300 fixed z-20 text-black rounded-2xl m-[2%]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             <Link  href="/borrow">
               <li>Borrow</li>
             </Link>
              <li>
                <a>Learn</a>
                <ul className="p-2">
                  <li><a>How to use?</a></li>
                  <li><a>Features</a></li>
                </ul>
              </li>
              <li><a>Lend</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl">FlexiLoans</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a href="/borrow">Borrow</a></li>
            <li>
              <details>
                <summary>Learn</summary>
                <ul className="p-2">
                  <li><a>How to use?</a></li>
                  <li><a>More features</a></li>
                </ul>
              </details>
            </li>
            <li><a>Lend</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <ConnectWalletButton />
        </div>
      </div>
    )
}