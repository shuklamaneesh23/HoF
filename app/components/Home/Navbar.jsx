import Link from "next/link"
import ConnectWalletButton from "./ConnectWallet"
export default function Navbar() {
  return (
    <div className="navbar w-[96%] bg-base-300 fixed z-20 text-black rounded-2xl m-[2%]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <Link href="/borrow">
              <li>Borrow</li>
            </Link>
            <li>
              <a>Learn</a>
              <ul className="p-2">
                <Link href="/#black"><li>How to use?</li></Link>
                <Link href=""><li>Features</li></Link>
              </ul>
            </li>
            <Link href="/lend">
              <li>Lend</li>
            </Link>
          </ul>
        </div>
        <Link className="btn btn-ghost text-2xl" href="/">FlexiLoans</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/borrow">Borrow</Link></li>
          <li>
            <details>
              <summary>Learn</summary>
              <ul className="p-2">
                <li><Link href="/#black">How to use?</Link></li>
                <li><Link href="">More features</Link ></li>
              </ul>
            </details>
          </li>
          <li><Link href="/lend">Lend</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <ConnectWalletButton />
      </div>
      <div className="ml-4"> 
      <Link href="/notifications">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        </Link>
      </div>
    </div>
  )
}