// components/Contact.js

export default function Contact() {
  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Let's Work Together!
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          I am currently based in Singapore but open to remote work opportunities.
          If you'd like to collaborate or discuss a project, feel free to reach out!
        </p>
        <a
          href="mailto:fareedmustakin@gmail.com"
          className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}
