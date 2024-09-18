// pages/page.tsx
import Signin from "app/signUp/Signin";
import Background from "../signUp/SignUp.jpg";

export default function Home() {
  return (
    
    <div>
       <Signin />
      <div
      //className="bg-cover bg-center h-screen text-center backdrop-opacity-10 backdrop-invert bg-white/30 opacity-80"
      style={{ backgroundImage: `url(${Background.src})` }}>

      </div>
     
    </div>
  );
}
