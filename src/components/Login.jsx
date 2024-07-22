import { useState } from "react";
import supabase from "../supabase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.get("email"),
      password: formData.get("password"),
    });
    console.log(data, error);
    if (error) {
      setError(error.message);
      return;
    }

    // Redirect to Dahsboard
    return navigate(`/`);
  };

  return (
    <div className="w-96 m-auto">
      <h2 className="m-10 text-center text-2xl font-bold">Sign in</h2>
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
            Login
          </button>
        </div>
      </form>
      <div className="mt-4">
        Don&apos;t have an account yet?{" "}
        <Link to={"/sign-up"} className="text-indigo-600 hover:text-indigo-500">
          Register a new account
        </Link>
      </div>
    </div>
  );
};

export default Login;
