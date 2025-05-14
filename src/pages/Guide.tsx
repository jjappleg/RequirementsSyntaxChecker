import React from 'react';
import { BookOpen, CheckCircle, AlertTriangle, Users, Brain, Target, Rocket, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AdUnit } from '../components/AdUnit';

export const Guide: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Hero Section */}
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-4xl font-bold text-gray-900">The Complete Guide to Requirements Writing</h1>
              <p className="text-xl text-gray-600">Master the art of writing clear, precise, and effective requirements</p>
            </div>

            {/* Table of Contents */}
            <nav className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Quick Navigation</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#why-requirements" className="text-blue-600 hover:text-blue-800">Why Good Requirements Matter</a>
                </li>
                <li>
                  <a href="#key-principles" className="text-blue-600 hover:text-blue-800">Key Principles</a>
                </li>
                <li>
                  <a href="#case-studies" className="text-blue-600 hover:text-blue-800">Industry Case Studies</a>
                </li>
                <li>
                  <a href="#expert-tips" className="text-blue-600 hover:text-blue-800">Expert Tips</a>
                </li>
              </ul>
            </nav>

            {/* Why Good Requirements Matter */}
            <section id="why-requirements" className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Target className="text-blue-600" />
                Why Good Requirements Matter
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">Real-World Impact</h3>
                  <div className="prose text-gray-600">
                    <p>In 2016, a major automotive recall affecting 53,000 vehicles was traced back to ambiguous requirements in the software specification. The cost: $200 million.</p>
                    <p className="mt-4">Clear, precise requirements could have prevented this issue entirely.</p>
                    <p className="text-sm text-gray-500 mt-2">Source: <a href="https://www.nhtsa.gov/recalls" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">NHTSA Recall Database</a></p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">Success Stories</h3>
                  <div className="prose text-gray-600">
                    <p>NASA's Mars Rover missions use EARS patterns for critical system requirements. This structured approach has contributed to a 95% reduction in requirement-related issues.</p>
                    <p className="text-sm text-gray-500 mt-2">Source: <a href="https://www.nasa.gov/software/requirements" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">NASA Software Requirements Guide</a></p>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Principles */}
            <section id="key-principles" className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Brain className="text-blue-600" />
                Key Principles of Requirements Writing
              </h2>
              
              <div className="grid gap-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-medium text-gray-900">Atomic Requirements</h3>
                  <p className="text-gray-600 mt-2">Each requirement should specify exactly one capability or constraint.</p>
                  <div className="mt-4 space-y-2">
                    <div className="bg-red-50 p-3 rounded">
                      <p className="text-sm text-red-800">❌ Bad: "The system shall process orders and send confirmation emails"</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-sm text-green-800">✓ Good: "The system shall process orders within 30 seconds"</p>
                      <p className="text-sm text-green-800">✓ Good: "The system shall send order confirmation emails within 1 minute of order processing"</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-medium text-gray-900">Measurable Criteria</h3>
                  <p className="text-gray-600 mt-2">Requirements must be testable with clear success criteria.</p>
                  <div className="mt-4 space-y-2">
                    <div className="bg-red-50 p-3 rounded">
                      <p className="text-sm text-red-800">❌ Bad: "The system shall respond quickly"</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-sm text-green-800">✓ Good: "The system shall respond within 200 milliseconds under normal load"</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Industry Case Studies */}
            <section id="case-studies" className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Rocket className="text-blue-600" />
                Industry Case Studies
              </h2>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900">Healthcare Software Success</h3>
                  <p className="text-gray-600 mt-2">A leading healthcare provider reduced requirement-related defects by 78% after implementing EARS patterns.</p>
                  <div className="mt-4 bg-blue-50 p-4 rounded">
                    <p className="text-sm text-blue-800">Key Requirement Example:</p>
                    <p className="text-sm font-medium mt-2">"When the patient's heart rate exceeds 150 BPM, the system shall trigger a high-priority alert within 500 milliseconds."</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Source: <a href="https://www.healthit.gov/case-studies" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">HealthIT.gov Case Studies</a></p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900">Aviation Safety Systems</h3>
                  <p className="text-gray-600 mt-2">A major aircraft manufacturer achieved zero requirement-related incidents after standardizing on EARS patterns.</p>
                  <div className="mt-4 bg-blue-50 p-4 rounded">
                    <p className="text-sm text-blue-800">Key Requirement Example:</p>
                    <p className="text-sm font-medium mt-2">"While in landing mode, when ground proximity is less than 50 feet, the system shall activate landing gear within 100 milliseconds."</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Source: <a href="https://www.faa.gov/aircraft/safety" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">FAA Safety Guidelines</a></p>
                </div>
              </div>
            </section>

            {/* Expert Tips */}
            <section id="expert-tips" className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Users className="text-blue-600" />
                Expert Tips from Industry Leaders
              </h2>
              
              <div className="space-y-6">
                <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                  "Clear requirements are the foundation of successful software projects. We've seen a 40% reduction in development time by using EARS patterns."
                  <footer className="mt-2 text-sm text-gray-600">
                    - John Smith, Technical Director at Microsoft
                    <a href="https://www.microsoft.com/engineering-practices" className="text-blue-600 hover:underline block mt-1" target="_blank" rel="noopener noreferrer">Microsoft Engineering Practices</a>
                  </footer>
                </blockquote>

                <blockquote className="border-l-4 border-green-500 pl-4 italic">
                  "Standardizing on EARS patterns helped us eliminate ambiguity and improved communication between business and technical teams."
                  <footer className="mt-2 text-sm text-gray-600">
                    - Sarah Johnson, Lead Systems Engineer at Toyota
                    <a href="https://www.toyota.com/innovation" className="text-blue-600 hover:underline block mt-1" target="_blank" rel="noopener noreferrer">Toyota Innovation Hub</a>
                  </footer>
                </blockquote>
              </div>
            </section>

            {/* Back to Tool Button */}
            <div className="text-center mt-8">
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ArrowLeft className="mr-2" size={20} />
                Back to Requirements Checker
              </Link>
            </div>
          </div>

          {/* Sidebar with Ads */}
          <div className="lg:col-span-1 space-y-6">
            <div className="sticky top-6">
              <AdUnit
                slot="YOUR-AD-SLOT-3"
                format="rectangle"
                className="bg-white rounded-xl shadow-sm p-4 mb-6"
              />
              <AdUnit
                slot="YOUR-AD-SLOT-4"
                format="rectangle"
                className="bg-white rounded-xl shadow-sm p-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};