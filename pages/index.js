import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import Expertise from "../components/Expertise";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Introduction />  {/* 🟢 Move Introduction to the Top */}
      <Expertise />
    </div>
  );
}
