// components/Testimonials.js

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Fareed is extremely versatile, currently managing multiple projects simultaneously and is able to switch hats/roles with ease. Our tech and ops colleagues hold Fareed in high regard because of his ability to actively listen, advise and convey each respective parties’ opinions effectively.",
      name: "Szehui Tham",
      position: "HR Director, Nimbus Enterprise",
    },
    {
      quote: "Fareed proved to be a reliable teammate, who took his responsibilities seriously and never fails to provide valuable input to the team. He offered balance to the team as we took turn to lead the team during the different stages of the UX redesign process.",
      name: "Risiandi Jiang",
      position: "UX Designer, Pelago",
    },
    {
      quote: "Fareed is incredible in terms of expertise and passion for design and product. He led the efforts to fully create the brand from scratch, and advised and supervised the design and brand collaterals usage by the various departments. He is instrumental in the product management of the Nimbus' tech, as he worked with various stakeholders, gathered their user experience feedback and demands, and translated the information to the Tech team.",
      name: "Thalia Tuan",
      position: "Head of Sales & Marketing, Student Castle & Capitol Students",
    },
    {
      quote: "Fareed has helped me launch my business by building up my digital presence. The website and booking system that he built has allowed me to get lots of fresh traffic online which I did not have in the past. Beyond his hard skills, Fareed is an honest and trustworthy guy as he will only recommend me processes that are of value. I will recommend him to my friends and clients who need digital help.",
      name: "Aylwin Aaron",
      position: "Director, Aylwin Sports Therapy",
    },
  ];

  return (
    <section id="testimonials" className="py-12 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          What People I Worked With Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-800 italic mb-4">"{testimonial.quote}"</p>
              <h3 className="text-lg font-semibold text-gray-900">
                {testimonial.name}
              </h3>
              <p className="text-gray-600">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
