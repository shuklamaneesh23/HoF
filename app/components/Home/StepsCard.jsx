import KnowMoreButton from "./KnowMoreButton";
export default function StepsCard({number, title, description,heading,desc,button, image,css,bcolor}) {
    return (
        <div className='flex flex-col justify-center items-center'>
          <div className={`flex  text-xl rounded-full border justify-center items-center h-[50px] w-[50px] border-${bcolor} mt-20`}> <span className='text-2xl text-blue-400'>{number}</span> </div>
          <div> 
          <h1 className='text-[4vw]'>{title}</h1>
          </div>
          <div>
          <h1 className='text-[2vw]'>{description}</h1>
          </div>
          <div className={`flex ${css}  border rounded-3xl w-4/5 p-10 mt-10 bg-gradient-to-br from-black to-blue-900`}>
            <div className='flex flex-col w-1/2 gap-6 items-center justify-center'>
                <div>
                <h1 className='text-[3vw] font-semibold'>{heading}</h1>
                </div>
                <div className='flex flex-wrap'> 
                <h1 className='text-[1vw] text-wrap font-medium'>{desc}</h1>
                </div>
                <div>
                  <KnowMoreButton props={button}/>
                </div>
            </div>
            <div className='w-1/2 flex justify-center items-center'>
              <img src={image} className='h-[50vh] w-auto' />
            </div>
          </div>
        </div>
    )};