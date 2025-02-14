import React from 'react';
import { ExternalLink, ChevronRight } from 'lucide-react';

const Projects = () => {
  const americanAirlinesProjects = [
    {
      title: "Asset Lifecycle Management & Analytics",
      description: "Leading comprehensive asset lifecycle management initiatives for aircraft, engines, and ground equipment. Developing and implementing data-driven strategies for maintenance scheduling, cost optimization, and performance analytics to enhance operational efficiency and reduce maintenance costs.",
      icon: "🔹",
      tags: ["Asset Management", "Analytics", "Aviation", "Cost Optimization"]
    },
    {
      title: "Predictive Maintenance Implementation",
      description: "Spearheading the implementation of predictive maintenance strategies using advanced analytics and machine learning models. This initiative aims to optimize maintenance schedules, reduce unplanned downtime, and extend asset lifespan through data-driven decision making.",
      icon: "🔹",
      tags: ["Predictive Analytics", "Maintenance", "Machine Learning"]
    },
    {
      title: "Budget Forecasting & Financial Planning",
      description: "Developing comprehensive budget forecasts and financial plans for asset management operations. Creating detailed cost analysis models and ROI projections for maintenance investments and asset acquisitions.",
      icon: "🔹",
      tags: ["Financial Planning", "Budgeting", "Asset Management"]
    }
  ];

  const breakTheMatrixProjects = [
    {
      title: "Platform Development & Community Building",
      description: "Leading the development of Break The Matrix, a revolutionary platform dedicated to empowering individuals through thought-provoking podcast series and career mentorship initiatives. Building and nurturing a community where aspiring professionals connect with industry leaders.",
      icon: "🔹",
      tags: ["Platform Development", "Community Building", "Mentorship"]
    },
    {
      title: "Content Strategy & Production",
      description: "Developing and executing comprehensive content strategies, including podcast series, articles, and educational resources. Focusing on creating engaging, valuable content that challenges conventional thinking and provides actionable career guidance.",
      icon: "🔹",
      tags: ["Content Creation", "Strategy", "Education"]
    },
    {
      title: "Mentorship Program Development",
      description: "Designing and implementing structured mentorship programs that connect industry professionals with aspiring talents. Creating frameworks for meaningful mentor-mentee relationships and career development pathways.",
      icon: "🔹",
      tags: ["Mentorship", "Program Development", "Career Growth"]
    }
  ];

  const unileverProjects = [
    {
      title: "End-to-End Factory Launch Planning",
      description: "Led E2E planning for new factory launch in the Personal Care and Beauty Wellbeing business groups, managing SKU transitions, risk assessments, and post-launch evaluations to ensure a seamless supply network integration.",
      icon: "🔹",
      tags: ["Supply Chain", "Project Management", "Risk Assessment"]
    },
    {
      title: "Supply Planning System Integration",
      description: "Spearheaded ECC and Kinaxis Rapid Response (RR) integrations for new product setups, optimizing supply planning strategies for 353 SKUs and ensuring efficient distribution center deployments to improve order fulfillment.",
      icon: "🔹",
      tags: ["System Integration", "Supply Planning", "Distribution"]
    },
    {
      title: "Production Capacity & Network Optimization",
      description: "Developed network models and scenario analyses to evaluate long-term production capacity across Unilever sites. My proposed SKU sourcing strategies generated a projected $115M NSV and increased supply chain resilience by 11%.",
      icon: "🔹",
      tags: ["Network Optimization", "Capacity Planning", "Strategic Planning"]
    },
    {
      title: "Commissioning & Ramp-Up Planning",
      description: "Designed phase-wise commissioning and ramp-up plans across six manufacturing lines, coordinating incremental inventory impacts and aligning ramp-down strategies for existing networks.",
      icon: "🔹",
      tags: ["Manufacturing", "Inventory Management", "Process Planning"]
    },
    {
      title: "Business Intelligence & Reporting",
      description: "Created weekly BI reports for senior leadership, tracking project progress, cross-functional risks, and dependencies, enabling data-driven decision-making and faster project execution.",
      icon: "🔹",
      tags: ["Business Intelligence", "Reporting", "Analytics"]
    },
    {
      title: "Global Schedule Optimizer Tool Implementation",
      description: "Launched an end-of-line scheduling tool in two Unilever factories as part of a continuous improvement initiative, reducing changeover costs by $83,000 per line YOY.",
      icon: "🔹",
      tags: ["Process Optimization", "Cost Reduction"]
    }
  ];

  const relianceProjects = [
    {
      title: "Production Line Revamp Project",
      description: "Led a $17 million production line revamp project aimed at enhancing operational efficiency and throughput. By streamlining processes and implementing strategic improvements, I successfully reduced project completion time by 26%. This initiative not only improved production capacity but also resulted in significant cost savings, optimizing the overall manufacturing workflow.",
      icon: "🔹",
      tags: ["Project Management", "Manufacturing", "Process Optimization", "Cost Reduction"]
    },
    {
      title: "Inventory Optimization Using SAP and Predictive Analytics",
      description: "To improve inventory reliability and reduce operational disruptions, I leveraged SAP ERP and predictive analytics to manage stock levels effectively. By implementing a data-driven approach, I minimized emergency orders and stockouts, leading to a 16% improvement in inventory reliability. This initiative enhanced supply chain responsiveness and ensured seamless production continuity.",
      icon: "🔹",
      tags: ["SAP ERP", "Predictive Analytics", "Inventory Management", "Supply Chain"]
    },
    {
      title: "Operational Efficiency Enhancement",
      description: "Focusing on continuous improvement, I led a cross-functional initiative to enhance operational efficiency across manufacturing processes. By developing interactive dashboards for real-time tracking of key performance indicators (KPIs), I improved visibility into daily operations. This initiative resulted in a 30% boost in operational efficiency and a 17% reduction in downtime, driving significant cost and time savings.",
      icon: "🔹",
      tags: ["Operational Efficiency", "KPI Tracking", "Process Improvement", "Analytics"]
    }
  ];

  const cdkProjects = [
    {
      title: "Connected Vehicle Data Integration",
      description: "As part of CDK Global's digital transformation initiatives, I collaborated with AutoNation to integrate connected vehicle data into the CDK Lane & Service application. This integration led to a 32% improvement in service efficiency and customer satisfaction by enabling real-time diagnostics and personalized service recommendations.",
      icon: "🔹",
      tags: ["Digital Transformation", "Data Integration", "Customer Experience", "Automotive"]
    },
    {
      title: "UI Enhancements and Product Backlog Management",
      description: "I played a key role in coordinating the implementation of over 30 UI enhancements and product backlog items. Working closely with cross-functional teams, I ensured seamless feature deployment and minimized release bottlenecks, leading to an improved user experience and streamlined software updates.",
      icon: "🔹",
      tags: ["UI/UX", "Product Management", "Agile", "Feature Development"]
    },
    {
      title: "User Engagement Analytics",
      description: "To improve customer retention, I developed Amplitude dashboards to track product performance and user engagement metrics. By analyzing usage patterns, I identified key factors contributing to customer attrition and provided actionable insights that led to a 16% reduction in churn rates. This data-driven approach enabled the company to refine product offerings and enhance user experience.",
      icon: "🔹",
      tags: ["Analytics", "Customer Retention", "Product Analytics", "Data-Driven Insights"]
    }
  ];

  const jagritiProjects = [
    {
      title: "JADE Ambassador Initiative",
      description: "As a JADE Ambassador under the Jagriti Yatra initiative, I played a pivotal role in empowering district-level entrepreneurs by providing mentorship, facilitating market linkages, and fostering business development opportunities. I collaborated closely with grassroots business owners, helping them refine their strategies, streamline operations, and forge connections with industry leaders and investors. Through hands-on workshops and networking events, I enabled entrepreneurs to access critical resources, funding opportunities, and industry best practices in supply chain management, financial planning, and market expansion. By facilitating collaboration between local businesses and established professionals, I contributed to building stronger regional entrepreneurship ecosystems, enabling small businesses to drive sustainable economic growth within their communities.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
      tags: ["Entrepreneurship", "Mentorship", "Business Development"]
    },
    {
      title: "Humans of Jagriti Yatra",
      description: "Authored and curated 'Humans of Jagriti Yatra', a compelling collection of stories that captures the essence of entrepreneurial journeys across India. The book showcases inspiring narratives of change-makers, highlighting their challenges, innovations, and impact on local communities.",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800",
      link: "https://issuu.com/7vkreddi/docs/hojy",
      tags: ["Writing", "Storytelling", "Social Impact"]
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* American Airlines Projects Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <img
              src="https://i.imgur.com/XOpti8Q.png"
              alt="American Airlines logo"
              className="w-12 h-12 object-contain"
            />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              American Airlines Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {americanAirlinesProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{project.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Break The Matrix Projects Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <img
              src="https://i.imgur.com/VRs9EWK.jpeg"
              alt="Break The Matrix logo"
              className="w-12 h-12 object-contain rounded-full"
            />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Break The Matrix Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {breakTheMatrixProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{project.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Unilever Projects Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <img
              src="https://i.imgur.com/2uajNPG.png"
              alt="Unilever logo"
              className="w-12 h-12 object-contain"
            />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Unilever Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {unileverProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{project.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reliance Industries Projects Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <img
              src="https://i.imgur.com/vQ6Z0gb.png"
              alt="Reliance Industries logo"
              className="w-12 h-12 object-contain"
            />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Reliance Industries Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {relianceProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{project.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CDK Global Projects Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <img
              src="https://i.imgur.com/PqY8q3P.png"
              alt="CDK Global logo"
              className="w-12 h-12 object-contain"
            />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              CDK Global Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cdkProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{project.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Jagriti Yatra Projects */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <img
              src="https://i.imgur.com/EfhYseF.png"
              alt="Jagriti Yatra logo"
              className="w-12 h-12 object-contain rounded-full"
            />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Jagriti Yatra Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jagritiProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
                    >
                      Read More
                      <ExternalLink size={16} />
                    </a>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;