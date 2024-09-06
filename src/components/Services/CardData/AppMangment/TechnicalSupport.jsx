import React from "react";

const TechnicalSupport = () => {
  const services = [
    {
      id: 1,
      title: "Enhanced Functionality Add-Ons",
      description:
        "Enhance and extend your ERP with custom add-ons tailored to your specific needs.",
    },
    {
      id: 2,
      title: "Application Integration",
      description:
        "Seamlessly integrate various applications to streamline workflows and improve data consistency.",
    },
    {
      id: 3,
      title: "Development Services (SAP)",
      description:
        "Expert development in ABAP, HANA, UI5, FIORI, WebGemba InfoTech, FPM, Workflow, Adobe Forms, IDOC/EDI, PI/PO, SCI, BI/BW.",
    },
    {
      id: 4,
      title: "Development Services (Non-SAP)",
      description:
        "Extend your core ERP application with modern technologies like Angular, Node, PostgreSQL, etc.",
    },
    {
      id: 5,
      title: "S/4 HANA Migration Support",
      description:
        "Smooth upgrades and migrations to SAP S/4 HANA for enhanced performance and functionality.",
    },
    {
      id: 6,
      title: "Data Migration",
      description:
        "Efficiently transfer and transform your data to ensure continuity and accuracy during transitions.",
    },
  ];

  return (
    <div>
      <div className="w-full mx-auto my-8 text-center max-w-[600px] ">
        <div className="text-4xl font-bold text-gray-800">
          Technical Support Services
        </div>
        <div className="text-gray-600 my-2 ">
          Our technical services are crafted to enhance and streamline your ERP
          system, leveraging smart and efficient strategies. We focus on
          maximizing the value of your application portfolio, ensuring you
          achieve the best possible outcomes.
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 mx-6 mb-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="w-full sm:w-[400px] h-[200px] bg-slate-200 p-5 rounded-lg shadow-lg"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white bg-cardColor font-custom p-2 h-[70px] text-center items-center justify-center">
                {service.title}
              </h3>
              <p className="mt-5 text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSupport;
