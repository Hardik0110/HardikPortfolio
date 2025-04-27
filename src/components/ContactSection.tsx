import React from 'react'
import { ContactForm } from './ContactForm'
import { ContactInfo } from './ContactInfo'
import { ResumeButton } from './ResumeButton'
export const ContactSection = () => {
  return (
    <div className="h-screen w-full bg-[#FFA955] relative overflow-hidden">
      {/* Fun background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated circles */}
        <div className="absolute top-[10%] left-[15%] w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-pulse delay-700"></div>
        <div className="absolute top-[20%] right-[20%] w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-pulse delay-300"></div>
        <div className="absolute bottom-[20%] left-[25%] w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-pulse delay-300"></div>
        <div className="absolute top-[40%] left-[10%] w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-pulse delay-700"></div>
        {/* Zigzag pattern */}
        <div className="absolute top-0 left-0 w-full h-16 opacity-10">
          <div
            className="w-full h-full bg-red-600"
            style={{
              clipPath:
                'polygon(0 0, 100% 0, 100% 100%, 95% 100%, 90% 0, 85% 100%, 80% 0, 75% 100%, 70% 0, 65% 100%, 60% 0, 55% 100%, 50% 0, 45% 100%, 40% 0, 35% 100%, 30% 0, 25% 100%, 20% 0, 15% 100%, 10% 0, 5% 100%, 0 0)',
            }}
          ></div>
        </div>
        {/* Stars */}
            <div className="absolute top-[25%] left-[25%] text-yellow-200 opacity-30 text-4xl animate-bounce">★</div>
            <div className="absolute bottom-[30%] left-[75%] text-yellow-200 opacity-30 text-2xl animate-bounce delay-500">★</div>
            <div className="absolute top-[15%] right-[35%] text-yellow-200 opacity-30 text-3xl animate-bounce delay-300">★</div>
            <div className="absolute top-[35%] right-[15%] text-yellow-200 opacity-30 text-3xl animate-bounce delay-300">★</div>
            <div className="absolute top-[10%] left-[60%] text-yellow-200 opacity-30 text-xl animate-bounce delay-200">★</div>
            <div className="absolute bottom-[20%] right-[40%] text-yellow-200 opacity-30 text-2xl animate-bounce delay-700">★</div>
            <div className="absolute top-[5%] right-[10%] text-yellow-200 opacity-30 text-4xl animate-bounce delay-100">★</div>
            <div className="absolute bottom-[10%] left-[15%] text-yellow-200 opacity-30 text-2xl animate-bounce delay-400">★</div>
            <div className="absolute top-[45%] left-[40%] text-yellow-200 opacity-30 text-xl animate-bounce delay-600">★</div>
            <div className="absolute bottom-[5%] right-[25%] text-yellow-200 opacity-30 text-3xl animate-bounce delay-800">★</div>
            <div className="absolute top-[40%] left-[5%] text-yellow-200 opacity-30 text-xl animate-bounce delay-400">★</div>
            <div className="absolute bottom-[10%] left-[25%] text-yellow-200 opacity-30 text-2xl animate-bounce delay-500">★</div>
            <div className="absolute top-[60%] left-[18%] text-yellow-200 opacity-30 text-3xl animate-bounce delay-600">★</div>
            <div className="absolute bottom-[45%] left-[8%] text-yellow-200 opacity-30 text-xl animate-bounce delay-700">★</div>
            <div className="absolute top-[5%] left-[12%] text-yellow-200 opacity-30 text-4xl animate-bounce delay-800">★</div>

        {/* Squiggly lines */}
        <div className="absolute bottom-0 left-0 w-full h-16 opacity-10">
          <div
            className="w-full h-full bg-yellow-400"
            style={{
              clipPath:
                'polygon(0 100%, 100% 100%, 100% 0, 95% 20%, 90% 0, 85% 20%, 80% 0, 75% 20%, 70% 0, 65% 20%, 60% 0, 55% 20%, 50% 0, 45% 20%, 40% 0, 35% 20%, 30% 0, 25% 20%, 20% 0, 15% 20%, 10% 0, 5% 20%, 0 0)',
            }}
          ></div>
        </div>
      </div>
      {/* Content */}
      <div className="relative h-full max-w-6xl mx-auto px-6 py-4">
        <h1 className=" mt-10 text-4xl md:text-5xl font-bold text-yellow-900 text-center mb-6 mt-4">
          Get In Touch!
        </h1>

            {/* Quote */}
        <div className="absolute -left-40 top-1/2 -translate-y-1/2 max-w-md mt-20 ">
          <p className="text-4xl font-bold text-yellow-900 leading-relaxed italic transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            "If you've made it this far, either you really like my work — or you got lost. Either way, let's connect!"
          </p>
        </div>
            

        <div className="relative h-[calc(100%-8rem)]">
          {/* Resume button - top right */}
          <div className="absolute top-0 right-0">
            <ResumeButton />
          </div>
          {/* Contact info - top left */}
          <div className="absolute top-0 left-0">
            <ContactInfo />
          </div>
          {/* Main form */}
          <div className="h-full pt-24 flex justify-center items-center">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Johnny Bravo Image */}
      <div className="absolute right-60 bottom-72 transform translate-x-1/2 translate-y-1/2 ">
        <img 
          src="./johnnybravo.png" 
          alt="Johnny Bravo"
          className="h-[600px] w-[600px]" 
        />
      </div>
    </div>
  )
}
