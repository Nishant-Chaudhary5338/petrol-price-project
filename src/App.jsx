/** @format */

import MainLayout from "./MainLayout";

function App() {
  return (
    <div>
      <div className="bg-gray-900 text-center py-6  font-bold  text-white">
        <img
          className="mx-auto"
          src="https://cdn.discordapp.com/attachments/921133670830600253/980161412380897330/icons8-fuel-58.png"
          alt=""
        />
        <span className="ml-0 text-4xl font-semibold">
          Petrol Price Monitor{" "}
        </span>
      </div>
      <MainLayout></MainLayout>
    </div>
  );
}

export default App;
