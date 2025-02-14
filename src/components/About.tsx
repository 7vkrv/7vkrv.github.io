import React from 'react';

const About = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3">
            <img
              src="https://i.imgur.com/8ny20F3.jpeg-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
              alt="Profile"
              className="rounded-full w-48 h-48 object-cover mx-auto shadow-lg"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Sathvik Vemunuri
            </h2>
            <h3 className="text-xl text-blue-600 dark:text-blue-400 mb-6">
              Building Break The Matrix | Analyst at American Airlines
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm Sathvik (aka Teddy), a supply chain professional passionate about optimizing operations with data-driven strategies. With expertise in supply chain planning, lean practices, and project management, I specialize in solving complex challenges and enhancing efficiency. I collaborate with cross-functional teams to drive impactful solutions. Let’s connect and explore opportunities to innovate together!
              
            </p>
            <div className="flex flex-wrap gap-3">
              {['Lean Six Sigma', 'Supply Chain Planning', 'Lifecycle and Budget Forecasting', 'Project Management', 'Product', 'Analytics'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;