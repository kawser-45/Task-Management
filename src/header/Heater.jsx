
import Container from "../components/Container";
import logo from "../assets/image 1.png";
import { MdOutlineLightMode } from "react-icons/md";
import { useEffect, useState } from "react";

function Heater() {
  let [ theme, setTheme] = useState(false);

  useEffect(() => {

    if (theme) {
      document.documentElement.classList.add('dark');
    } else{
      document.documentElement.classList.remove('dark');
    }

  },[ theme]); 
  return (
    <div className="py-4 border-b">
      <Container className="flex items-center justify-between">
        <img className="dark: brightness-200" src={logo} alt="Brand Logo" />
        

        <MdOutlineLightMode onClick={() => setTheme(!theme)} className={`text-lg cursor-pointer ${theme && `text-white`}`} />
      </Container>
    </div>
  )
}

export default Heater