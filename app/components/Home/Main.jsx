import React from 'react';
import StepsCard from './StepsCard';
import Footer from './Footer';
import Navbar from './Navbar';
import PaymentDetails from './payment';
import Link from 'next/link';


function Main() {
  return (
    <div className='h-screen w-screen'>
     <Navbar />
      <div className='h-full w-full fixed top-0 z-0 flex bg-white bg-gradient-to-b from-[#FFFFFF] to-[#8863ee] text-black'>

        <div className='flex flex-col justify-center items-center gap-9 ml-[9vw]'>
          <div className='flex flex-col justify-center items-center ml-[6vw]'>

            <div>
              <span className='text-[5vw]'>Redefining Borrowing with  </span>
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
              <Link
                href="/#black"
                className="inline-block px-5 py-2 mx-auto text-white bg-blue-600 rounded-full hover:bg-blue-700 md:mx-0"
              >
                Get Started
              </Link>
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
      <div id="black" className='bg-black h-300vh w-full relative  z-10 top-full rounded-t-[70px] p-12 flex flex-col'>
        <StepsCard number='1' title='Easy Login' description='"Seamless login: quick, secure access."' image='/Metamask.png' heading="Easily connect with wallet" desc="Streamline wallet connection: Effortlessly link your wallet to access funds securely and conveniently, enabling seamless transactions with just a few clicks for hassle-free financial management and transactions on our platform." button="Learn More about Metamask" css="flex-row" bcolor="white" route="https://docs.metamask.io/" />
        <StepsCard number='2' title='Instant Kyc' description='"Instant KYC: Fast, secure verification for seamless onboarding."' image='https://appinventiv.com/wp-content/uploads/2021/03/KYC-with-blockchain-02.jpg' heading="Verify yourself through Adhar" desc="Easily verify your identity through Aadhar for seamless onboarding. Our platform offers instant Aadhar-based KYC verification, ensuring quick and secure authentication. Experience hassle-free verification and gain access to our services swiftly." button="Do your kyc Now!" route="/kyc" css="flex-row-reverse" bcolor="white" />



      </div>
      <div className='bg-white h-300vh w-full relative z-15 top-full rounded-t-[70px] p-12 flex flex-col text-blue-400'>
        <StepsCard number='3' title='Submit Collateral with Ease' description='"Effortlessly submit collateral and assess its value with our simplified process"' image='https://media.licdn.com/dms/image/D5612AQFnLOugxKb5ig/article-cover_image-shrink_720_1280/0/1690354958352?e=2147483647&v=beta&t=b_UEz3wwdaCmuV0PZ309E5LHsob1p87m0Kp71QkBfuc' heading="Streamlined Collateral Submission & Evaluation" desc="Effortlessly submit collateral and assess its value with our simplified process. Our platform streamlines collateral submission and offers transparent evaluation, ensuring a smooth borrowing experience." button="Submit Collateral Now!" css="flex-row" bcolor="black" route="/collateralUpload" />
        <StepsCard number='4' title='Flexible Repayment' description='"Flexible Repayment: Tailored repayment options."' image='https://c8.alamy.com/comp/2ABNH9H/quick-and-easy-loan-fast-money-providence-icon-vector-illustration-easy-instant-credit-loan-payment-fast-money-icon-finance-color-symbol-for-web-a-2ABNH9H.jpg' heading="Repay your loans flexibly" desc="Enjoy flexible repayment options tailored to your needs. Our platform offers customizable repayment plans, enabling you to repay your loans conveniently. Experience hassle-free repayment and manage your finances effectively with FlexiLoans." button="Learn More about Repayment" css="flex-row-reverse" bcolor="black" route="/repayment" />
       </div> 
       <div className='w-full relative z-20 top-full '>
        <Footer />
       </div>
       
    </div>
  );
}

export default Main;