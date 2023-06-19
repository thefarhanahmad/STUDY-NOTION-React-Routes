import React from "react";

const Dashboard = ({ setLoggedIn }) => {
  setLoggedIn(true);
  return (
    <div className="text-white text-4xl flex justify-center items-center w-full h-full">
      Welcome to StudyNotion
    </div>
  );
};

export default Dashboard;
