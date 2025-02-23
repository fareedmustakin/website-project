import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import Expertise from "../components/Expertise";
import ProfessionalToolkit from "../components/ProfessionalToolkit";
import EducationExperience from "../components/EducationExperience";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

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
