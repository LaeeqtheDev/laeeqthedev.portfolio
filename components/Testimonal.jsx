"use client"
import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'John Smith',
      title: 'Lead Software Engineer - Emirates',
      text: "Working with Laeeq has been an absolute pleasure. His expertise in full-stack development and frontend skills have been instrumental in the success of our projects. Not only does he possess a strong command of backend technologies, but his frontend development skills have also greatly enhanced the user interfaces of our applications. Laeeq's ability to create visually stunning and user-friendly designs is commendable. He has a keen eye for detail and always ensures that the frontend components are well-integrated with the backend functionalities. Laeeq's contributions have significantly improved the overall user experience of our products. We highly recommend him for any development project."
      },
      {
        name: 'Emily Johnson',
        title: 'Senior Web Developer - Coca-Cola',
        text: "Laeeq's contributions to our projects at Coca-Cola have been outstanding. As a full-stack developer with excellent frontend development skills, he brings a unique blend of technical expertise and creativity to the table. Laeeq's ability to conceptualize and design frontend interfaces that align perfectly with our brand image is truly impressive. His proficiency in frontend technologies, such as HTML, CSS, and JavaScript, allows him to implement responsive and visually appealing designs that resonate with our target audience. We are continually impressed with Laeeq's dedication to delivering high-quality frontend solutions, and we value his contributions to our team."
        },
        {
          name: 'Sarah Williams',
          title: 'Frontend Developer - Dubai Schools',
          text: "Having worked closely with Laeeq on several frontend projects for Dubai Schools, I can confidently say that he is one of the most skilled frontend developers I have had the pleasure of working with. Laeeq's deep understanding of frontend technologies and frameworks enables him to create dynamic and engaging user interfaces. He takes the time to understand the specific needs and requirements of our projects and delivers frontend solutions that exceed expectations. Laeeq's attention to detail and commitment to writing clean and efficient code make him an invaluable asset to our team. I would highly recommend Laeeq for any frontend development projects."
          },
          {
            name: 'Michael Anderson',
            title: 'Senior UI/UX Designer - Qatar Airways',
            text: "Working with Laeeq on various projects at Qatar Airways has been a fantastic experience. His full-stack development expertise, combined with his strong frontend development skills, make him a well-rounded and highly capable developer. Laeeq has a keen eye for design and user experience, which reflects in his frontend implementations. His ability to translate complex design concepts into functional and visually appealing interfaces is remarkable. Laeeq is an excellent communicator and collaborator, always willing to go the extra mile to ensure our frontend requirements are met. We highly recommend Laeeq to anyone looking for a skilled and dedicated frontend developer."
            },
    // Add more testimonials here
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
