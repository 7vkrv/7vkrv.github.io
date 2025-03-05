import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const americanAirlinesProjects = [
    {
      title: "Asset Lifecycle Planning & Forecasting",
      description: "Managing asset lifecycle planning and forecasting for engines. Developing and implementing data-driven strategies for maintenance scheduling, cost optimization, and performance analytics to enhance operational efficiency and reduce maintenance costs.",
      icon: "🔹",
      tags: ["Asset Management", "Analytics", "Cost Optimization"],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: "Budget Forecasting & Financial Planning",
      description: "Developing comprehensive budget forecasts and financial plans for asset management operations. Creating detailed cost analysis models and ROI projections for maintenance investments and asset acquisitions.",
      icon: "🔹",
      tags: ["Financial Planning", "Budgeting", "Asset Management"],
      color: 'from-cyan-600 to-teal-600'
    }
  ];

  const breakTheMatrixProjects = [
    {
      title: "Community Building",
      description: "Leading the development of Break The Matrix, a platform dedicated to empowering individuals through thought-provoking podcast series and career mentorship initiatives. Building and nurturing a community where aspiring professionals connect with industry leaders.",
      icon: "🔹",
      tags: ["Platform Development", "Community Building", "Mentorship"],
      color: 'from-purple-600 to-indigo-600'
    }
  ];

  const unileverProjects = [
    {
      title: "End-to-End Factory Launch Planning",
      description: "Led E2E planning for new factory launch in the Personal Care and Beauty Wellbeing business groups, managing SKU transitions, risk assessments, and post-launch evaluations to ensure a seamless supply network integration.",
      icon: "🔹",
      tags: ["Supply Chain", "Project Management", "Risk Assessment"],
      color: 'from-teal-600 to-emerald-600'
    },
    {
      title: "Supply Planning System Integration",
      description: "Spearheaded ECC and Kinaxis Rapid Response (RR) integrations for new product setups, optimizing supply planning strategies for 353 SKUs and ensuring efficient distribution center deployments to improve order fulfillment.",
      icon: "🔹",
      tags: ["System Integration", "Supply Planning", "Distribution"],
      color: 'from-emerald-600 to-green-600'
    },
    {
      title: "Production Capacity & Network Optimization",
      description: "Developed network models and scenario analyses to evaluate long-term production capacity across Unilever sites. My proposed SKU sourcing strategies generated a projected $115M NSV and increased supply chain resilience by 11%.",
      icon: "🔹",
      tags: ["Network Optimization", "Capacity Planning", "Strategic Planning"],
      color: 'from-green-600 to-lime-600'
    },
    {
      title: "Commissioning & Ramp-Up Planning",
      description: "Designed phase-wise commissioning and ramp-up plans across six manufacturing lines, coordinating incremental inventory impacts and aligning ramp-down strategies for existing networks.",
      icon: "🔹",
      tags: ["Manufacturing", "Inventory Management", "Process Planning"],
      color: 'from-lime-600 to-yellow-600'
    },
    {
      title: "Business Intelligence & Reporting",
      description: "Created weekly BI reports for senior leadership, tracking project progress, cross-functional risks, and dependencies, enabling data-driven decision-making and faster project execution.",
      icon: "🔹",
      tags: ["Business Intelligence", "Reporting", "Analytics"],
      color: 'from-yellow-600 to-amber-600'
    },
    {
      title: "Global Schedule Optimizer Tool Implementation",
      description: "Launched an end-of-line scheduling tool in two Unilever factories as part of a continuous improvement initiative, reducing changeover costs by $83,000 per line YOY.",
      icon: "🔹",
      tags: ["Process Optimization", "Cost Reduction"],
      color: 'from-amber-600 to-orange-600'
    }
  ];

  const relianceProjects = [
    {
      title: "Production Line Revamp Project",
      description: "Led a $17 million production line revamp project aimed at enhancing operational efficiency and throughput. By streamlining processes and implementing strategic improvements, I successfully reduced project completion time by 26%. This initiative not only improved production capacity but also resulted in significant cost savings, optimizing the overall manufacturing workflow.",
      icon: "🔹",
      tags: ["Project Management", "Manufacturing", "Process Optimization", "Cost Reduction"],
      color: 'from-rose-600 to-pink-600'
    },
    {
      title: "Inventory Optimization Using SAP and Predictive Analytics",
      description: "To improve inventory reliability and reduce operational disruptions, I leveraged SAP ERP and predictive analytics to manage stock levels effectively. By implementing a data-driven approach, I minimized emergency orders and stockouts, leading to a 16% improvement in inventory reliability. This initiative enhanced supply chain responsiveness and ensured seamless production continuity.",
      icon: "🔹",
      tags: ["SAP ERP", "Predictive Analytics", "Inventory Management", "Supply Chain"],
      color: 'from-pink-600 to-fuchsia-600'
    },
    {
      title: "Operational Efficiency Enhancement",
      description: "Focusing on continuous improvement, I led a cross-functional initiative to enhance operational efficiency across manufacturing processes. By developing interactive dashboards for real-time tracking of key performance indicators (KPIs), I improved visibility into daily operations. This initiative resulted in a 30% boost in operational efficiency and a 17% reduction in downtime, driving significant cost and time savings.",
      icon: "🔹",
      tags: ["Operational Efficiency", "KPI Tracking", "Process Improvement", "Analytics"],
      color: 'from-fuchsia-600 to-purple-600'
    }
  ];

  const cdkProjects = [
    {
      title: "Connected Vehicle Data Integration",
      description: "As part of CDK Global's digital transformation initiatives, I collaborated with AutoNation to integrate connected vehicle data into the CDK Lane & Service application. This integration led to a 32% improvement in service efficiency and customer satisfaction by enabling real-time diagnostics and personalized service recommendations.",
      icon: "🔹",
      tags: ["Digital Transformation", "Data Integration", "Customer Experience", "Automotive"],
      color: 'from-violet-600 to-indigo-600'
    },
    {
      title: "UI Enhancements and Product Backlog Management",
      description: "I played a key role in coordinating the implementation of over 30 UI enhancements and product backlog items. Working closely with cross-functional teams, I ensured seamless feature deployment and minimized release bottlenecks, leading to an improved user experience and streamlined software updates.",
      icon: "🔹",
      tags: ["UI/UX", "Product Management", "Agile", "Feature Development"],
      color: 'from-indigo-600 to-blue-600'
    },
    {
      title: "User Engagement Analytics",
      description: "To improve customer retention, I developed Amplitude dashboards to track product performance and user engagement metrics. By analyzing usage patterns, I identified key factors contributing to customer attrition and provided actionable insights that led to a 16% reduction in churn rates. This data-driven approach enabled the company to refine product offerings and enhance user experience.",
      icon: "🔹",
      tags: ["Analytics", "Customer Retention", "Product Analytics", "Data-Driven Insights"],
      color: 'from-blue-600 to-cyan-600'
    }
  ];

  const jagritiProjects = [
    {
      title: "JADE Ambassador Initiative",
      description: "As a JADE Ambassador under the Jagriti Yatra initiative, I played a pivotal role in empowering district-level entrepreneurs by providing mentorship, facilitating market linkages, and fostering business development opportunities. I collaborated closely with grassroots business owners, helping them refine their strategies, streamline operations, and forge connections with industry leaders and investors. Through hands-on workshops and networking events, I enabled entrepreneurs to access critical resources, funding opportunities, and industry best practices in supply chain management, financial planning, and market expansion. By facilitating collaboration between local businesses and established professionals, I contributed to building stronger regional entrepreneurship ecosystems, enabling small businesses to drive sustainable economic growth within their communities.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
      tags: ["Entrepreneurship", "Mentorship", "Business Development"],
      color: 'from-emerald-600 to-green-600'
    },
    {
      title: "Humans of Jagriti Yatra",
      description: "Authored and curated 'Humans of Jagriti Yatra', a compelling collection of stories that captures the essence of entrepreneurial journeys across India. The book showcases inspiring narratives of change-makers, highlighting their challenges, innovations, and impact on local communities.",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800",
      link: "https://issuu.com/7vkreddi/docs/hojy",
      tags: ["Writing", "Storytelling", "Social Impact"],
      color: 'from-green-600 to-lime-600'
    }
  ];

  const renderProjectSection = (title: string, logo: string, projects: any[], gradientColor: string = 'from-blue-600 to-cyan-500') => (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-8">
        <div className="relative group">
          <div className={`absolute -inset-1 bg-gradient-to-r ${gradientColor} rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
          <img
            src={logo}
            alt={`${title} logo`}
            className="relative w-12 h-12 object-contain transform group-hover:scale-105 transition duration-300"
          />
        </div>
        <h2 className={`text-2xl font-bold bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent`}>
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative"
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
            <div className="relative bg-gray-900 rounded-lg p-6 shadow-lg transform group-hover:translate-y-[-4px] transition-all duration-300">
              {project.image ? (
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-25`}></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-500"
                  />
                </div>
              ) : null}
              <div className="flex items-start gap-3">
                <span className="text-2xl transform group-hover:scale-110 transition-transform">{project.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-4 transform group-hover:translate-x-1 transition-all"
                    >
                      Read More
                      <ExternalLink size={16} />
                    </a>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string, tagIndex: number) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm transform hover:scale-105 transition-all duration-300 hover:shadow-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {renderProjectSection('American Airlines Projects', 'https://i.imgur.com/XOpti8Q.png', americanAirlinesProjects, 'from-blue-600 to-cyan-500')}
        {renderProjectSection('Break The Matrix Projects', 'https://i.imgur.com/VRs9EWK.jpeg', breakTheMatrixProjects, 'from-purple-600 to-indigo-600')}
        {renderProjectSection('Unilever Projects', 'https://i.imgur.com/2uajNPG.png', unileverProjects, 'from-teal-600 to-emerald-600')}
        {renderProjectSection('Reliance Industries Projects', 'https://i.imgur.com/vQ6Z0gb.png', relianceProjects, 'from-rose-600 to-pink-600')}
        {renderProjectSection('CDK Global Projects', 'https://i.imgur.com/PqY8q3P.png', cdkProjects, 'from-violet-600 to-indigo-600')}
        {renderProjectSection('Jagriti Yatra Projects', 'https://i.imgur.com/EfhYseF.png', jagritiProjects, 'from-emerald-600 to-green-600')}
      </div>
    </section>
  );
};

export default Projects;