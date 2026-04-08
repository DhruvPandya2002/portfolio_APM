import React from 'react';
import { Card } from './ui/card';
import { Sparkles, MessageSquare, Clock, Zap, TrendingUp, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI Campaign Automation System',
      subtitle: 'Internal Tool @ CRED',
      description: 'LLM-powered workflow translating business requirements into structured JSON campaign configurations with SOP-aligned prompt engineering and API-integrated internal tooling. Slack-integrated bot enabling seamless team collaboration and configuration deployment.',
      problem: 'Campaign configuration was time-intensive, requiring 60 minutes of manual JSON setup and increasing deployment timelines across the growth team.',
      impact: [
        { label: 'Time Reduction', value: '75%', subtext: '60 min → 25 min' },
        { label: 'Setup Speed', value: '58%', subtext: 'Faster configuration' },
        { label: 'Team Velocity', value: '↑', subtext: 'Accelerated deployment' }
      ],
      tech: ['Claude API', 'LLM', 'JSON', 'API Integration', 'Prompt Engineering', 'Slack Bot'],
      icon: Sparkles,
      color: 'yellow'
    },
    {
      title: 'AI Campaign Debugging Assistant',
      subtitle: 'Conversational Agent @ CRED',
      description: 'Conversational AI agent for campaign diagnostics and reward logic validation with SQL-backed real-time data retrieval via secure database integrations.',
      problem: 'Escalation resolution for campaign issues took 2-3 hours, creating bottlenecks and heavy dependency on backend teams for diagnostics.',
      impact: [
        { label: 'Resolution Time', value: '80%', subtext: '2-3hrs → 30min' },
        { label: 'Self-Serve', value: '↑', subtext: 'Reduced escalations' },
        { label: 'Team Efficiency', value: '3x', subtext: 'Faster debugging' }
      ],
      tech: ['Conversational AI', 'SQL', 'Database Integration', 'Real-time Data', 'Diagnostics'],
      icon: MessageSquare,
      color: 'purple'
    }
  ];

  const colorClasses = {
    yellow: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-400',
      iconBg: 'bg-yellow-400',
      shadow: 'shadow-[6px_6px_0px_0px_rgba(255,211,0,1)]',
      hoverShadow: 'hover:shadow-[10px_10px_0px_0px_rgba(255,211,0,1)]',
      text: 'text-yellow-600',
      badge: 'bg-yellow-400'
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-400',
      iconBg: 'bg-purple-400',
      shadow: 'shadow-[6px_6px_0px_0px_rgba(168,85,247,1)]',
      hoverShadow: 'hover:shadow-[10px_10px_0px_0px_rgba(168,85,247,1)]',
      text: 'text-purple-600',
      badge: 'bg-purple-400'
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Featured <span className="text-yellow-400">Projects</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A project is never a straight line — it's a loop:<br />
              <span className="font-semibold text-gray-700">Understand → Build → Measure → Learn → Improve.</span>
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8 md:space-y-12">
            {projects.map((project, index) => {
              const colors = colorClasses[project.color];
              const Icon = project.icon;
              
              return (
                <Card
                  key={index}
                  className={`p-6 md:p-8 border-2 ${colors.border} ${colors.shadow} ${colors.hoverShadow} hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300`}
                >
                  <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-4 md:space-y-6">
                      {/* Header */}
                      <div>
                        <div className="flex items-start gap-3 md:gap-4 mb-3">
                          <div className={`${colors.iconBg} w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] flex-shrink-0`}>
                            <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-black mb-1">{project.title}</h3>
                            <p className="text-base md:text-lg font-semibold text-gray-600">{project.subtitle}</p>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed">{project.description}</p>
                      </div>

                      {/* Problem Statement */}
                      <div className={`p-3 md:p-4 ${colors.bg} rounded-lg border-l-4 ${colors.border}`}>
                        <p className="text-xs md:text-sm font-bold text-gray-500 mb-1">PROBLEM</p>
                        <p className="text-sm md:text-base text-gray-700">{project.problem}</p>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <p className="text-xs md:text-sm font-bold text-gray-500 mb-3">TECH STACK</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 md:px-3 py-1 bg-white border border-gray-300 text-gray-700 text-xs md:text-sm font-medium rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Impact Metrics */}
                    <div className="lg:col-span-1">
                      <div className="lg:sticky lg:top-8">
                        <p className="text-xs md:text-sm font-bold text-gray-500 mb-4">IMPACT METRICS</p>
                        <div className="grid grid-cols-3 lg:grid-cols-1 gap-3 md:gap-4">
                          {project.impact.map((metric, metricIndex) => (
                            <div
                              key={metricIndex}
                              className="p-3 md:p-4 bg-white rounded-lg border-2 border-gray-200 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.05)]"
                            >
                              <p className="text-xs font-bold text-gray-500 mb-1">{metric.label}</p>
                              <p className="text-2xl md:text-3xl font-bold text-black mb-1">{metric.value}</p>
                              <p className="text-xs md:text-sm text-gray-600">{metric.subtext}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* More Projects Coming */}
          <div className="mt-12 text-center">
            <div className="inline-block p-8 border-2 border-dashed border-gray-300 rounded-lg">
              <Zap className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-lg font-semibold text-gray-600">More projects in the pipeline</p>
              <p className="text-gray-500 mt-2">Continuous iteration and learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;