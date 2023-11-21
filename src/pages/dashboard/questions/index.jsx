import Link from "next/link";

import { fetchData, deleteData } from "@/services/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const QuestionAnswer = () => {
  const { push } = useRouter();
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [editItem, setEditItem] = useState(null);

  const sortedData = [...data];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = sortedData.filter((item) =>
    item.thema.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    fetchData()
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleAddQuestion = () => {
    push("/dashboard/questions/add-question");
  };

  const handleDelete = (id) => {
    const isConfirmed = window.confirm(
      "Apakah Anda yakin ingin menghapus pertanyaan ini?"
    );
    if (isConfirmed) {
      deleteData(id);
      window.alert("Pertanyaan berhasil di hapus");
      fetchData()
        .then((data) => setData(data))
        .catch((error) => console.error("Error fetching data:", error));
    } else {
      window.alert("pertanyaan tidak jadi dihapus");
    }
  };

  const handleEdit = (id) => {
    const itemToEdit = data.find((item) => item._id === id);
    setEditItem(itemToEdit);
    push(`/dashboard/questions/${id}`);
  };

  return (
    <div>
      <div className="relative overflow-x-auto mx-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <caption className="py-3 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white">
            Table Pertanyaan
            <p>
              <Link
                href="/"
                className="mt-1 text-sm font-normal text-blue-600 underline "
              >
                Kembali ke Halaman Utama
              </Link>
            </p>
            <div className="flex items-center">
              <div className=" bg-white">
                <label htmlFor="table-search" className="sr-only">
                  Search
                </label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="table-search"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="block pb-2 pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500  "
                    placeholder="Search Thema"
                  />
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleAddQuestion()}
                  type="button"
                  className="text-white ml-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 focus:outline-none"
                >
                  {" "}
                  Buat pertanyaan
                </button>
              </div>
            </div>
          </caption>

          <thead className="text-xs text-gray-700 uppercase bg-gray-400  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Thema
              </th>
              <th scope="col" className="px-6 py-3">
                pertanyaan
              </th>
              <th scope="col" className="px-6 py-3">
                type
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id} className="bg-gray-200 border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {item.thema}
                </th>
                <td className="px-6 py-4">{item.question}</td>
                <td className="px-6 py-4">{item.inputType}</td>
                <td className="px-6 py-4">
                  <Link
                    href="#"
                    onClick={() => handleEdit(item._id)}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>
                  <span className="mx-1">|</span>
                  <Link
                    href="#"
                    onClick={() => handleDelete(item._id)}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Hapus
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuestionAnswer;
