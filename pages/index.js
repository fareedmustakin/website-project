import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import Expertise from "../components/Expertise";
import ProfessionalToolkit from "../components/ProfessionalToolkit";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Introduction />  {/* 🟢 Move Introduction to the Top */}
      <Expertise />
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <Expertise />
      <ProfessionalToolkit />
      {/* Add other components here */}
    </div>
  );
}
