import React, { useState, useRef } from 'react';
import { Upload, CheckCircle, AlertCircle, FileSpreadsheet } from 'lucide-react';

interface FileUploaderProps {
  onFileSelected: (file: File) => void;
  isProcessing: boolean;
  error: string | null;
}

export const FileUploader: React.FC<FileUploaderProps> = ({ 
  onFileSelected, 
  isProcessing,
  error
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      handleFile(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      handleFile(file);
    }
  };

  const handleFile = (file: File) => {
    if (!file.name.match(/\.(xls|xlsx)$/)) {
      alert('Please select an Excel file (.xls or .xlsx)');
      return;
    }
    
    setFileName(file.name);
    onFileSelected(file);
  };

  const openFileSelector = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <div 
        className={`relative border-2 border-dashed rounded-lg p-8 transition-colors text-center
          ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}
          ${isProcessing ? 'opacity-75 pointer-events-none' : ''}
        `}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept=".xls,.xlsx"
          onChange={handleChange}
          disabled={isProcessing}
        />
        
        <div className="mb-4 flex justify-center">
          {isProcessing ? (
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
          ) : (
            <FileSpreadsheet size={48} className="text-blue-600" />
          )}
        </div>
        
        <div className="space-y-2">
          <p className="text-gray-700 font-medium">
            {isProcessing ? 'Processing file...' : 'Drag & drop your Excel file here'}
          </p>
          <p className="text-gray-500 text-sm">
            or
          </p>
          <button
            type="button"
            onClick={openFileSelector}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors inline-flex items-center gap-2"
            disabled={isProcessing}
          >
            <Upload size={16} />
            Browse Files
          </button>
          <p className="text-xs text-gray-500 mt-2">
            Supported formats: .xls, .xlsx
          </p>
        </div>
      </div>

      {fileName && !error && !isProcessing && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md flex items-center gap-2">
          <CheckCircle size={20} className="text-green-600" />
          <span className="text-green-800 font-medium text-sm">
            File loaded: {fileName}
          </span>
        </div>
      )}

      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-center gap-2">
          <AlertCircle size={20} className="text-red-600" />
          <span className="text-red-800 font-medium text-sm">
            {error}
          </span>
        </div>
      )}
    </>
  );
};