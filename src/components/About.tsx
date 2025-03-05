import React, { useEffect, useState } from 'react';
import { Camera, Pen, Wrench, Coins, Sparkles, LineChart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const [lifeProgress, setLifeProgress] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    // Calculate life progress
    const birthDate = new Date('1997-01-13');
    const today = new Date();
    const ageInDays = (today.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24);
    const lifeExpectancyInDays = 100 * 365; // Life expectancy set to 100 years
    const progress = (ageInDays / lifeExpectancyInDays) * 100;
    setLifeProgress(Math.min(progress, 100));
  }, []);

  const personalityTraits = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Supply Chain',
      description: 'Optimizing operations and processes',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <div className="flex"><Wrench className="w-8 h-8 mr-1" /><Coins className="w-8 h-8" /></div>,
      title: 'Business & Strategy',
      description: 'Building and optimizing solutions',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Photography',
      description: 'Capturing moments and perspectives',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Mindfulness',
      description: 'Maintaining balance and clarity',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: <Pen className="w-8 h-8" />,
      title: 'Writing',
      description: 'Crafting stories and insights',
      color: 'from-rose-500 to-pink-500'
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: 'Strategic Analysis',
      description: 'Data-driven decision making',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="w-full md:w-1/3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <img
                src="https://i.imgur.com/8ny20F3.jpeg-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
                alt="Profile"
                className="relative rounded-full w-48 h-48 object-cover mx-auto shadow-lg transform group-hover:scale-105 transition duration-500"
              />
            </div>
            
            {/* Life Progress Bar */}
            <div className="mt-6 p-4 bg-gray-900 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-300">Life Progress</span>
                <span className="text-sm font-medium text-gray-300">
                  {lifeProgress.toFixed(2)}%
                </span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                <div
                  className="h-2.5 rounded-full transition-all duration-1000 bg-gradient-to-r from-blue-500 to-cyan-500"
                  style={{ width: `${lifeProgress}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Making each day count
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
              Sathvik Vemunuri
            </h2>
            <h3 className="text-xl text-blue-400 mb-6">
              Building Break The Matrix | Analyst at American Airlines
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm Sathvik (aka Teddy), a supply chain professional passionate about optimizing operations with data-driven strategies. With expertise in supply chain planning, lean practices, and project management, I specialize in solving complex challenges and enhancing efficiency. I collaborate with cross-functional teams to drive impactful solutions. Let's connect and explore opportunities to innovate together!
            </p>
            
            {/* Personality Traits Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {personalityTraits.map((trait, index) => (
                <div
                  key={index}
                  className="group relative h-full"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${trait.color} rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
                  <div className="relative bg-gray-900 p-4 rounded-lg shadow-md transform group-hover:translate-y-[-4px] transition-all duration-300 h-full">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`text-transparent bg-gradient-to-r ${trait.color} bg-clip-text flex-shrink-0 mt-1`}>
                        {trait.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">
                          {trait.title}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {trait.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {['Lean Six Sigma', 'Supply Chain Planning', 'Lifecycle and Budget Forecasting', 'Project Management', 'Product', 'Analytics'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm transform hover:scale-105 transition-transform duration-300 hover:shadow-md"
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