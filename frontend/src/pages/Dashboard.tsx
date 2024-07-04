const Dashboard = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="border w-[30vw] shadow-md p-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl font-bold">Welcome to Dashboard</h1>
          <p>Hello User !</p>
          <p>You are successfully logged in.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
