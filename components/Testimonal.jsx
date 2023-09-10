"use client"
import React from 'react';

const Testimonial = () => {
  const testimonials = [
 {
      name: 'John Smith',
      title: 'Lead Software Engineer - Emirates',
      text: "Collaborating with UNICORN PRODUCTIONS has been an absolute delight. Their team's expertise in full-stack development and frontend skills has played a pivotal role in the success of our projects. Not only do they exhibit a strong command of backend technologies, but their frontend development prowess has also remarkably enhanced the user interfaces of our applications. UNICORN PRODUCTIONS consistently delivers visually captivating and user-friendly designs. Their meticulous attention to detail ensures seamless integration of frontend components with backend functionalities. Thanks to UNICORN PRODUCTIONS, our products now provide an exceptional user experience. We wholeheartedly recommend them for any development project."
    },
    {
      name: 'Emily Johnson',
      title: 'Senior Web Developer - W-Enterprise',
      text: "UNICORN PRODUCTIONS' contributions to our projects at Wayne Enterprises have been outstanding. As a full-stack development company with excellent frontend development skills, they bring a unique blend of technical expertise and creativity to the table. UNICORN PRODUCTIONS' ability to conceptualize and design frontend interfaces that align perfectly with our brand image is truly impressive. Their proficiency in frontend technologies, such as HTML, CSS, and JavaScript, allows them to implement responsive and visually appealing designs that resonate with our target audience. We are continually impressed with UNICORN PRODUCTIONS' dedication to delivering high-quality frontend solutions, and we value their contributions to our team."
    },
    {
      name: 'Sarah Williams',
      title: 'Frontend Developer - Dubai Schools',
      text: "Having collaborated closely with UNICORNPRODUCTIONS on numerous frontend projects for Dubai Schools, I can confidently affirm that they are among the most skilled frontend developers I've had the privilege to work with. UNICORNPRODUCTIONS' profound understanding of frontend technologies and frameworks empowers them to craft dynamic and captivating user interfaces. They meticulously grasp the unique needs and requisites of our projects, consistently delivering frontend solutions that not only meet but surpass our expectations. UNICORNPRODUCTIONS' unwavering attention to detail and their dedication to writing clean and efficient code make them an invaluable addition to our team. I wholeheartedly recommend UNICORNPRODUCTIONS for any frontend development projects."
    }
  ];

  return (
    <section className="text-gray-600 body-font">
      <h2 className="text-4xl font-bold text-purple-600 text-center mb-8">My Global Clients Say It Best</h2>
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap -mx-4 -my-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="md:w-1/2 px-4 py-2 relative">
              <div className="border border-gray-300 p-6 rounded-lg h-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="inline-block w-8 h-8 text-gray-400 mb-6"
                  viewBox="0 0 975.036 975.036"
                >
                  {/* Your SVG path here */}
                </svg>
                <p className="leading-relaxed text-lg relative">
                  <span
                    className="absolute inset-0 z-[-1] bg-purple-600"
                    style={{ transform: 'skew(-12deg)', opacity: '0.15' }}
                  ></span>
                  {testimonial.text}
                </p>
                <span className="inline-block h-1 w-10 rounded bg-purple-600 mt-8 mb-6"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{testimonial.name}</h2>
                <p className="text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
