import React from 'react';
import ConnectWalletButton from './ConnectWallet';
import KnowMoreButton from './KnowMoreButton';
import StepsCard from './StepsCard';


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
      <div className='bg-black h-300vh w-full relative z-10 top-full rounded-t-[70px] p-12 flex flex-col'>
        <StepsCard number='1' title='Easy Login' description='"Seamless login: quick, secure access."' image='/Metamask.png' heading="Easily connect with wallet" desc="Streamline wallet connection: Effortlessly link your wallet to access funds securely and conveniently, enabling seamless transactions with just a few clicks for hassle-free financial management and transactions on our platform." button="Learn More about Metamask" css="flex-row" bcolor="white" />
        <StepsCard number='2' title='Instant Kyc' description='"Instant KYC: Fast, secure verification for seamless onboarding."' image='https://appinventiv.com/wp-content/uploads/2021/03/KYC-with-blockchain-02.jpg' heading="Verify yourself through Adhar" desc="Easily verify your identity through Aadhar for seamless onboarding. Our platform offers instant Aadhar-based KYC verification, ensuring quick and secure authentication. Experience hassle-free verification and gain access to our services swiftly." button="Do your kyc Now!" css="flex-row-reverse" bcolor="white" />



      </div>
      <div className='bg-white h-300vh w-full relative z-13 top-full rounded-t-[70px] p-12 flex flex-col text-blue-400'>
        <StepsCard number='3' title='Instant Loans' description='"Instant Loans: Quick, easy access to funds."' image='https://www.moneycontrol.com/static-mcnews/2021/06/Loan-770x433.jpg' heading="Get Instant Loans" desc="Access instant loans quickly and easily on our platform. Our streamlined process ensures hassle-free loan disbursal, enabling you to secure funds instantly for your financial needs. Experience quick and convenient borrowing with FlexiLoans." button="Learn More about Loans" css="flex-row" bcolor="black" />
        <StepsCard number='4' title='Flexible Repayment' description='"Flexible Repayment: Tailored repayment options."' image='https://www.moneycontrol.com/static-mcnews/2021/06/Loan-770x433.jpg' heading="Repay your loans flexibly" desc="Enjoy flexible repayment options tailored to your needs. Our platform offers customizable repayment plans, enabling you to repay your loans conveniently. Experience hassle-free repayment and manage your finances effectively with FlexiLoans." button="Learn More about Repayment" css="flex-row-reverse" bcolor="black" />
       </div> 
    </div>
  );
}

export default Main;