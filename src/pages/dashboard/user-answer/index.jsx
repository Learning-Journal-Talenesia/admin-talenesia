import Link from "next/link";
import React, { useState, useEffect } from "react";
import { fetchTema, fetchQnaData } from "@/services/api";

const UserAnswerPage = () => {
  const [qnaData, setQnaData] = useState([]);
  const [themaOptions, setThemaOptions] = useState([]);
  const [selectedThema, setSelectedThema] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchTema()
      .then((themaData) => {
        setThemaOptions(themaData);
      })
      .catch((error) => {
        console.error("Error fetching Thema data:", error);
      });

    fetchQnaData()
      .then((data) => {
        setQnaData(data);
      })
      .catch((error) => {
        console.error("Error fetching Q&A data:", error);
      });
  }, []);

  const handleThemaChange = (e) => {
    setSelectedThema(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredQnaData = qnaData.filter((user) => {
    return (
      (!selectedThema || user.idThema === selectedThema) &&
      user.userName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div>
      <div className="relative overflow-x-auto mx-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <caption className="py-3 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white">
            Table User Answer
            <p>
              <Link
                href="/"
                className="mt-1 text-sm font-normal text-blue-600 underline "
              >
                Kembali ke Halaman Utama
              </Link>
            </p>
            <div className="flex items-center">
              <div className="bg-white mr-2">
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
                    placeholder="Search Username"
                  />
                </div>
              </div>
              <div>
                <select
                  id="thema"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={selectedThema}
                  onChange={handleThemaChange}
                >
                  <option value="">All</option>
                  {themaOptions.map((thema) => (
                    <option key={thema.idThema} value={thema.idThema}>
                      {thema.thema}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </caption>

          <thead className="text-xs text-gray-700 uppercase bg-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                No.
              </th>
              <th scope="col" className="px-6 py-3">
                Pertanyaan
              </th>
              <th scope="col" className="px-6 py-3">
                Jawaban
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredQnaData.map((user) => (
              <tr key={user._id} className="bg-gray-200 border-b">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {user.userName}
                </td>
                <td className="px-6 py-4">
                  {user.qna.map((qna, index) => (
                    <div key={index} className="mb-2">
                      <p>{index + 1}</p>
                    </div>
                  ))}
                </td>
                <td className="px-6 py-4">
                  {user.qna.map((qna, index) => (
                    <div key={index} className="mb-2">
                      <p>{qna.q}</p>
                    </div>
                  ))}
                </td>
                <td className="px-6 py-4">
                  {user.qna.map((qna, index) => (
                    <div key={index} className="mb-2">
                      <p>{qna.a.join(", ")}</p>
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserAnswerPage;
