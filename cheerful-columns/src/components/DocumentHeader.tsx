
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Save } from 'lucide-react';

interface DocumentHeaderProps {
  onSaveSummary: (text: string) => void;
  summaryText: string;
}

const DocumentHeader: React.FC<DocumentHeaderProps> = ({ onSaveSummary, summaryText }) => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center text-gray-600 hover:text-purple-700 transition-colors">
            <ChevronLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>
        <h1 className="text-xl font-semibold text-purple-800">Medical Document Viewer</h1>
        <div className="flex gap-2">
          <button 
            onClick={() => onSaveSummary(summaryText)}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
          >
            <Save size={16} />
            Save Summary
          </button>
        </div>
      </div>
    </header>
  );
};

export default DocumentHeader;
