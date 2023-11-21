import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push, query } = useRouter();

  const callbackUrl = query.callback || "/";
  const handleSubmit = async (e) => {
    setIsLoading(true);
    setError("");
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    try {
      const res = await signIn("credentials", {
        redirect: false,
        username: e.target.username.value,
        password: e.target.password.value,
        callbackUrl,
      });
      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError("Email or Password is incorrect");
      }
    } catch (err) {
      setIsLoading(false);
      setError("Email or Password is incorrect");
    }
  };
  return (
    <div className="flex items-center justify-center flex-col h-screen w-screen">
      {error && <p className="text-red-500">{error}</p>}
      <div className="w-2/5 shadow-md p-6">
        <Image
          className="mx-auto"
          src="/talenesia.png"
          alt="talenesia"
          width={300}
          height={100}
        />
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col my-2">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              className="p-3 bg-slate-200 rounded"
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              className="p-3 bg-slate-200 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-slate-800 text-white w-full rounded p-3 mt-4"
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
