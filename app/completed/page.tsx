"use client";
import { IoListSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import notask from "./image/notask.png";
import Image from "next/image";

interface TaskType {
  createdAt: string;
  descrip: string;
  id: string;
  title: string;
  completed?: boolean;
}

const Completed = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setIsClient(true);
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      console.log(tasks);
      let completedTask = JSON.parse(tasks).filter(
        (value: TaskType) => value.completed == true
      );
      setData(completedTask);
    }
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
          {data.length > 0 ? (
            data.map((value: TaskType) => (
              <div
                key={value.id}
                className="todo-item flex items-center justify-center h-[82px] bg-[#fff] w-full rounded-[15px] p-[20px]"
              >
                <div className="todo-task flex flex-col ">
                  <h3 className="text-[#9395d3] font-[600] text-[13px]">
                    {value.title}
                  </h3>
                  <h4 className="font-[400] text-[10px]">{value.descrip}</h4>
                </div>
              </div>
            ))
          ):(
            
            <div className="flex items-center justify-center h-[400px] ">
              <div className="flex flex-col gap-1 items-center">
                <Image width={130} height={130} src={notask} alt="notask" />
                <p className="font-[500] text-[18px] text-[#67699e]">Yakunlangan task topilmadi !</p>
              </div>
            </div>
          )}
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
