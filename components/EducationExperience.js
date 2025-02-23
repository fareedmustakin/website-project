    // components/EducationExperience.js

    export default function EducationExperience() {
      const experiences = [
          {
            year: "2024 - PRESENT",
            title: "Head of Business",
            company: "Nimbus Homes",
          },
          {
            year: "2021 - PRESENT",
            title: "Product Lead",
            company: "Nimbus",
          },
          {
            year: "2021",
            title: "Professional Certificate in Product Management",
            company: "EDUCATION",
          },
          {
            year: "2020 - 2021",
            title: "General Manager",
            company: "Nimbus",
          },
          {
            year: "2019 - 2020",
            title: "Assistant General Manager",
            company: "Nimbus",
          },
          {
            year: "2017 - 2019",
            title: "Brand & Design Lead",
            company: "Nimbus",
          },
          {
            year: "2014 - 2018",
            title: "Bachelor's Degree in Marketing (Honours)",
            company: "EDUCATION",
          },
          {
            year: "2016 - 2017",
            title: "Certificate in User Experience Design",
            company: "EDUCATION",
          },
          {
            year: "2016 - 2017",
            title: "Business Development Associate",
            company: "ServiceHERO",
          },
          {
            year: "2012 - 2012",
            title: "Video Editor",
            company: "CNBC Asia",
          },
          {
            year: "2010 - 2012",
            title: "Diploma in Digital Film",
            company: "EDUCATION",
          },
          {
            year: "2009 - 2012",
            title: "Diploma in Media & Communication",
            company: "EDUCATION",
          },
        ];
      
        return (
          <section id="education-experience" className="py-12 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-20">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
                My Education & Experiences
              </h2>
              <p className="text-lg text-gray-600 text-center mb-8">
                I use my hard skills to help businesses flourish. In return, these
                experiences have helped me develop important people and management
                skills and shaped me to become a versatile creative business-driven
                individual.
              </p>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:justify-between">
                    <div className="md:w-1/4">
                      <p className="text-gray-700 font-medium">{exp.year}</p>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                      <p className="text-gray-600">{exp.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      }
      