import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FileUploader } from './components/FileUploader';
import { ResultsTable } from './components/ResultsTable';
import { useRequirementsProcessor } from './hooks/useRequirementsProcessor';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { InfoCard } from './components/InfoCard';
import { AdUnit } from './components/AdUnit';
import { Guide } from './pages/Guide';

function App() {
  const {
    results,
    isProcessing,
    error,
    processFile,
    exportResults,
    hasResults
  } = useRequirementsProcessor();

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <Navigation />
        
        <Routes>
          <Route path="/guide" element={<Guide />} />
          <Route path="/" element={
            <main className="flex-1 container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4">Upload Requirements Document</h2>
                    <FileUploader 
                      onFileSelected={processFile} 
                      isProcessing={isProcessing} 
                      error={error}
                    />
                  </div>
                  
                  {hasResults && (
                    <div className="mb-6">
                      <AdUnit 
                        slot="YOUR-AD-SLOT-1"
                        className="bg-white rounded-lg shadow-md p-4"
                      />
                    </div>
                  )}
                  
                  {hasResults && (
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Analysis Results</h2>
                        <button
                          onClick={exportResults}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                          Export to Excel
                        </button>
                      </div>
                      <ResultsTable results={results} />
                    </div>
                  )}
                </div>
                
                <div className="md:col-span-1">
                  <InfoCard />
                  <div className="mt-6">
                    <AdUnit 
                      slot="YOUR-AD-SLOT-2"
                      format="rectangle"
                      className="bg-white rounded-lg shadow-md p-4"
                    />
                  </div>
                </div>
              </div>
            </main>
          } />
        </Routes>
        
        <footer className="bg-gray-800 text-white p-4 text-center text-sm">
          Requirements Syntax Checker © {new Date().getFullYear()}
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;