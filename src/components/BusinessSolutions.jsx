import React from 'react';

const BusinessSolutions = () => {
  return (
    /* Background matches the light grey triangle fill (#F9F9F9) */
    <section>
      <div className="w-full px-5 py-20 md:px-12 md:py-32 lg:py-[120px]">
<div className="mx-auto max-w-[1920px]">
        
        {/* --- SECTION HEADER --- */}
        <div className="mb-[100px] md:mb-[160px] flex flex-col items-center text-center">
          {/* Subheading: Inter SemiBold */}
          <span className="mb-4 font-semibold tracking-normal text-[#2348FF] font-['Inter'] font-medium text-[36px] sm:text-[54px] lg:text-[80px]">
            Business IT Solutions
          </span>
          
          {/* Main Heading exact replica: 
              - Inter Medium (500), 80px Size
              - Line height 125%, Letter spacing -4px
              - Max Width 1329px 
          */}
          <h2 className="max-w-[1329px] font-['Inter'] font-medium text-[36px] sm:text-[54px] lg:text-[80px] leading-[125%] tracking-[-4px] text-slate-900">
            Helping your business stay <br className="hidden lg:block" />
            connected, protected, and productive.
          </h2>
        </div>

        {/* --- SOLUTIONS LIST --- */}
        <div className="flex flex-col gap-[120px] md:gap-[200px]">
          
          {/* Item 1: Website Design */}
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
            <div className="w-full max-w-[540px] text-left order-2 lg:order-1">
              <span className="mb-6 inline-block rounded-full border border-slate-200 px-4 py-1.5 text-[14px] font-medium text-slate-400">
                Business IT Solution
              </span>
              <h3 className="mb-6 text-[32px] md:text-[48px] lg:text-[64px] font-bold text-slate-900 leading-[110%] tracking-tight">
                Website Design <br /> & Development
              </h3>
              <p className="text-[18px] md:text-[20px] leading-relaxed text-slate-500 max-w-[420px]">
                Modern, responsive websites that reflect your brand and drive growth.
              </p>
            </div>
            {/* Image container replica */}
            <div className="w-full lg:w-[50%] h-[400px] md:h-[600px] overflow-visible relative order-1 lg:order-2">
              <img 
                src="/src/assets/BusinessSol1.png" 
                alt="Website Development" 
                className="h-full w-full object-cover rounded-[36px]"
              />
              {/* Floating cursor element replica */}
              <img 
                src="/cursor-icon.png" 
                alt="" 
                className="absolute -bottom-10 -right-10 w-32 h-32 hidden md:block" 
              />
            </div>
          </div>

          {/* Item 2: IT Consulting (Reversed) */}
          <div className="flex flex-col items-center gap-12 lg:flex-row-reverse lg:justify-between">
            <div className="w-full max-w-[540px] text-left order-2">
              <span className="mb-6 inline-block rounded-full border border-slate-200 px-4 py-1.5 text-[14px] font-medium text-slate-400">
                Business IT Solution
              </span>
              <h3 className="mb-6 text-[32px] md:text-[48px] lg:text-[64px] font-bold text-slate-900 leading-[110%] tracking-tight">
                IT Consulting
              </h3>
              <p className="text-[18px] md:text-[20px] leading-relaxed text-slate-500 max-w-[420px]">
                Strategic guidance to choose the right systems, tools, and infrastructure.
              </p>
            </div>
            <div className="w-full lg:w-[50%] h-[400px] md:h-[600px] overflow-hidden order-1">
              <img 
                src="/src/assets/BusinessSol2.png" 
                alt="IT Consulting" 
                className="h-full w-full object-cover rounded-[36px]"
              />
            </div>
          </div>

          {/* Item 3: Computer & Laptop Support */}
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
            <div className="w-full max-w-[540px] text-left order-2 lg:order-1">
              <span className="mb-6 inline-block rounded-full border border-slate-200 px-4 py-1.5 text-[14px] font-medium text-slate-400">
                Business IT Solution
              </span>
              <h3 className="mb-6 text-[32px] md:text-[48px] lg:text-[64px] font-bold text-slate-900 leading-[110%] tracking-tight">
                Computer & <br /> Laptop Support
              </h3>
              <p className="text-[18px] md:text-[20px] leading-relaxed text-slate-500 max-w-[420px]">
                Repairs, upgrades, and proactive maintenance for smooth performance.
              </p>
            </div>
            <div className="w-full lg:w-[50%] h-[400px] md:h-[600px] overflow-visible relative order-1 lg:order-2">
              <img 
                src="/src/assets/BusinessSol3.png" 
                alt="Computer Support" 
                className="h-full w-full object-cover rounded-[36px]"
              />
              {/* Floating chain element replica */}
              <img 
                src="/src/assets/chain.png" 
                alt="" 
                className="absolute -bottom-15 -left-12 w-50 h-50 hidden md:block" 
              />
            </div>
          </div>

        </div>

        {/* --- BLUE GEOMETRIC TRIANGLE FOOTER --- */}
        

      </div>
      </div>
      <div className="relative mt-[150px] md:mt-[250px] h-[150px] md:h-[350px] w-full">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 300"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-x-0 bottom-0"
          >
            <path d="M0 0L720 300L1440 0V300H0V0Z" fill="#2348FF" />
          </svg>
        </div>
        <div className="relative w-full px-5 py-20 md:px-12 md:py-32 lg:py-[120px]"
        style={{ background: "linear-gradient(180deg, #2348FF 0%, #68FFF7 100%)"}}>
          

        <div className="mx-auto max-w-[1920px] relative z-10">
          {/* HEADER */}
          <div className="mb-[60px] md:mb-[100px] flex flex-col items-center text-center">
            <div className="mb-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-sm font-bold text-white">
              2
            </div>
            <h4 className="mb-4 text-[24px] font-semibold text-white/90 font-['Inter'] underline decoration-white/40 underline-offset-8">
              Strata Technology Solutions
            </h4>
            <h2 className="max-w-[1000px] font-['Inter'] font-medium text-[32px] sm:text-[48px] lg:text-[64px] leading-[120%] tracking-tight text-white">
              Reliable tech infrastructure for residential and commercial strata properties.
            </h2>
          </div>
          {/* --- STRATA CARDS GRID --- */}
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-8 md:grid-cols-2">
          
          {/* Card 1: Tech Setup */}
          <div className="flex flex-col rounded-[32px] bg-white p-8 md:p-10 shadow-xl transition-all hover:scale-[1.02]">
            <span className="mb-6 inline-block w-fit rounded-full border border-slate-200 px-4 py-1.5 text-[12px] font-medium text-slate-400">
              Business IT Solution
            </span>
            <div className="mb-8 overflow-hidden rounded-2xl h-[240px] md:h-[280px]">
              <img 
                src="/src/assets/stratabuilding.png" 
                alt="Strata Buildings" 
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mb-4 text-[28px] md:text-[36px] font-bold text-slate-900 leading-tight">
              <span className="text-[#2348FF]">Tech Setup</span> for <br /> Strata Buildings
            </h3>
            <p className="text-[14px] leading-relaxed text-slate-400">
              End-to-end setup of networking, communication, and control systems.
            </p>
          </div>

          {/* Card 2: Infrastructure Setup */}
          <div className="flex flex-col rounded-[32px] bg-white p-8 md:p-10 shadow-xl transition-all hover:scale-[1.02]">
            <span className="mb-6 inline-block w-fit rounded-full border border-slate-200 px-4 py-1.5 text-[12px] font-medium text-slate-400">
              Business IT Solution
            </span>
            <div className="mb-8 overflow-hidden rounded-2xl h-[240px] md:h-[280px]">
              <img 
                src="/src/assets/infrasetup.png" 
                alt="Infrastructure Setup" 
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mb-4 text-[28px] md:text-[36px] font-bold text-slate-900 leading-tight">
              <span className="text-[#2348FF]">Infrastructure</span> <br /> Setup
            </h3>
            <p className="text-[14px] leading-relaxed text-slate-400">
              Structured cabling, CCTV, access control, and smart integrations for modern buildings.
            </p>
          </div>

        </div>

          {/* CARDS GRID */}
          <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-8 md:grid-cols-2">
            {/* ... (Your Strata Cards) ... */}
          </div>
        </div>
        </div>
    </section>
  );
};

export default BusinessSolutions;