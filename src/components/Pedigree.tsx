import React from 'react';
import { ExternalLink, Award, Medal, MessageCircle } from 'lucide-react';

const Pedigree = () => {
  const experiences = [
    {
      company: 'Break The Matrix',
      logo: 'https://i.imgur.com/VRs9EWK.jpeg auto=format&fit=crop&q=80&w=100',
      website: 'https://breakthematrix.org',
      role: 'Building',
      period: 'Aug 2023 - Forever',
      description: 'Leading the development of Break The Matrix, a platform dedicated to empowering individuals through thought-provoking podcast series and career mentorship initiatives. Spearheading content creation, guest curation, and strategic growth to inspire unconventional thinking, challenge norms, and provide actionable career guidance. Focused on fostering a community where aspiring professionals and industry leaders connect, share insights, and break through traditional career barriers.'
    },
    {
      company: 'American Airlines',
      logo: 'https://i.imgur.com/XOpti8Q.png auto=format&fit=crop&q=80&w=100',
      website: 'https://www.aa.com',
      role: 'Analyst/ Senior Analyst',
      period: 'Jan 2024 - Present',
      description: "As an Asset Management Analyst at American Airlines, I analyze and optimize the airline's assets—aircraft, engines, and ground equipment—to maximize performance, lifespan, and cost efficiency. I track maintenance schedules, assess financial impacts, and develop lifecycle strategies to ensure compliance and operational reliability. By leveraging data insights and collaborating with engineering, finance, and operations teams, I help drive strategic decisions on asset acquisition, utilization, and long-term planning."
    },
    {
      company: 'Unilever',
      logo: 'https://i.imgur.com/2uajNPG.png',
      website: 'https://www.unilever.com',
      role: 'Supply Chain Planning Lead, Project Management Office',
      period: 'Jan 2023 - Jan 2025',
      description: 'As a Supply Chain Planning Lead at Unilever, USA, I led end-to-end (E2E) supply chain planning and project management for factory launches in the Personal Care and Beauty Wellbeing business groups. I managed SKU transitions, conducted risk assessments, and ensured seamless post-launch evaluations. I also spearheaded system readiness for ECC and Kinaxis Rapid Response (RR) integrations, optimizing supply planning for 353 SKUs and ensuring efficient distribution center deployments. Additionally, I developed network models and long-term production capacity strategies across Unilever sites, optimizing SKU sourcing and improving resilience. Through data-driven insights and BI reporting, I enabled senior leadership to make informed decisions, accelerate project execution, and enhance overall supply chain efficiency.'
    },
    {
      company: 'Reliance Industries Limited',
      logo: 'https://i.imgur.com/vQ6Z0gb.png',
      website: 'https://www.ril.com',
      role: 'Manager',
      period: 'Aug 2018 - Dec 2020',
      description: 'As a Manager, I worked on optimizing supply chain operations, focusing on data-driven strategies and lean practices to enhance efficiency and reduce costs. I collaborated with cross-functional teams to improve processes, streamline workflows, and ensure timely delivery of materials and products. My role involved leveraging advanced analytics and forecasting techniques to drive decision-making, manage inventory effectively, and ensure seamless integration across the supply chain. Additionally, I supported project management efforts to implement supply chain solutions that aligned with business objectives and contributed to RIL\'s operational excellence.'
    }
  ];

  const education = [
    {
      institution: 'Texas A&M University',
      logo: 'https://i.imgur.com/Ul5HTCX.png',
      website: 'https://www.tamu.edu',
      degree: 'MS in Industrial Engineering',
      period: 'Aug 2021 - Aug 2023',
      keyCourses: ['Statistics', 'Machine Learning', 'Supply Chain', 'Human Factors', 'UI/UX']
    },
    {
      institution: 'National Institute of Technology, Warangal',
      logo: 'https://i.imgur.com/aa4kpxd.png',
      website: 'https://nitw.ac.in',
      degree: 'Bachelors in Mechanical Engineering',
      period: 'Jul 2014 - May 2018',
      keyCourses: ['Thermodynamics', 'Manufacturing', 'Design', 'Production Control', 'CAD/CAM']
    }
  ];

  const awards = [
    {
      title: "Toastmaster of the Year",
      organization: "Toastmasters International",
      logo: "https://i.imgur.com/TV94hcv.png",
      description: "Award received under Division J District 98 for exceptional leadership and communication skills.",
      year: "2023"
    },
    {
      title: "WM Barnes Excellence Award",
      organization: "Texas A&M University",
      logo: "https://i.imgur.com/Ul5HTCX.png",
      description: "Received for two consecutive years from the Industrial Engineering department at Texas A&M University for outstanding academic achievement and research contributions.",
      year: "2022-2023"
    }
  ];

  const certifications = [
    {
      title: "Lean Six Sigma Green Belt",
      organization: "KPMG India",
      logo: "https://i.imgur.com/PeDXzsJ.png",
      issueDate: "Sep 2023",
      credentialId: "DL082023029",
      tags: ["Process Improvement", "Quality Management", "Data Analytics"]
    },
    {
      title: "Neural Networks and Deep Learning",
      organization: "DeepLearning.AI",
      logo: "https://i.imgur.com/YOXNMFw.png",
      issueDate: "Jan 2022",
      credentialId: "N4GSEMRQZQ9Y",
      tags: ["Deep Learning", "AI", "Machine Learning"]
    }
  ];

  const recommendations = [
    {
      text: "As a Junior Planner, Sathvik demonstrates exceptional analytical skills and a strong ability to adapt to the fast-paced planning environment. With a keen eye for detail and a proactive mindset, he consistently supported project execution, ensuring smooth operations and effective coordination across teams. Sathvik is dedicated to learning and growing in the planning field, bringing fresh ideas and enthusiasm to every project. Their organizational skills and ability to manage multiple tasks make them an asset to any planning team.",
      author: "Felipe Insua",
      position: "Supply Chain Planning Manager",
      company: "Unilever"
    },
    {
      text: "Despite being new to the role and industry, Sathvik quickly brought value to our Product Management team through his willingness to ask questions and his adaptability to new processes. Within a very short time, he was able to translate feature level requirements into more technical stories for our technical team. He was also able to liaise effectively with those technical staff members to ensure they understood the business needs of the features. What's more, Sathvik was always very respectful in his interactions. He is keen to learn and to acquire new skills in order to grow professionally.",
      author: "Martin Wolniczek",
      position: "Product Leader",
      company: "CDK Global"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Experience Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="border-l-2 border-blue-500 pl-4 pb-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex-shrink-0">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2">
                      <a 
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                      >
                        {exp.company}
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                  {exp.period}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="border-l-2 border-blue-500 pl-4 pb-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex-shrink-0">
                    <img
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2">
                      <a 
                        href={edu.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                      >
                        {edu.institution}
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                  {edu.period}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {edu.keyCourses.map((course, courseIndex) => (
                    <span
                      key={courseIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <Award size={32} className="text-yellow-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Awards & Recognition
            </h2>
          </div>
          <div className="space-y-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="border-l-2 border-yellow-500 pl-4 pb-6"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={award.logo}
                    alt={`${award.organization} logo`}
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {award.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 mb-2">
                      {award.organization}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {award.description}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Awarded in {award.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <Medal size={32} className="text-blue-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Certifications
            </h2>
          </div>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="border-l-2 border-blue-500 pl-4 pb-6"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={cert.logo}
                    alt={`${cert.organization} logo`}
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 mb-2">
                      {cert.organization}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                      Issued {cert.issueDate} · Credential ID: {cert.credentialId}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cert.tags.map((tag, tagIndex) => (
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

        {/* Recommendations Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <MessageCircle size={32} className="text-green-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Recommendations
            </h2>
          </div>
          <div className="space-y-6">
            {recommendations.map((rec, index) => (
              <div
                key={index}
                className="border-l-2 border-green-500 pl-4 pb-6"
              >
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg italic">
                  "{rec.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {rec.author}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {rec.position} at {rec.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pedigree;