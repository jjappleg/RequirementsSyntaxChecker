import { useState } from 'react';
import * as XLSX from 'xlsx';
import { ProcessedRequirement } from '../types/requirements';
import { analyzeRequirement } from '../utils/requirementAnalyzer';

export const useRequirementsProcessor = () => {
  const [results, setResults] = useState<ProcessedRequirement[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [originalHeaders, setOriginalHeaders] = useState<string[]>([]);
  const [fileName, setFileName] = useState<string | null>(null);

  const processFile = async (file: File) => {
    setIsProcessing(true);
    setError(null);
    setFileName(file.name);

    try {
      const data = await readExcelFile(file);
      
      if (!data || !data.length) {
        throw new Error('No data found in the Excel file');
      }

      // Extract headers from the first row
      const headers = data[0];
      setOriginalHeaders(headers);

      if (headers.length < 2) {
        throw new Error('Excel file must have at least two columns: Name/ID and Requirements text');
      }

      // Process the data rows (skip the header row)
      const processedRequirements = data.slice(1).map((row, index) => {
        const name = row[0] || `REQ_${index + 1}`;
        const text = row[1];
        
        if (!text || typeof text !== 'string') {
          return {
            name: name,
            text: 'Invalid requirement',
            category: 'DOES NOT MEET',
            punctuation: 'N/A'
          };
        }

        return analyzeRequirement(name.toString(), text);
      });

      setResults(processedRequirements);
    } catch (err) {
      console.error('Error processing file:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setResults([]);
    } finally {
      setIsProcessing(false);
    }
  };

  const readExcelFile = (file: File): Promise<any[][]> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        try {
          const data = e.target?.result;
          const workbook = XLSX.read(data, { type: 'array' });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          resolve(json as any[][]);
        } catch (err) {
          reject(new Error('Failed to read Excel file. Please ensure it\'s a valid .xls or .xlsx file.'));
        }
      };
      
      reader.onerror = () => {
        reject(new Error('Failed to read the file. Please try again.'));
      };
      
      reader.readAsArrayBuffer(file);
    });
  };

  const exportResults = () => {
    if (!results.length) return;

    try {
      // Create a new workbook
      const wb = XLSX.utils.book_new();
      
      // Prepare the data for export, preserving all original columns
      const exportData = [
        [...originalHeaders, 'EARS Category', 'Punctuation Check'],
        ...results.map(row => {
          // Find the original row data
          const originalRow = originalHeaders.map(() => ''); // Create empty cells for all original columns
          originalRow[0] = row.name; // Set the name/ID
          originalRow[1] = row.text; // Set the requirement text
          
          return [
            ...originalRow,
            row.category,
            row.punctuation
          ];
        })
      ];
      
      // Create a worksheet
      const ws = XLSX.utils.aoa_to_sheet(exportData);
      
      // Add the worksheet to the workbook
      XLSX.utils.book_append_sheet(wb, ws, 'EARS_classified');
      
      // Generate output filename
      const outputFilename = fileName 
        ? fileName.replace(/\.(xls|xlsx)$/, '_EARS_classified.xlsx') 
        : 'requirements_EARS_classified.xlsx';
      
      // Write the workbook and trigger download
      XLSX.writeFile(wb, outputFilename);
    } catch (err) {
      console.error('Error exporting results:', err);
      setError('Failed to export results');
    }
  };

  return {
    results,
    isProcessing,
    error,
    processFile,
    exportResults,
    hasResults: results.length > 0
  };
};