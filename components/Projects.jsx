import React from 'react';
import { FiGithub } from 'react-icons/fi';

const Projects = () => {
  return (
    <section className="text-gray-600 body-font bg-[#8800C7]/10 flex-col">
      <div className="items-center text-center justify-center px-5 py-24 mx-auto flex flex-wrap">
        <h1 className="sm:text-4xl text-center font-medium title-font mb-4">
          <span
            className="text-4xl"
            style={{
              borderBottom: '4px solid #8800C7',
              maxWidth: '100%',
            }}
          >
            Project Showcase
          </span>
        </h1>
      </div>
      <div className="flex flex-wrap md:-m-2 -m-1">
        <div className="flex flex-wrap w-full sm:w-1/2">
          <div className="md:p-2 p-1 w-1/2 relative group">
            <img alt="gallery" className="w-full h-full object-cover object-center block transition-transform duration-300 ease-in-out transform group-hover:blur-sm" src="https://miro.medium.com/v2/resize:fit:3200/0*OFrVIaXkKTr6Fnqh" />
            <a href="/your-link-here" className="bg-purple-600 text-white rounded-full py-2 px-8 mt-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-in-out opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <FiGithub className="mr-2" />
              View More
            </a>
          </div>
          <div className="md:p-2 p-1 w-1/2 relative group">
            <img alt="gallery" className="w-full object-cover h-full object-center block transition-transform duration-300 ease-in-out transform group-hover:blur-sm" src="https://themes.coffeecup.com/images/stardata/Stardata-grid-img.jpg" />
            <a href="/your-link-here" className="bg-purple-600 text-white rounded-full py-2 px-8 mt-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-in-out opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <FiGithub className="mr-2" />
              View More
            </a>
          </div>
          <div className="md:p-2 p-1 w-full relative group">
            <img alt="gallery" className="w-full h-full object-cover object-center block transition-transform duration-300 ease-in-out transform group-hover:blur-sm" src="https://www.pineapplebuilder.com/_next/image?url=https:%2F%2Fres.cloudinary.com%2Faurity%2Fimage%2Fupload%2Fv1658217918%2FFrame_174_b313915e4b.png&w=1200&q=90" />
            <a href="/your-link-here" className="bg-purple-600 text-white rounded-full py-2 px-8 mt-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-in-out opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <FiGithub className="mr-2" />
              View More
            </a>
          </div>
        </div>
        <div className="flex flex-wrap w-full sm:w-1/2">
          <div className="md:p-2 p-1 w-full relative group">
            <img alt="gallery" className="w-full h-full object-cover object-center block transition-transform duration-300 ease-in-out transform group-hover:blur-sm" src="https://cdn.dribbble.com/users/2191761/screenshots/14576743/media/1cf705d0eaf404fb776074674111bc81.jpg?compress=1&resize=800x600&vertical=top" />
            <a href="/your-link-here" className="bg-purple-600 text-white rounded-full py-2 px-8 mt-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-in-out opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <FiGithub className="mr-2" />
              View More
            </a>
          </div>
          <div className="md:p-2 p-1 w-1/2 relative group">
            <img alt="gallery" className="w-full object-cover h-full object-center block transition-transform duration-300 ease-in-out transform group-hover:blur-sm" src="https://assets.materialup.com/uploads/14f101b4-0b79-4762-83ba-86b103dc8892/preview.jpg" />
            <a href="/your-link-here" className="bg-purple-600 text-white rounded-full py-2 px-8 mt-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-in-out opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <FiGithub className="mr-2" />
              View More
            </a>
          </div>
          <div className="md:p-2 p-1 w-1/2 relative group">
            <img alt="gallery" className="w-full object-cover h-full object-center block transition-transform duration-300 ease-in-out transform group-hover:blur-sm" src="https://i.ytimg.com/vi/aCx9T9DZHWs/maxresdefault.jpg" />
            <a href="/your-link-here" className="bg-purple-600 text-white rounded-full py-2 px-8 mt-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-in-out opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <FiGithub className="mr-2" />
              View More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
