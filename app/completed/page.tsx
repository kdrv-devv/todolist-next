"use client";
import { IoListSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Completed = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
      setIsClient(true);
    }, []);
    
    if (!isClient) return null; // Server tarafda hech narsa render qilinmaydi
  //   localStorage bilan ishlash start


  

  return (
    <section className="todo-list">
      <header className="todo-header sticky top-0  bg-[#9395d3]">
        <div className="container flex items-center gap-[37px]  py-5">
          <button
            onClick={() => router.push("/")}
            className="font-[600] text-[30px] text-[#fff]"
          >
            <FaArrowLeftLong />
          </button>
          <h2 className="font-[600] text-[25px] text-[#fff]">Completed Task</h2>
        </div>
      </header>

      <section className="main-container bg-[#d6d7ef] min-h-[525px]">
        <div className="container py-[10px] flex flex-col gap-[20px]">
    

          {Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className="todo-item flex items-center justify-center h-[82px] bg-[#fff] w-full rounded-[15px] p-[20px]"
            >
              <div className="todo-task flex flex-col ">
                <h3 className="text-[#9395d3] font-[600] text-[13px]">
                  TODO TITLE
                </h3>
                <h4 className="font-[400] text-[10px]">TODO SUB TITLE</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer sticky bottom-0 bg-[#ffff]">
        <div className="container flex items-center justify-center py-[10px]">
          <button
            onClick={() => router.push("/")}
            className="flex flex-col items-center w-[50px] text-[#9395D3] "
          >
            <IoListSharp />
            <h5>All</h5>
          </button>
        </div>
      </footer>
    </section>
  );
};

export default Completed;