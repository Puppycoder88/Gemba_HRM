import React from 'react';

const vendorData = [
    {
      title: "Supplier Onboarding",
      description: "Automated processes for quickly integrating new suppliers into your system, including document submission, verification, and compliance checks."
    },
    {
      title: "Contract Management",
      description: "Centralized storage and management of contracts, with features for tracking expiration dates, renewals, and amendments to ensure compliance and mitigate risks."
    },
    {
      title: "Performance Monitoring",
      description: "Tools for evaluating supplier performance through metrics and KPIs, including on-time delivery, quality of goods or services, and overall reliability."
    },
    {
      title: "Procurement and Ordering",
      description: "Streamlined processes for placing orders, managing purchase requisitions, and handling approvals, all within a single, user-friendly interface."
    },
    {
      title: "Communication and Collaboration",
      description: "Integrated messaging and collaboration tools to facilitate real-time communication between your team and suppliers, enhancing transparency and coordination."
    },
    {
      title: "Analytics and Reporting",
      description: "Advanced reporting and analytics features for gaining insights into procurement activities, supplier performance, and spending patterns, enabling data-driven decision-making."
    }
  ];
  

const Card = ({ title, description }) => (
  <div className="w-full sm:w-[400px] h-[216px] bg-slate-200 p-4 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold text-white bg-cardColor font-custom my-2 h-[70px] text-center items-center justify-center-">{title}</h2>
    <p className="text-gray-600 my-2">{description}</p>
  </div>
);

const VendorData = () => (
  <div className="flex flex-wrap items-center justify-between gap-4 mx-6 mt-5 mb-10">
    {vendorData.map((card, index) => (
      <Card key={index} title={card.title} description={card.description} />
    ))}
  </div>
);

export default VendorData;