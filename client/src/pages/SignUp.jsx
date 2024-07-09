import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/signup", formData);
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center my-7 font-semibold">Sign up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter Username"
          className="border p-3 rounded-lg"
          id="username"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Password"
          className="border p-3 rounded-lg "
          id="password"
          onChange={handleChange}
        />
        <div className="flex w-full justify-between">
          <button
            className="bg-green-500 text-white p-3 px-8 hover:bg-white hover:text-black  rounded-lg uppercase"
            onSubmit={handleSubmit}
          >
            Sign up
          </button>
          <button className="bg-violet-600 text-white p-3 rounded-lg uppercase">
            Continue with google
          </button>
        </div>
        <p>
          Have an account?
          <Link to="/sign-in">
            <span className="text-blue-600 hover:underline"> Sign-in</span>
          </Link>
        </p>
      </form>
    </div>
  );
}
