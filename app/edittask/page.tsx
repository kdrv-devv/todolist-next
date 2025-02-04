"use client"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";

const EditTask = () => {
    const router = useRouter()
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
      }, []);
    
      if (!isClient) return null; // Server tarafda hech narsa render qilinmaydi

      




  return (
       <section className="add-page">
         <header className="todo-header sticky top-0  bg-[#9395d3]">
           <div className="container flex items-center gap-[37px]  py-5">
             <button onClick={() => router.push("/")} className="font-[600] text-[30px] text-[#fff]">
               <FaArrowLeftLong />
             </button>
             <h2 className="font-[600] text-[25px] text-[#fff]">Edit Task</h2>
           </div>
         </header>
   
         {/* start add task main section */}
   
         <section className="add-task-container">
           <div className="container pt-[30px] min-h-[500px]">
             <form onSubmit={(e)=> {e.preventDefault()}} className="flex flex-col gap-[50px]" action="">
               <div className="flex flex-col gap-[30px] text-[#8b8787] font-[400] text-[16px]">
                 <input className="outline-none border-b-2 pb-[10px] border-[#8B8787] " type="text" placeholder="Title" />
                 <input className="outline-none border-b-2 pb-[10px] border-[#8B8787]" type="text" placeholder="Detail" />
               </div>
                <div className='flex items-center justify-between'>
               <button className="update shadow-md font-[400] text-[15px] text-[#fff] bg-[#9395d3] transition-all active:bg-[#5b5d91] rounded-[15px] w-[47%] h-[65px]">Update</button>
               <button onClick={()=> router.push("/")} className="cancel  shadow-md font-[400] text-[15px] text-[#fff] bg-[#9395d3] transition-all active:bg-[#5b5d91] rounded-[15px] w-[47%] h-[65px]">Cancel</button>
                </div>
             </form>
           </div>
         </section>
       </section>
  )
}

export default EditTask