import { TextInput  } from "flowbite-react";
import { BsSearch } from "react-icons/bs";

function SectionSearch() {
  return (
    <div className="flex items-start justify-between py-3">
                <h2 className="text-2xl font-bold text-rose-700">Your Task</h2>
                <div className="max-w-lg">
                <TextInput id="email4" type="email" rightIcon={BsSearch }  required />
                </div>
            </div>
  )
}

export default SectionSearch