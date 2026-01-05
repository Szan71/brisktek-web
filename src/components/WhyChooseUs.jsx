import React from 'react';
import architecturalBackground from '../assets/tallbuildings.png';

const WhyChooseUs = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      
      {/* --- HEADER CONTENT --- */}
      <div className="mx-auto max-w-[1920px] px-[5%] pt-20 md:pt-32 lg:px-[120px] lg:pt-40">
        <div className="mb-16 text-left">
          <h2 className="mb-4 font-['Inter'] text-[42px] font-bold leading-[110%] tracking-tight text-[#0B1221] md:text-[64px] lg:text-[80px]">
            Why Choose <br /> BriskTek?
          </h2>
          <p className="text-[14px] font-medium text-slate-400 md:text-base">
            Why Businesses and Builders Trust BriskTek.
          </p>
        </div>
      </div>

      {/* --- TRANSITION CONTAINER: IMAGE + ARCH + NAVY BG --- */}
      <div className="relative w-full flex flex-col">
        
        {/* Top: Background Image */}
        <div 
          className="relative h-[450px] w-full md:h-[600px] lg:h-[750px]"
          style={{
            backgroundImage: `url(${architecturalBackground})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* THE DOWNWARD POINTED ARCH */}
          <div className="absolute inset-x-0 bottom-0 h-24 w-full md:h-32 lg:h-[220px] z-10">
            <svg
              width="100%"
              height="100.5%"
              viewBox="0 0 1440 220"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M0 0L720 220L1440 0V220H0Z" 
                fill="#0B1221" /* brisk-navy-100 */
              />
            </svg>
          </div>
        </div>

        {/* Bottom: Solid Navy Color */}
        {/* Set height relative to card overflow */}
        <div className="h-[400px] md:h-[500px] lg:h-[650px] w-full bg-[#0B1221]"></div>

        {/* --- FLOATING CARDS: Fixed Positioning --- */}
        {/* Positioning logic: 
            By using 'absolute' and a specific 'bottom' offset, the cards will sit 
            precisely where the image meets the navy background.
        */}
        <div className="absolute inset-x-0 bottom-10 z-20 md:bottom-20 lg:bottom-28">
          <div className="mx-auto max-w-[1920px] px-[5%] lg:px-[120px]">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 items-end">
              
              {/* Card 1: Innovation */}
              <div className="flex h-[300px] md:h-[350px] lg:h-[400px] flex-col justify-between rounded-[32px] bg-white p-8 shadow-2xl transition-all hover:scale-[1.02] md:p-10">
                <h4 className="text-right text-[18px] font-bold text-[#0B1221]">Innovation</h4>
                <p className="text-[14px] leading-relaxed text-slate-500 md:text-[16px]">
                  We deliver scalable, future-proof technology that evolves with your business.
                </p>
              </div>

              {/* Card 2: Reliability */}
              <div className="flex h-[360px] md:h-[420px] lg:h-[480px] flex-col justify-between rounded-[32px] bg-white p-8 shadow-2xl transition-all hover:scale-[1.02] md:p-10">
                <h4 className="text-right text-[18px] font-bold text-[#0B1221]">Reliability</h4>
                <p className="text-[14px] leading-relaxed text-slate-500 md:text-[16px]">
                  Seamless operations backed by trusted support.
                </p>
              </div>

              {/* Card 3: Customer Success */}
              <div className="flex h-[420px] md:h-[520px] lg:h-[620px] flex-col justify-between rounded-[32px] bg-white p-8 shadow-2xl transition-all hover:scale-[1.02] md:p-10 sm:col-span-2 lg:col-span-1">
                <h4 className="text-right text-[18px] font-bold text-[#0B1221]">Customer Success</h4>
                <p className="text-[14px] leading-relaxed text-slate-500 md:text-[16px]">
                  Your growth is our mission. We build partnerships, not just solutions.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;