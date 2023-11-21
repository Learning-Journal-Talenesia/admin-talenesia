import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="h-screen flex items-center">
        <div className="mx-auto">
          <h1 className="text-center font-bold text-4xl">
            Selamat datang admin talenesia
          </h1>
          <h2 className="text-center text-gray-700 font-medium text-2xl">
            ini adalah menu fitur yang tersedia
          </h2>

          <div className="flex justify-center">
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow m-3 ">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Dasboard Tracking
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 ">
                Dimana riwayat jawaban user dari learning journal disimpan
                disini
              </p>
              <Link
                href="dashboard/user-answer"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Dashboard Tracking
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow m-3">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Soal learning Journal
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 ">
                Dimana ini tempat untuk ngebuat soal, mengedit soal dan
                menghapus soal
              </p>
              <Link
                href="dashboard/questions"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Soal Learning Journal
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
