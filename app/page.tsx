"use client";
import { FaPencil } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoListSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TaskType } from "./@types";
import noTaskimg from '../public/notask.png'
import Image from "next/image";
const Home = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [alltasks, setAllTasks] = useState([]);
  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      const existingTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      setAllTasks(existingTasks);
    }
  }, []);

  if (!isClient) return null; // Server tarafda hech narsa render qilinmaydi


  const editTask = (id:string)=>{
    router.push(`/edittask?id=${id}`)
  }

  const deleteTask =(id:string)=>{
    const existingTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const filteredTasks = existingTasks.filter((value:TaskType) => value.id !== id)
    setAllTasks(filteredTasks)
    localStorage.setItem("tasks" , JSON.stringify(filteredTasks))
  }

  // const editTask =(id:string)=>{
  //   useEffect(() => {
  //     setIsClient(true);
  //     if (typeof window !== "undefined") {
  //       const existingTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  //       const editedTask = existingTasks.filter((value:any) => value )
  //       setAllTasks(existingTasks);
  //     }
  //   }, []);

  // }





  return (
    <section className="todo-list">
      <header className="todo-header sticky top-0  bg-[#9395d3]">
        <div className="container flex items-center justify-between py-5">
          <h1 className="font-[600] text-[24px] text-[#fff]"> TODO APP</h1>
          <button className="w-[40px] h-[40px] bg-transparent text-[#fff] font-[500] border-2 rounded-[10px] text-[]">
            15
          </button>
        </div>
      </header>

      <section className="main-container bg-[#d6d7ef]">
        <div className="container py-[10px] flex flex-col gap-[20px] min-h-[calc(100vh-160px)]">
          {alltasks.length > 0 ? (
            alltasks.map((value: any) => (
              <div
                key={value.id}
                className="todo-item flex items-center justify-between h-[82px] bg-[#fff] w-full rounded-[15px] p-[20px]"
              >
                <div className="todo-task flex flex-col ">
                  <h3 className="text-[#9395d3] font-[600] text-[13px]">
                    {value.title}
                  </h3>
                  <h4 className="font-[400] text-[10px]">{value.descrip}</h4>
                </div>
                <div className="todo-actions flex items-center gap-[20px] text-[#B3B7EE]">
                  <button onClick={()=>editTask(value.id)}>
                    <FaPencil />
                  </button>
                  <button onClick={()=> deleteTask(value.id)}>
                    <FaRegTrashCan />
                  </button>
                  <button>
                    <FaRegCheckCircle />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className=" h-[400px] flex items-center justify-center ">
              <div className="flex flex-col gap-1 items-center">
                  <Image src={noTaskimg} width={130} height={130} alt=""/>
                  <p className="text-[18px] font-[600] text-[#4f5079]">Sizda tasklar mavjud emas</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <footer className="footer sticky bottom-0 bg-[#ffff]">
        <button
          onClick={() => router.push("/addtask")}
          className="w-[50px] h-[50px] absolute top-[-55px] right-[20px]  rounded-[100%] bg-[#9395d3] active:bg-[#515386] text-[#fff] flex items-center justify-center "
        >
          <FaPlus className="transition-transform duration-200 active:rotate-90" />
        </button>
        <div className="container flex items-center justify-around py-[10px]">
          <button className="flex flex-col items-center text-[#9395D3] ">
            <IoListSharp />
            <h5>All</h5>
          </button>
          <button
            onClick={() => router.push("/completed")}
            className="flex flex-col items-center text-[#9395D3]"
          >
            <FaCheck />
            <h5>Completed</h5>
          </button>
        </div>
      </footer>
    </section>
  );
};

export default Home;
