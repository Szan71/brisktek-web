import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[893px] flex flex-col items-center pt-[145px] bg-white overflow-hidden rounded-[36px]">
      {/* 1. Hero Content */}
      <div className="relative z-20 text-center px-5 sm:px-10 lg:px-[45px] max-w-[1920px] mx-auto">
        {/* Main Heading: 
      - Fluid font sizing from text-4xl (mobile) to 84px (desktop)
      - Responsive margins to prevent "ugly" squashing on smaller screens 
  */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-medium text-brisk-navy-100 leading-[1.1] mb-12 md:mb-[105px] tracking-tight font-['Inter']">
          Your Vision, <br className="hidden sm:block" /> Our Technology
        </h1>

        {/* Subtext:
      - Scaled from text-base to 24px
      - max-w maintained for optimal readability line-lengths
  */}
        <p className="max-w-[850px] mx-auto text-slate-500 text-base sm:text-lg md:text-[24px] leading-[130%] mb-10 md:mb-[60px]">
          Empowering businesses and buildings with future-ready technology that
          works — seamlessly, securely, and efficiently.
        </p>
        <div className="flex justify-center">
    {/* RESPONSIVE BUTTON: 
      - Mobile/Small: Dark background (brisk-navy) for visibility on white background
      - Medium/Large: Semi-transparent white backdrop-blur as per Figma
  */}
  <div className="flex justify-center">
    <button className="rounded-full px-8 py-4 font-medium transition-all active:scale-95
      bg-brisk-navy-100 text-white 
      md:bg-white/20 md:backdrop-blur-md md:border md:border-white/30 md:text-white 
      hover:md:bg-white/30">
      Get more info
    </button>
  </div>
  </div>
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
