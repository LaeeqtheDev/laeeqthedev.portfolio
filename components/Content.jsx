import React from 'react';
import Image from 'next/image';

const Content = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold">
        About <span className="border-b-4 border-purple-600">Me</span>
      </h1>
      
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto relative">
          <div className="absolute -inset-0 bg-[#8800C7]/10 transform skew-y-12" />
          <div className="lg:w-4/6 mx-auto relative">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <Image className="rounded-full" src="/images/bighead.svg" alt="avt" width={150} height={50} />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Syed Laeeq Ahmed</h2>
                  <div className="w-12 h-1 bg-purple-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">HTML| CSS | JAVASCRIPT | REACT.JS | NEXT.JS | TAILWIND | FIREBASE | VERCEL | SANITY </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">I am a highly skilled Fullstack Developer with expertise in React.js and Next.js, specializing in assisting startups with their virtual setups. My passion lies in leveraging cutting-edge technologies to solve complex problems and meet specific requirements. I have a strong foundation in web development, including HTML, CSS, and Bootstrap, and extensive knowledge of JavaScript, React JS, and jQuery. I am proficient in working with database platforms like Firebase and Sanity for efficient data management. I am well-versed in software development principles, testing, and agile methodologies. Additionally, I utilize various web development tools to streamline the development process. I thrive in high-pressure environments and excel in adaptability, problem-solving, and attention to detail. Overall, I am a dedicated professional ready to contribute my expertise and drive success in any team or project.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
