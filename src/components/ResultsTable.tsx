import React, { useState } from 'react';
import { ProcessedRequirement } from '../types/requirements';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';
import { getCategoryDescription } from '../utils/earsCategories';

interface ResultsTableProps {
  results: ProcessedRequirement[];
}

export const ResultsTable: React.FC<ResultsTableProps> = ({ results }) => {
  const [tooltipVisible, setTooltipVisible] = useState<number | null>(null);

  if (!results.length) {
    return <p>No results to display</p>;
  }

  const getStatusColor = (category: string) => {
    if (category === 'DOES NOT MEET') return 'bg-red-100 text-red-800 border-red-200';
    if (category.includes('Complex')) return 'bg-purple-100 text-purple-800 border-purple-200';
    return 'bg-green-100 text-green-800 border-green-200';
  };

  const getPunctuationColor = (status: string) => {
    if (status === 'Punctuation issues') return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-green-100 text-green-800 border-green-200';
  };

  const handleMouseEnter = (index: number) => {
    setTooltipVisible(index);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(null);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Requirement
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              EARS Category
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Quality Check
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {results.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {row.name || `Requirement ${index + 1}`}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                <div className="max-w-md truncate" title={row.text}>
                  {row.text}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(row.category)}`}>
                    {row.category}
                  </span>
                  <div className="relative">
                    <button
                      type="button"
                      className="text-gray-400 hover:text-gray-600"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Info size={16} />
                    </button>
                    {tooltipVisible === index && (
                      <div className="absolute z-10 w-72 bg-white border border-gray-200 rounded-md shadow-lg p-3 text-xs left-6 top-0">
                        {getCategoryDescription(row.category)}
                      </div>
                    )}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex items-center">
                  {row.punctuation === 'Punctuation OK' ? (
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                  ) : (
                    <AlertCircle size={16} className="text-yellow-500 mr-2" />
                  )}
                  <div>
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getPunctuationColor(row.punctuation)}`}>
                      {row.punctuation}
                    </span>
                    {row.issues && row.issues.length > 0 && (
                      <ul className="mt-1 text-xs text-gray-500">
                        {row.issues.map((issue, i) => (
                          <li key={i}>• {issue}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};