import { useState } from "react";
import supabase from "../supabase";

const SignUp = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { data, error } = await supabase.auth.signUp({
      email: formData.get("email"),
      password: formData.get("password"),
    });
    console.log(data, error);
    if (!error) {
      setIsRegistered(true);
    } else {
      setError(error.message);
    }
  };

  if (isRegistered) {
    return (
      <div className="m-10 text-center font-bold">
        You have successfully registered! Please check your email to verify your
        account.
      </div>
    );
  }

  return (
    <div className="w-96 m-auto">
      <h2 className="m-10 text-center text-2xl font-bold">
        Create a new account
      </h2>
      {error && (
        <div className=" text-red-700 p-4 text-center" role="alert">
          Error - {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email address
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 mb-2"
            />
          </label>
        </div>

        <div>
          <label>
            Password
            <input
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="w-full rounded-md p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 mb-2"
            />
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-3 py-1.5  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
