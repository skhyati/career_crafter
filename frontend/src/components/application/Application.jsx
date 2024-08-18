import React from "react";
import NavbarRecruiter from "../shared/NavbarRecruiter";
import ApplicationTable from "./ApplicationTable";


function Application() {
  return (
    <div>
      <NavbarRecruiter />
      <div className="max-w-6xl mx-auto my-10">
        <div className="flex item-center justify-between">
          <input className="w-fit" placeholder="Filter by name"></input>
        </div>
        <ApplicationTable/>
      </div>
    </div>
  );
}

export default Application;
