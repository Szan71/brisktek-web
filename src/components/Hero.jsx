import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[893px] flex flex-col items-center pt-[145px] bg-white overflow-hidden rounded-[36px]">
      
      {/* 1. Hero Content */}
      <div className="relative z-20 text-center px-[45px] max-w-[1920px]">
        <h1 className="text-[84px] text-brisk-navy-100 leading-[1.1] mb-[105px] tracking-tight">
          Your Vision, <br /> Our Technology
        </h1>
        <p className="max-w-[850px] mx-auto text-slate-500 text-[24px] leading-[130%] mb-[60px]">
          Empowering businesses and buildings with future-ready technology that works — 
          seamlessly, securely, and efficiently.
        </p>
        <button className="
          relative
          inline-flex items-center justify-center
          px-[40px] py-[24px] 
          rounded-[100px] 
          font-bold text-[18px] 
          text-white
          transition-all duration-300
          cursor-pointer
          
          /* Background: White at 10% Opacity */
          bg-white/10
          
          /* Glass Core: Blur effect */
          backdrop-blur-[12px]
          
          /* Border: Subtle white definition */
          border border-white/20
          
          /* Shadow: Soft elevation */
          shadow-lg
          
          /* Hover state */
          hover:bg-white/20
          hover:scale-[1.02]
        ">
          Get more info
        </button>
      </div>

      {/* 2. THE RUGBY BALL GROUP (Restored visibility for Brisk Navy) */}
      <div className="absolute bottom-[-900px] left-1/2 -translate-x-1/2 w-[2334px] h-[1380px] pointer-events-none z-10">
        <div className="relative w-full h-full">
          
          {/* Layer 4: White Base Base (2334 x 1380) - #FFFFFF, Blur 4 */}
          <div className="absolute inset-0 bg-white rounded-[100%] blur-[4px] opacity-10"></div>
          
          {/* Layer 8: Brisk Navy Core (2014 x 1020) - #171F3B, Blur 160 */}
          {/* Placed here to be visible through the lighter blurs */}
          <div className="absolute top-[280px] left-1/2 -translate-x-1/2 w-[2014px] h-[1020px] bg-brisk-navy-100 rounded-[100%] blur-[160px] opacity-100 z-10"></div>
          
          {/* Layer 5: Pink Glow (2072 x 1225) - #FBAAFD, Blur 80 */}
          <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[2072px] h-[1225px] bg-sphere-pink rounded-[100%] blur-[80px] opacity-40"></div>

          {/* Layer 6: Vibrant Blue (2014 x 1020) - #6536FF, Blur 160 */}
          <div className="absolute top-[150px] left-1/2 -translate-x-1/2 w-[2014px] h-[1020px] bg-sphere-blue rounded-[100%] blur-[160px] opacity-70"></div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;