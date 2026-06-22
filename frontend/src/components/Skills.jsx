import React from 'react';
import { Card } from './ui/card';
import { 
  BarChart3, 
  Database, 
  Smartphone, 
  FileText, 
  Users, 
  Zap,
  Code,
  PieChart,
  GitBranch,
  Sparkles
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'AI Systems',
      icon: Sparkles,
      color: 'yellow',
      skills: [
        'LLM Workflow Design',
        'Prompt Engineering',
        'Conversational AI Agents',
        'Campaign Automation',
        'Debugging Systems'
      ]
    },
    {
      category: 'Analytics',
      icon: BarChart3,
      color: 'purple',
      skills: [
        'SQL',
        'Rule Engines (Decision Trees)',
        'A/B Testing & Funnel Optimization',
        'Product Analytics',
        'Mixpanel & Databricks',
        'User Segmentation'
      ]
    },
    {
      category: 'Product Execution',
      icon: Zap,
      color: 'orange',
      skills: [
        'Campaign Strategy',
        'SOP & Process Design',
        'Cross-Functional Collaboration',
        'Experiment Design',
        'Impact Measurement',
        'Agile/Scrum'
      ]
    },
    {
      category: 'Technical Foundations',
      icon: Code,
      color: 'green',
      skills: [
        'AWS',
        'Retool',
        'App Script',
        'Jira',
        'GitHub',
        'Docker',
        'Grafana',
        'Postman'
      ]
    }
  ];

  const colorClasses = {
    yellow: 'bg-yellow-400',
    purple: 'bg-purple-400',
    orange: 'bg-orange-400',
    green: 'bg-green-400',
    blue: 'bg-blue-400'
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Skills & <span className="text-yellow-400">Tools</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From product operations to AI automation — the complete toolkit for building, analyzing, and scaling products.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const colorClass = colorClasses[category.color];
              
              return (
                <Card
                  key={index}
                  className="p-6 border-2 border-gray-200 hover:border-yellow-400 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)] hover:shadow-[6px_6px_0px_0px_rgba(255,211,0,0.3)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`${colorClass} w-12 h-12 rounded-lg flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-black">{category.category}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="px-3 py-2 bg-gray-50 rounded-md text-sm text-gray-700 font-medium border border-gray-200"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Key Metrics Banner */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-yellow-50 rounded-lg border-2 border-yellow-400 shadow-[4px_4px_0px_0px_rgba(255,211,0,1)]">
              <p className="text-4xl font-bold text-black mb-2">20+</p>
              <p className="text-sm font-semibold text-gray-600">Campaigns Shipped</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg border-2 border-purple-400 shadow-[4px_4px_0px_0px_rgba(168,85,247,1)]">
              <p className="text-4xl font-bold text-black mb-2">9M+</p>
              <p className="text-sm font-semibold text-gray-600">Users Impacted</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg border-2 border-orange-400 shadow-[4px_4px_0px_0px_rgba(255,107,53,1)]">
              <p className="text-4xl font-bold text-black mb-2">75%</p>
              <p className="text-sm font-semibold text-gray-600">Efficiency Gain</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg border-2 border-green-400 shadow-[4px_4px_0px_0px_rgba(34,197,94,1)]">
              <p className="text-4xl font-bold text-black mb-2">80%</p>
              <p className="text-sm font-semibold text-gray-600">Faster Resolution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;