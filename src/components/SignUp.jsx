import supabase from "../supabase";

const SignUp = () => {
  const handleSubmit = () => {};

  return (
    <div>
      <h2 className="m-10 text-center text-2xl font-bold">
        Create a new account
      </h2>
      <form onSubmit={handleSubmit} className="w-72 m-auto">
        <div>
          <label>
            Email address
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 mb-2"
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
              className="w-full rounded-md py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 mb-2"
            />
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
