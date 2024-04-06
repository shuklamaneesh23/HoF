"use client";
import  abiData from "../contract/Lend"
import Footer from "../components/Home/Footer"
import Navbar from "../components/Home/Navbar"
import { ethers } from "ethers";
import { useState,useEffect,useContext, use, memo } from "react";
import UserContext from "../context/UserContext";
import Table from "../components/Home/Table";
  
export default function Borrow() {

    const [state,setState] = useState({
        provider: null,
        signer: null,
        contract: null,
    });

    useEffect(() => {
        const connectWallet = async () => {
            const lendAddress ="0x360AD6604f3306f4fE0b2856dA343aC7dD6Ac518";
            const contractABI = abiData.abi;
        try{
            const {ethereum} = window;
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(lendAddress, contractABI, signer);
            setState({provider, signer, contract});
        } catch (error){
            console.log(error);
        }
        }   
        connectWallet();
    }
    , []);

    
    const [memos,setMemos] = useState(null);
    const [tableData,setTableData] = useState([]);
    const {contract} = state;
    const [amount,setAmount] = useState(null);

    const memoMessage=async() => {
        const memo = await contract?.getMemos();
        console.log(memo,"memo")
        setMemos(memo);
        let data=[];
        for(let i=0;i<memo?.length;i++){
            if((amount)<=(memo[i] && (memo[i]["amount"].toNumber())/1000)){
                let tempObj = {
                    address: memo[i] && memo[i]["from"].toString(),
                    amount: memo[i] && (memo[i]["amount"].toNumber())/1000,
                    roi: memo[i] && memo[i]["ROI"].toNumber(),
                    max_time: memo[i] && memo[i]["max_time"].toNumber(),
                }
              data.push(tempObj)
            }
        }
        console.log(data,"data")
    setTableData(data);
    }
    useEffect(() => {
        contract && memoMessage();

    },[contract]);
      const [flag,setFlag] = useState(false)
      const handleSearch=()=>{
        setFlag(true);  
        memoMessage();
      }
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
                        <input type="text" value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder="Enter the loan ampunt you want to avail" className="input input-bordered w-24 md:w-[40vw]" />
                    </div>
                    <div>
                        <button className="btn btn-ghost btn-circle" onClick={handleSearch}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>

                </div>
                <div className="flex justify-start pt-10">
                    <h1 className="font-mono text-[2vw] ">Available loans:</h1>
                </div>
                <div>
                {flag && <Table data={tableData} />}
            </div>
            </div>
            
            <div>
                <Footer />
            </div>
            
        </div>
    )
}

