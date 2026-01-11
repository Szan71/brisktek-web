import React, { useState } from 'react';

const ContactUs = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // --- 1. HONEYPOT CHECK ---
    // If a bot fills this hidden field, we stop the execution immediately.
    if (e.target.aG9uZXlwb3Q.value !== "") {
      return; 
    }

    setStatus('Sending...');
    const formData = new FormData(e.target);

    try {
      // --- 2. SUBMIT TO ZOHO ---
      await fetch("https://crm.zoho.com/crm/WebToLeadForm", {
        method: "POST",
        mode: "no-cors", // Bypasses CORS for direct browser-to-Zoho submission
        body: formData
      });

      setStatus('Success! Your vision is now shared with BriskTek.');
      e.target.reset();
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contactus" className="w-full bg-white">
      {/* Dark Form Container */}
      <div className="bg-[#0B1221] px-[5%] py-16 md:py-24 lg:px-[120px]">
        <div className="mx-auto max-w-[1920px]">
          <h2 className="mb-10 font-['Inter'] text-[32px] font-bold text-white md:text-[48px]">
            Contact Us Today
          </h2>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
            
            {/* --- NEW ZOHO SECURITY TOKENS (from your new source code) --- */}
            <input type="hidden" name="xnQsjsdp" value="10ddd4ae503d076d2fd8410d468bf77c99c1ae2e5d9d7d3225f39a30eaa63ef7" />
            <input type="hidden" name="xmIwtLD" value="9cdd07367227f8a66aa53885241214ff6448ff5ed4f45544fa9134341e5d1d0ea2c28c0c08bc6f829745101a97589f35" />
            <input type="hidden" name="actionType" value="TGVhZHM=" />
            <input type="hidden" name="returnURL" value="null" />

            {/* --- INVISIBLE HONEYPOT FIELD --- */}
            <input 
              type="text" 
              name="aG9uZXlwb3Q" 
              style={{ display: 'none' }} 
              tabIndex="-1" 
              autoComplete="off" 
            />

            {/* First Name */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-slate-400">First Name</label>
              <input 
                name="First Name" 
                type="text" 
                placeholder="Enter first name" 
                className="rounded-lg bg-slate-800/50 p-4 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Last Name (Required by Zoho) */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-slate-400">Last Name *</label>
              <input 
                required
                name="Last Name" 
                type="text" 
                placeholder="Enter last name" 
                className="rounded-lg bg-slate-800/50 p-4 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-slate-400">Email</label>
              <input 
                name="Email"
                type="email" 
                placeholder="Enter email address" 
                className="rounded-lg bg-slate-800/50 p-4 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Phone */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-slate-400">Phone</label>
              <input 
                name="Phone"
                type="tel" 
                placeholder="Enter phone number" 
                className="rounded-lg bg-slate-800/50 p-4 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Description (Message) */}
            <div className="flex flex-col md:col-span-2">
              <label className="mb-2 text-sm font-medium text-slate-400">Brief Message</label>
              <textarea 
                name="Description"
                rows="4" 
                placeholder="Write your message here" 
                className="rounded-lg bg-slate-800/50 p-4 text-white outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            
            <div className="md:col-span-2 flex flex-col gap-4">
              <button className="w-fit rounded-lg bg-blue-600 px-8 py-4 font-bold text-white transition-all hover:bg-blue-700 active:scale-95">
                Submit
              </button>
              {status && (
                <p className={`text-sm font-medium ${status.includes('Error') || status.includes('wrong') ? 'text-red-400' : 'text-blue-400'}`}>
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* CTA Bottom Section */}
      <div className="px-[5%] py-20 lg:px-[120px]">
        <div className="mx-auto max-w-[1920px] text-right">
          <h3 className="mb-4 font-['Inter'] text-[42px] font-bold tracking-tight text-[#0B1221] md:text-[64px]">
            Let's Build Smarter, Together.
          </h3>
          <p className="ml-auto max-w-[500px] text-base font-medium">
            Get in touch today to see how BriskTek can simplify your technology and help your business grow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;