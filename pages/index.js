import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import Expertise from "../components/Expertise";
import ProfessionalToolkit from "../components/ProfessionalToolkit";
import Expertise from "../components/EducationExperience";
import Expertise from "../components/Testimonials";
import Expertise from "../components/Contact";

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
