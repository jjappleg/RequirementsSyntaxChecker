import React from 'react';
import { InfoIcon, ExternalLink, FileSpreadsheet, Save, History, Download } from 'lucide-react';

export const InfoCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-4">
        <InfoIcon className="text-blue-600" size={20} />
        <h2 className="text-xl font-semibold">Requirements Writing Guide</h2>
      </div>

      <div className="space-y-4 text-gray-700">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
          <h3 className="font-medium text-blue-800 mb-2">Pro Tips for Requirements</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Save size={16} className="text-blue-600" />
              <span>Save templates of your best requirements for reuse</span>
            </li>
            <li className="flex items-center gap-2">
              <History size={16} className="text-blue-600" />
              <span>Review past requirements to maintain consistency</span>
            </li>
            <li className="flex items-center gap-2">
              <Download size={16} className="text-blue-600" />
              <span>Export analysis results to share with your team</span>
            </li>
          </ul>
        </div>

        <div className="p-4 bg-blue-50 rounded-md mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FileSpreadsheet size={18} className="text-blue-600" />
            <h3 className="font-medium text-blue-800">File Format Guide</h3>
          </div>
          <div className="text-sm space-y-2">
            <p>Your Excel file should have at least two columns:</p>
            <ul className="list-disc list-inside pl-2 space-y-1">
              <li><span className="font-medium">Column 1:</span> Requirement ID or Name</li>
              <li><span className="font-medium">Column 2:</span> Requirement Text</li>
            </ul>
            <p className="text-blue-600 text-xs mt-2">Tip: Add a third column for requirement categories to track different types of requirements.</p>
          </div>
        </div>

        <section id="patterns" aria-label="EARS Patterns">
          <h3 className="font-medium text-lg mb-3">EARS Patterns Guide</h3>
          
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors">
              <h4 className="font-medium text-blue-800">Ubiquitous</h4>
              <p className="text-sm mt-1">The &lt;system name&gt; shall &lt;system response&gt;</p>
              <p className="text-xs text-blue-600 mt-1">Best for: Core system capabilities that are always true</p>
            </div>
            
            <div className="p-3 bg-green-50 rounded-md hover:bg-green-100 transition-colors">
              <h4 className="font-medium text-green-800">Event-Driven</h4>
              <p className="text-sm mt-1">When &lt;trigger&gt;, the &lt;system name&gt; shall &lt;system response&gt;</p>
              <p className="text-xs text-green-600 mt-1">Best for: System responses to specific events or triggers</p>
            </div>
            
            <div className="p-3 bg-purple-50 rounded-md hover:bg-purple-100 transition-colors">
              <h4 className="font-medium text-purple-800">State-Driven</h4>
              <p className="text-sm mt-1">While &lt;precondition&gt;, the &lt;system name&gt; shall &lt;system response&gt;</p>
              <p className="text-xs text-purple-600 mt-1">Best for: Behavior that applies during specific conditions</p>
            </div>
            
            <div className="p-3 bg-yellow-50 rounded-md hover:bg-yellow-100 transition-colors">
              <h4 className="font-medium text-yellow-800">Unwanted Behavior</h4>
              <p className="text-sm mt-1">If &lt;trigger&gt;, then the &lt;system name&gt; shall &lt;system response&gt;</p>
              <p className="text-xs text-yellow-600 mt-1">Best for: Error handling and edge cases</p>
            </div>
            
            <div className="p-3 bg-pink-50 rounded-md hover:bg-pink-100 transition-colors">
              <h4 className="font-medium text-pink-800">Optional Feature</h4>
              <p className="text-sm mt-1">Where &lt;feature&gt;, the &lt;system name&gt; shall &lt;system response&gt;</p>
              <p className="text-xs text-pink-600 mt-1">Best for: Feature-specific requirements</p>
            </div>

            <div className="p-3 bg-indigo-50 rounded-md hover:bg-indigo-100 transition-colors">
              <h4 className="font-medium text-indigo-800">Complex State-Event</h4>
              <p className="text-sm mt-1">While &lt;state&gt;, when &lt;event&gt;, the &lt;system name&gt; shall &lt;system response&gt;</p>
              <p className="text-xs text-indigo-600 mt-1">Best for: Combining state and event conditions</p>
            </div>

            <div className="p-3 bg-orange-50 rounded-md hover:bg-orange-100 transition-colors">
              <h4 className="font-medium text-orange-800">Temporal</h4>
              <p className="text-sm mt-1">After &lt;duration/event&gt;, the &lt;system name&gt; shall &lt;system response&gt;</p>
              <p className="text-xs text-orange-600 mt-1">Best for: Time-dependent behaviors</p>
            </div>
          </div>
        </section>

        <section className="mt-6 space-y-4">
          <h3 className="font-medium text-lg">Best Practices</h3>
          <div className="bg-gray-50 p-4 rounded-md space-y-2 text-sm">
            <p className="font-medium text-gray-700">✓ Keep requirements atomic - one requirement per statement</p>
            <p className="font-medium text-gray-700">✓ Use consistent terminology throughout your requirements</p>
            <p className="font-medium text-gray-700">✓ Avoid ambiguous terms like "appropriate," "sufficient," or "adequate"</p>
            <p className="font-medium text-gray-700">✓ Make requirements testable and measurable</p>
          </div>
        </section>

        <section id="documentation" className="mt-6">
          <h3 className="font-medium text-lg mb-2">Learn More</h3>
          <div className="space-y-2">
            <a 
              href="https://ieeexplore.ieee.org/document/5328509" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 text-sm"
            >
              Read the EARS paper <ExternalLink size={14} />
            </a>
            <p className="text-sm text-gray-600">
              Want to improve your requirements? Join our community of requirements engineers.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};