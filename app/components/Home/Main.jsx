import React from 'react';
import ConnectWalletButton from './ConnectWallet';
import KnowMoreButton from './KnowMoreButton';


function Main() {
  return (
    <div className='h-screen w-screen'>
      <div className="navbar w-[96%] bg-base-300 fixed z-20 text-black rounded-2xl m-[2%]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Borrow</a></li>
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
            <li><a>Borrow</a></li>
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
      <div className='h-full w-full fixed top-0 z-0 flex bg-white text-black'>

        <div className='flex flex-col justify-center items-center gap-9'>
          <div className='flex flex-col justify-center items-center ml-[5vw]'>

            <div>
              <span className='text-[5vw]'>FlexiLoans: Redefining Borrowing with  </span>
            </div>
            <div>
              <h1 className='text-[4vw]'>Blockchain Speed and Security</h1>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center ml-[9vh]'>

            <div>
              <span className='text-[2vw]'>Fast, secure borrowing via blockchain, tailored terms,  </span>
            </div>
            <div>
              <h1 className='text-[2vw]'> no intermediaries. Revolutionizing lending.</h1>
            </div>
          </div>
          <div className='flex flex-wrap gap-12'>
            <div>
              <a
                href="#_"
                className="inline-block px-5 py-2 mx-auto text-white bg-blue-600 rounded-full hover:bg-blue-700 md:mx-0"
              >
                Get Started
              </a>
            </div>
            <div>
              <a
                href="#_"
                className="inline-block px-5 py-2 mx-auto text-black bg-white rounded-full hover:bg-slate-300 md:mx-0"
              >
                Learn More
              </a>

            </div>


          </div>
        </div>


      </div>
      <div className='bg-black h-full w-full relative z-10 top-full rounded-[70px]'>
        <div className='flex flex-col justify-center items-center text-white'>
          <div className='flex  text-xl rounded-full border justify-center items-center h-[50px] w-[50px] border-white mt-20'> <span className='text-2xl text-blue-400'>1</span> </div>
          <div> 
          <h1 className='text-[4vw]'>Easy Login</h1>
          </div>
          <div>
          <h1 className='text-[2vw]'>"Seamless login: quick, secure access."</h1>
          </div>
          <div className='flex flex-row  border rounded-3xl w-4/5 p-10 mt-10 bg-gradient-to-br from-black to-blue-900'>
            <div className='flex flex-col w-1/2 gap-6 items-center justify-center'>
                <div>
                <h1 className='text-[3vw] font-semibold'>Easily connect with wallet</h1>
                </div>
                <div className='flex flex-wrap'> 
                <h1 className='text-[1vw] text-wrap font-medium'>"Streamline wallet connection: Effortlessly link your wallet to access funds securely and conveniently, enabling seamless transactions with just a few clicks for hassle-free financial management and transactions on our platform."</h1>
                </div>
                <div>
                  <KnowMoreButton props='Learn More about Metamask'/>
                </div>
            </div>
            <div className='w-1/2 flex justify-center items-center'>
              <img src='/Metamask.png' className='h-[50vh] w-auto' />
            </div>
          </div>
        </div>




      </div>
    </div>
  );
}

export default Main;