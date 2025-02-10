import Navbar from "../components/Navbar";
import Expertise from "../components/Expertise";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Expertise />
      <h1 className="text-4xl font-bold text-center">Welcome to My Website</h1>
    </div>
  );
}
