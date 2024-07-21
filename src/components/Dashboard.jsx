import { useState, useEffect } from "react";
import supabase from "../supabase";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getLoggedInUser = async () => {
      const { data } = await supabase.auth.getSession();
      console.log({ data });
      setUser(data.session.user);
    };
    getLoggedInUser();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      setError(error);
      return;
    }
    navigate("/login");
  };

  return (
    <div className="w-96 m-auto text-center">
      <h2 className="m-10 text-center text-2xl font-bold">Dashboard</h2>
      <div>You are logged in as {user?.email}.</div>
      {error && (
        <div className=" text-red-700 p-4 text-center" role="alert">
          Error - {error}
        </div>
      )}
      <div>
        <a
          href="#"
          className="text-indigo-600 hover:text-indigo-500"
          onClick={handleLogout}
        >
          Log out
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
