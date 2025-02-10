export default function Expertise() {
    return (
      <section id="expertise" className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
            My Expertise
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            Developing and Launching Impactful Technological Applications.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Expertise Item 1 */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">User-Centered Development</h3>
              <p className="text-gray-600 mt-2">
                Ensuring products are designed with the end-user in mind for seamless experiences.
              </p>
            </div>
  
            {/* Expertise Item 2 */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Application Design</h3>
              <p className="text-gray-600 mt-2">
                Crafting intuitive and aesthetically pleasing user interfaces.
              </p>
            </div>
  
            {/* Expertise Item 3 */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Performance Analytics</h3>
              <p className="text-gray-600 mt-2">
                Utilizing data-driven insights to enhance app efficiency and user engagement.
              </p>
            </div>
  
            {/* Expertise Item 4 */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Feature Prioritization</h3>
              <p className="text-gray-600 mt-2">
                Aligning development efforts with business goals and user needs.
              </p>
            </div>
  
            {/* Expertise Item 5 */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Stakeholder Management</h3>
              <p className="text-gray-600 mt-2">
                Coordinating across teams to drive successful product launches.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  