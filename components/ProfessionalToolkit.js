export default function ProfessionalToolkit() {
    const tools = [
      "Figma",
      "Sketch",
      "Premiere Pro",
      "Photoshop",
      "Illustrator",
      "Microsoft Clarity",
      "Metabase",
      "AppsFlyer",
      "Google Analytics",
      "Google Ads",
      "Jira",
      "Confluence",
      "Zapier",
      "Webflow",
      "Shopify",
    ];
  
    return (
      <section id="professional-toolkit" className="py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
            Professional Toolkit
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            Softwares that I use day to day
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md"
              >
                <p className="text-gray-800 font-semibold">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  