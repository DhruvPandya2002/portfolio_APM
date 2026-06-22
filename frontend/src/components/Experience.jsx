import React, { useState } from 'react';
import { Briefcase, Calendar, TrendingUp, Zap, Clock, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { Card } from './ui/card';
import { trackExperienceExpand } from '../utils/analytics';

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(0); // First item expanded by default

  const toggleExpand = (index, companyName) => {
    const newIndex = expandedIndex === index ? -1 : index;
    setExpandedIndex(newIndex);
    
    // Track expansion
    if (newIndex === index) {
      console.log(`🏢 Experience card expanded: ${companyName}`);
      trackExperienceExpand(companyName);
    }
  };

  const experiences = [
    {
      company: 'CRED',
      role: 'Product Operations',
      duration: 'June 2025 - Present',
      current: true,
      achievements: [
        {
          title: 'Onboarding Revamp (9M Users)',
          description: 'Reduced onboarding drop-offs by 15% across NTU users driven by user interviews that surfaced mid-journey friction, informing a full end-to-end flow redesign executed in collaboration with engineering and design teams.',
          metrics: ['15% drop-off reduction', '9M+ users educated'],
          icon: TrendingUp
        },
        {
          title: 'Campaign Strategy & Transactional Growth',
          description: 'Designed and shipped 20+ category-specific campaigns across utility bills, rent, and education verticals. Achieved +11.3% user activation and +9.6% reactivation with a +16.3% lift in Single-LOB to Multi-LOB conversions via strategic budget reinvestment.',
          metrics: ['+11.3% activation', '+9.6% reactivation', '+16.3% LOB conversion'],
          icon: Zap
        },
        {
          title: 'Burn Efficiency & Unit Economics',
          description: 'Cut monthly campaign burn by ~45% (₹2.7 Cr → ₹1.5 Cr) by identifying and removing penny cashback subsidies for low-risk user segments, sustained activation growth while materially improving campaign unit economics.',
          metrics: ['45% burn reduction', '₹1.2 Cr saved monthly'],
          icon: TrendingUp
        },
        {
          title: 'Structural Fixes & Campaign Hygiene',
          description: 'Identified and resolved long-standing structural leaks inflating campaign costs: fixed cashback oversell across BBPS surfaces and eliminated legacy issues including multi-campaign tagging errors and incorrect BBPS campaign assignments.',
          metrics: ['Reduced reward leakage', 'Improved cost accuracy'],
          icon: Zap
        },
        {
          title: 'Cross-Sell Slab Automation',
          description: 'Built scheduled automation (6:30 AM daily) that queries Databricks to extract slab_ids from 1,500+ cross-sell reward slabs, auto-populates Jira fields, and syncs to business tracking sheets.',
          metrics: ['1-2hrs saved daily', '30-50 tickets automated'],
          icon: Clock
        },
        {
          title: 'AI Campaign Automation (Internal Tool)',
          description: 'Co-built an LLM-powered internal tool translating business requirements into JSON campaign configurations reduced config time by ~75%.',
          metrics: ['75% config time reduction', '60 min → 15 min'],
          icon: Sparkles
        },
        {
          title: 'AI Debugging Assistant',
          description: 'Built a conversational AI agent for campaign diagnostics with SQL-backed real-time data retrieval cut escalation resolution time by ~80%, eliminating recurring L1 support.',
          metrics: ['80% faster resolution', '2-3hrs → 30min'],
          icon: Zap
        }
      ],
      tools: ['Grafana', 'Postman', 'Databricks', 'Mixpanel', 'Claude', 'LLM', 'Jira API', 'SQL', 'AWS', 'Retool']
    },
    {
      company: 'MACTORES',
      role: 'Cloud & Data Analytics Intern',
      duration: 'Mar 2025 - Jun 2025',
      current: false,
      achievements: [
        {
          title: 'Data Analytics & Cloud Integration',
          description: 'Worked with Databricks to support data analytics and database workflows for cloud-based production systems. Gained hands-on exposure to AWS and GCP cloud-data integration pipelines.',
          metrics: [],
          icon: Briefcase
        }
      ],
      tools: ['Databricks', 'AWS', 'GCP']
    },
    {
      company: 'CYNUX ERA',
      role: 'Founder Office - Product Developer',
      duration: 'Sept 2024 - Mar 2025',
      current: false,
      achievements: [
        {
          title: 'EdTech Platform Development',
          description: 'Designed and developed a comprehensive EdTech platform from ground up, implementing secure authentication, student management portal, and LMS for recorded lectures.',
          metrics: ['Full-stack development', 'End-to-end ownership'],
          icon: Briefcase
        },
        {
          title: 'Security & Access Control',
          description: 'Secured TOTP login on admin panel, restricting unauthorized access to sensitive data. Developed exam portal with malicious activity detection features.',
          metrics: ['Enhanced security', 'Fair evaluation system'],
          icon: Zap
        },
        {
          title: 'University Launch & Live CTF',
          description: 'Led product launch at Dayanand Sagar University with a CTF competition. Created live leaderboard ensuring fair judgment and real-time tracking.',
          metrics: ['Successful university launch', 'Real-time monitoring'],
          icon: TrendingUp
        }
      ],
      tools: ['Postman API', 'MongoDB', 'Vercel', 'Railway']
    },
    {
      company: 'Siddhi Vinayak Enterprises',
      role: 'Customer Operations & Marketing',
      duration: 'Nov 2020 - Jan 2022',
      current: false,
      achievements: [
        {
          title: 'Customer Relations & Operations',
          description: 'Managed customer queries and served as liaison between customers and production teams, improving satisfaction and retention.',
          metrics: ['Customer satisfaction', 'Production coordination'],
          icon: Briefcase
        },
        {
          title: 'Brand & Stakeholder Management',
          description: 'Built and maintained brand relationships with key partners such as Vishal Prints, strengthening vendor and stakeholder communication.',
          metrics: ['Partner relationships', 'Vendor alignment'],
          icon: TrendingUp
        },
        {
          title: 'Market Expansion',
          description: 'Onboarded new manufacturers to expand market presence, focusing on quality product sourcing and supplier alignment.',
          metrics: ['New manufacturers', 'Market expansion'],
          icon: Zap
        },
        {
          title: 'Sales & Inventory Management',
          description: 'Maintained sales and inventory records, generating reports that supported management decision-making.',
          metrics: ['Sales tracking', 'Data-driven decisions'],
          icon: Briefcase
        }
      ],
      tools: ['Excel', 'Word', 'Database Management', 'CRM']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Career <span className="text-yellow-400">Reps</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From product operations at CRED to building EdTech platforms and early-stage ops — each role shaped how I think, ship, and measure impact.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const isExpanded = expandedIndex === index;
              
              return (
                <div key={index} className="relative">
                  {/* Timeline line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-8 top-24 w-1 h-full bg-gradient-to-b from-yellow-400 to-purple-500 hidden md:block"></div>
                  )}

                  <Card className="p-6 md:p-8 border-2 border-gray-200 hover:border-yellow-400 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_0px_0px_rgba(255,211,0,0.3)]">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                      {/* Company badge */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,107,53,1)]">
                          <Briefcase className="w-8 h-8 text-black" />
                        </div>
                      </div>

                      <div className="flex-grow">
                        {/* Header - Always visible */}
                        <div 
                          className="cursor-pointer"
                          onClick={() => toggleExpand(index, exp.company)}
                        >
                          <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                            <div className="flex flex-wrap items-center gap-3">
                              <h3 className="text-2xl md:text-3xl font-bold text-black">{exp.company}</h3>
                              {exp.current && (
                                <span className="px-3 py-1 bg-green-400 text-black text-xs font-bold rounded-md">
                                  CURRENT
                                </span>
                              )}
                            </div>
                            <button className="text-gray-500 hover:text-yellow-400 transition-colors">
                              {isExpanded ? (
                                <ChevronUp className="w-6 h-6" />
                              ) : (
                                <ChevronDown className="w-6 h-6" />
                              )}
                            </button>
                          </div>
                          <p className="text-lg md:text-xl font-semibold text-gray-700 mb-2">{exp.role}</p>
                          <div className="flex items-center gap-2 text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{exp.duration}</span>
                          </div>
                        </div>

                        {/* Expandable Details */}
                        {isExpanded && (
                          <div className="mt-6 space-y-6 animate-fadeInUp">
                            {/* Achievements */}
                            <div className="space-y-6">
                              {exp.achievements.map((achievement, achIndex) => (
                                <div key={achIndex} className="">
                                  <div className="flex items-start gap-3 mb-2">
                                    <div className="flex-shrink-0 mt-1">
                                      <achievement.icon className="w-5 h-5 text-yellow-500" />
                                    </div>
                                    <div>
                                      <h4 className="font-bold text-base md:text-lg text-black mb-1">{achievement.title}</h4>
                                      <p className="text-sm md:text-base text-gray-600 mb-3">{achievement.description}</p>
                                      {achievement.metrics.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                          {achievement.metrics.map((metric, metricIndex) => (
                                            <span
                                              key={metricIndex}
                                              className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs md:text-sm font-semibold rounded-md"
                                            >
                                              {metric}
                                            </span>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Tools */}
                            <div className="border-t border-gray-200 pt-4">
                              <p className="text-xs md:text-sm font-semibold text-gray-500 mb-2">TOOLS & TECH</p>
                              <div className="flex flex-wrap gap-2">
                                {exp.tools.map((tool, toolIndex) => (
                                  <span
                                    key={toolIndex}
                                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs md:text-sm rounded-md border border-gray-200"
                                  >
                                    {tool}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;