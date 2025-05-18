import { Accordion, AccordionItem } from "@heroui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ArtifactFaq = () => {
  // Simple scroll animation
  useGSAP(() => {
    gsap.from(".faq-section", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".faq-section",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    gsap.from(".accordion-item", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".faq-section",
        start: "top 70%",
        toggleActions: "play none none none"
      }
    });
  }, []);

  return (
    <div 
      id="artifact-faq"
      className="faq-section bg-[#EAE4D5] dark:bg-[#1A1A1A]  dark:text-[#e6d9c4] py-16 px-4 md:px-12"
    >
      <div className="w-[89%] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#9C6F42] dark:text-[#E67E22] mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-[#9C6F42] dark:bg-[#E67E22] mx-auto"></div>
        </div>
        
        <Accordion 
          selectionMode="multiple" 
          className="bg-white/10 dark:bg-[#2a2a2a] rounded-lg shadow-lg shadow-black/30 overflow-hidden"
        >
          {/* First Accordion Item */}
          <AccordionItem 
            key="dating" 
            aria-label="Dating Artifacts" 
            title="How do archaeologists determine artifact ages?"
            className="accordion-item border-b border-[#5D5453] last:border-b-0"
            titleClassName="text-lg font-semibold p-4 hover:bg-white/5 dark:hover:bg-[#3a3a3a] transition-colors flex items-center"
            contentClassName="p-4 pt-0 bg-white/5 dark:bg-[#1f1f1f]"
          >
            <div className="pl-2">
              <p className="mb-3">We use multiple scientific dating methods:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-medium">Radiocarbon dating:</span> For organic materials up to 50,000 years old</li>
                <li><span className="font-medium">Thermoluminescence:</span> For ceramics and burnt stone artifacts</li>
                <li><span className="font-medium">Stratigraphic analysis:</span> Examining soil layers at excavation sites</li>
                <li><span className="font-medium">Typological comparison:</span> Matching with artifacts of known age</li>
              </ul>
            </div>
          </AccordionItem>

          {/* Second Accordion Item */}
          <AccordionItem 
            key="preservation" 
            aria-label="Preservation" 
            title="What conservation methods protect fragile artifacts?"
            className="accordion-item border-b border-[#5D5453] last:border-b-0"
            titleClassName="text-lg font-semibold p-4 hover:bg-white/5 dark:hover:bg-[#3a3a3a] transition-colors flex items-center"
            contentClassName="p-4 pt-0 bg-white/5 dark:bg-[#1f1f1f]"
          >
            <div className="pl-2">
              <p className="mb-3">Our conservation laboratory uses:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Climate-controlled cases (22°C ±1°, 45% RH ±5%)</li>
                <li>Oxygen-free display cases for metal artifacts</li>
                <li>Micro-abrasion cleaning with surgical precision</li>
                <li>3D documentation before any restoration</li>
                <li>Reversible adhesives and consolidants</li>
              </ul>
            </div>
          </AccordionItem>

          {/* Third Accordion Item */}
          <AccordionItem 
            key="authenticity" 
            aria-label="Authenticity" 
            title="How is artifact authenticity verified?"
            className="accordion-item border-b border-[#5D5453] last:border-b-0"
            titleClassName="text-lg font-semibold p-4 hover:bg-white/5 dark:hover:bg-[#3a3a3a] transition-colors flex items-center"
            contentClassName="p-4 pt-0 bg-white/5 dark:bg-[#1f1f1f]"
          >
            <div className="pl-2">
              <p className="mb-3">Our authentication process includes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>X-ray fluorescence (XRF) elemental analysis</li>
                <li>Scanning electron microscopy (SEM) examination</li>
                <li>Patina analysis under specialized lighting</li>
                <li>Provenance research through historical records</li>
                <li>Comparison with documented excavation finds</li>
              </ul>
            </div>
          </AccordionItem>

          {/* Fourth Accordion Item */}
          <AccordionItem 
            key="donations" 
            aria-label="Donations" 
            title="Can I donate artifacts to the museum collection?"
            className="accordion-item border-b border-[#5D5453] last:border-b-0"
            titleClassName="text-lg font-semibold p-4 hover:bg-white/5 dark:hover:bg-[#3a3a3a] transition-colors flex items-center"
            contentClassName="p-4 pt-0 bg-white/5 dark:bg-[#1f1f1f]"
          >
            <div className="pl-2">
              <p className="mb-3">Our acquisition policy requires:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Complete ownership documentation</li>
                <li>Export certificates if originating abroad</li>
                <li>Approval by our Collections Committee</li>
                <li>No items acquired after 1970 UNESCO convention</li>
              </ul>
              <p className="text-[#9C6F42] dark:text-[#E67E22] font-medium">
                Contact our registrar at: <br />
                <span className="underline">collections@egypt-museum.org</span>
              </p>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ArtifactFaq;