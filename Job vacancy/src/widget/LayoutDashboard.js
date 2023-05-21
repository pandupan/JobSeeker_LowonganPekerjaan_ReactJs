import React from "react";
import Sidebar from "../components/sidebar/sidebar";

const LayoutDashboard = (props) => {
  return(
    <>
      <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800 mx-auto">
        <div className="flex items-start justify-between">
          <Sidebar />
          <div className="flex flex-col w-full md:space-y-4">
            <div className="h-screen px-4 mt-20 pb-24 overflow-auto md:px-6">
            {props.children}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default LayoutDashboard