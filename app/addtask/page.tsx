"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { toast } from "react-toastify";

const AddTask = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    descrip: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.descrip.trim()) {
      toast.error("Please fill in all fields!");
      return;
    }

    try {
      const newTask = {
        id: Date.now().toString(),
        title: formData.title.trim(),
        descrip: formData.descrip.trim(),
        createdAt: new Date().toISOString(),
      };

      // Xavfsiz tarzda localStorage'ga saqlash
      if (typeof window !== "undefined") {
        const existingTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        localStorage.setItem(
          "tasks",
          JSON.stringify([...existingTasks, newTask])
        );
      }

      toast.success("Task successfully added!");

      // Form ni tozalash
      setFormData({
        title: "",
        descrip: "",
      });

      // Bosh sahifaga yo'naltirish
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (error) {
      console.error("Xatolik:", error);
      toast.error("Xatolik yuz berdi!");
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#9395d3] shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => router.push("/")}
              className="text-white hover:opacity-80 transition-opacity"
            >
              <FaArrowLeftLong size={24} />
            </button>
            <h1 className="text-xl font-semibold text-white">Add Task</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Title"
                  className="w-full p-2 border-b-2 border-gray-300 focus:border-[#9395d3] 
                           outline-none transition-colors bg-transparent"
                  maxLength={100}
                />
              </div>

              <div>
                <textarea
                  name="descrip"
                  value={formData.descrip}
                  onChange={handleChange}
                  placeholder="Description"
                  rows={2}
                  className="w-full p-2 border-b-2 border-gray-300  
                           outline-none transition-colors bg-transparent resize-none"
                  maxLength={200}
                />
              </div>
            </div>

            <button
              type="submit"
              className="cancel  shadow-md font-[400] text-[25px] text-[#fff] bg-[#9395d3] transition-all active:bg-[#5b5d91] rounded-[15px] w-full h-[65px]"
            >
              ADD TASK
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddTask;
