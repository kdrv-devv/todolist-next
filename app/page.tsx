import { FaPencil } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoListSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
const Home = () => {
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
        <div className="container py-[10px] flex flex-col gap-[20px]">
          {Array.from({ length: 15 }).map((_, idx) => (
            <div
              key={idx}
              className="todo-item flex items-center justify-between h-[82px] bg-[#fff] w-full rounded-[15px] p-[20px]"
            >
              <div className="todo-task flex flex-col ">
                <h3 className="text-[#9395d3] font-[600] text-[13px]">
                  TODO TITLE
                </h3>
                <h4 className="font-[400] text-[10px]">TODO SUB TITLE</h4>
              </div>
              <div className="todo-actions flex items-center gap-[20px] text-[#B3B7EE]">
                <button>
                  <FaPencil />
                </button>
                <button>
                  <FaRegTrashCan />
                </button>
                <button>
                  <FaRegCheckCircle />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer sticky bottom-0 bg-[#ffff]">
      <button className="w-[50px] h-[50px] absolute top-[-55px] right-[20px]  rounded-[100%] bg-[#9395d3] text-[#fff] flex items-center justify-center ">
      <FaPlus />
      </button>
        <div className="container flex items-center justify-around py-[10px]">
          <button className="flex flex-col items-center text-[#9395D3] ">
            <IoListSharp />
            <h5>All</h5>
          </button>
          <button className="flex flex-col items-center text-[#9395D3]">
            <FaCheck />
            <h5>Completed</h5>
          </button>
        </div>
      </footer>
    </section>
  );
};

export default Home;
