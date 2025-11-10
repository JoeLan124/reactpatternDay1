"use client"

import UserSettings from "@/app/components/UserSettings"
import DropDownComponent from "@/app/components/DropDownComponent"
import ClipBoard from "@/app/components/ClipBoard"

export default function Home ()  {

  
  return (
    <div className="m-4">
      <ClipBoard/>
      <hr className="" />
      <div>
        <p>Second custom hook: local storage </p>
        <UserSettings />
      </div>
      <hr className="mt-2" />
      <div>
        <p>Third custom hook: click outside</p>
        <DropDownComponent />
      </div>
    </div>
  );
}

