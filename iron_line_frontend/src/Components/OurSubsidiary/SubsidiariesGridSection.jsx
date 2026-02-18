import { useEffect, useState } from "react";
import Lower_Fars from "../../assets/Images/Lower_Fars.webp";
import KNPC from "../../assets/Images/KNPC.webp";
import Das_Island from "../../assets/Images/Das_Island.webp";
import Yibal_Khuff from "../../assets/Images/Yibal_Khuff.webp";
import Galkynysh from "../../assets/Images/Galkynysh.webp";
import Habshan from "../../assets/Images/Habshan.webp";
import Ruwais_Refinery from "../../assets/Images/Ruwais_Refinery.webp";
import Habshan_Ruwais from "../../assets/Images/Habshan_Ruwais.webp";
import Borouge_Ruwais from "../../assets/Images/Borouge_Ruwais.webp";
import AbuDhabi_seawage from "../../assets/Images/AbuDhabi_seawage.webp";
import Saadiyat_Island from "../../assets/Images/Saadiyat_Island.webp";
import STEP_Regional from "../../assets/Images/STEP_Regional.webp";
import Al_Sowah from "../../assets/Images/Al_Sowah.webp";
import Saudi_Kayan from "../../assets/Images/Saudi_Kayan.webp";
import Rihan_Heights from "../../assets/Images/Rihan_Heights.webp";
import ADNEC_Capital_Tower from "../../assets/Images/ADNEC_Capital_Tower.webp";
import Dubai_International_Airport from "../../assets/Images/Dubai_International_Airport.webp";
import Al_Maktoum from "../../assets/Images/Al_Maktoum.webp";
import Laggan_Tormore from "../../assets/Images/Laggan_Tormore.webp";
import Khuff_Gas from "../../assets/Images/Khuff_Gas.webp";

const ProjectExperienceSection = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setGroups([
        {
          heading: "Representative Mega-Project Experience (EPC/EPCM)",
          projects: [
            {
              title: "Lower Fars Heavy Oil Development – Kuwait",
              value: "~$4.0bn EPCC",
              image: Lower_Fars,
              description: "Heavy oil processing facilities, central processing complexes, pipelines and infrastructure."
            },
            {
              title: "Kuwait Clean Fuels Project – KNPC",
              value: "~$8–12bn Refinery Modernization",
              image: KNPC,
              description: "One of the largest downstream upgrade programs in the region."
            },
            {
              title: "Das Island Gas Processing Expansion – UAE",
              value: "~$1.2bn EPCM",
              image: Das_Island,
              description: "Live brownfield gas processing expansion for ADNOC Gas."
            },
            {
              title: "Yibal Khuff Gas Project – Oman",
              value: "~$900m EPCM",
              image: Yibal_Khuff,
              description: "Sour gas development and associated oil facilities."
            },
            {
              title: "Galkynysh Gas Field Development – Turkmenistan",
              value: "$1bn+ EPC",
              image: Galkynysh,
              description: "Large-scale gas processing facilities."
            },
            {
              title: "Habshan & Ruwais Gas Compression Projects – UAE",
              value: "$300m+ EPC",
              image: Habshan_Ruwais,
              description: "High-pressure compression supporting LNG and domestic gas supply."
            }
          ]
        },

        {
          heading: "Oil & Gas Infrastructure",
          projects: [
            {
              title: "Habshan-5 Gas Processing Plant – Abu Dhabi",
              value: "Major Regional Development",
              image: Habshan,
              description: "Large integrated gas development project delivered under stringent HSE, schedule, and quality requirements."
            },
            {
              title: "Ruwais Refinery Train 1 & 2 Upgrades – UAE",
              value: "Refinery Shutdown EPC Works",
              image: Ruwais_Refinery,
              description: "Process furnace and critical valve upgrades executed during live plant shutdowns."
            },
            {
              title: "Borouge Ruwais Petrochemical Facilities – UAE",
              value: "Petrochemical Infrastructure",
              image: Borouge_Ruwais,
              description: "Shutdown and construction works supporting petrochemical operations."
            }
          ]
        },

        {
          heading: "Utilities & Environmental Infrastructure",
          projects: [
            {
              title: "Abu Dhabi Sewage Treatment Plant – BOOT",
              value: "Wastewater Infrastructure",
              image: AbuDhabi_seawage,
              description: "Large wastewater treatment infrastructure developed under BOOT model."
            },
            {
              title: "Saadiyat Island STP2 – Abu Dhabi",
              value: "78,000 m³/day",
              image: Saadiyat_Island,
              description: "EPC delivery of a sewage treatment plant and main pumping station."
            },
            {
              title: "STEP Regional Odour Control Facilities",
              value: "Environmental Systems",
              image: STEP_Regional,
              description: "Advanced odour treatment systems."
            }
          ]
        },

        {
          heading: "District Cooling & Central Utilities",
          projects: [
            {
              title: "Al Sowah District Cooling Plant",
              value: "80,000 TR",
              image: Al_Sowah,
              description: "Large-scale district cooling infrastructure."
            },
            {
              title: "Rihan Heights District Cooling Plant",
              value: "District Cooling",
              image: Rihan_Heights,
              description: "EPC delivery supporting government and sports facilities."
            }
          ]
        },

        {
          heading: "Transport & Strategic Infrastructure",
          projects: [
            {
              title: "Dubai International Airport Infrastructure",
              value: "Aviation Infrastructure",
              image: Dubai_International_Airport,
              description: "Infrastructure works at a major aviation hub."
            },
            {
              title: "Al Maktoum International Airport – Dubai",
              value: "Airport Expansion",
              image: Al_Maktoum,
              description: "Infrastructure works for airport expansion."
            },
            {
              title: "ADNEC Capital Tower – Abu Dhabi",
              value: "Strategic Infrastructure",
              image: ADNEC_Capital_Tower,
              description: "Infrastructure works for landmark government facility."
            }
          ]
        },

        {
          heading: "International Industrial & Modular EPC Experience",
          projects: [
            {
              title: "Saudi Kayan Olefins Plant",
              value: "Industrial Modular EPC",
              image: Saudi_Kayan,
              description: "Large-scale process modules fabrication."
            },
            {
              title: "Laggan-Tormore Gas Development – UK",
              value: "Gas Development",
              image: Laggan_Tormore,
              description: "Modularization works for gas development."
            },
            {
              title: "Khuff Gas Dehydration & Oilfield Facilities",
              value: "Fabrication & Supply",
              image: Khuff_Gas,
              description: "Process skids, separators, critical equipment supply."
            }
          ]
        }
      ]);

      setLoading(false);
    }, 700);
  }, []);

  return (
    <section className="py-24 bg-[#F5F8FC]">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-pulse">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="bg-white rounded-3xl h-[340px]" />
            ))}
          </div>
        )}

        {!loading && groups.map((group, gi) => (
          <div key={gi}>
            <h2 className="text-2xl font-bold text-[#0F2A44] mb-10">
              {group.heading}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {group.projects.map((project, pi) => (
                <div key={pi} className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition hover:-translate-y-1">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="p-8">
                    <h3 className="text-lg font-semibold text-[#0F2A44] mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-blue-700 font-medium mb-4">
                      {project.value}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <p className="text-center text-xs text-gray-500 mt-16 max-w-4xl mx-auto">
          Project experience reflects the prior involvement of Iron Line’s leadership
          and technical team in major EPC and infrastructure projects delivered for
          government entities, national oil companies, and international operators.
        </p>

      </div>
    </section>
  );
};

export default ProjectExperienceSection;
