
import React from 'react';
import { FileItem } from '@/types';
import { CheckCircle, Circle, FileText, File } from 'lucide-react';

interface CompletionTrackerProps {
  files: FileItem[];
  selectedFileId: number | null;
  onSelectFile: (fileId: number) => void;
}

const CompletionTracker: React.FC<CompletionTrackerProps> = ({
  files,
  selectedFileId,
  onSelectFile
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 h-full overflow-hidden flex flex-col">
      <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-purple-50 to-indigo-50">
        <h2 className="text-xl font-semibold text-purple-800 flex items-center gap-2">
          <FileText size={20} className="text-purple-600" />
          Document Library
        </h2>
        <p className="text-sm text-gray-500 mt-1">Select a document to view</p>
      </div>

      <div className="overflow-y-auto flex-1 fade-mask">
        <div className="p-3">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search documents..." 
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            />
            <svg 
              className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        
        <div className="px-3 py-2">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider px-2 mb-2">Diagnostic Reports</div>
          {files.filter(file => file.reportType === 'Diagnostic Reports').map((file) => (
            <div 
              key={file.id}
              onClick={() => onSelectFile(file.id)}
              className={`flex items-center gap-3 p-3 rounded-lg mb-1 cursor-pointer transition-all ${
                selectedFileId === file.id 
                  ? 'bg-purple-100 border-l-4 border-purple-500' 
                  : 'hover:bg-gray-50 border-l-4 border-transparent'
              }`}
            >
              <div className="flex-shrink-0">
                <File size={20} className="text-purple-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium truncate ${selectedFileId === file.id ? 'text-purple-800' : 'text-gray-700'}`}>
                  {file.name}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {file.reportType}
                </p>
              </div>
              <div className="flex-shrink-0">
                {file.accepted ? (
                  <CheckCircle className="text-green-500 h-5 w-5" />
                ) : (
                  <Circle className="text-gray-300 h-5 w-5" />
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="px-3 py-2">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider px-2 mb-2">Medical Reports</div>
          {files.filter(file => file.reportType === 'Medical Reports' || file.reportType === 'Medical Records' || file.reportType === 'Operative report').map((file) => (
            <div 
              key={file.id}
              onClick={() => onSelectFile(file.id)}
              className={`flex items-center gap-3 p-3 rounded-lg mb-1 cursor-pointer transition-all ${
                selectedFileId === file.id 
                  ? 'bg-purple-100 border-l-4 border-purple-500' 
                  : 'hover:bg-gray-50 border-l-4 border-transparent'
              }`}
            >
              <div className="flex-shrink-0">
                <File size={20} className="text-purple-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium truncate ${selectedFileId === file.id ? 'text-purple-800' : 'text-gray-700'}`}>
                  {file.name}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {file.reportType}
                </p>
              </div>
              <div className="flex-shrink-0">
                {file.accepted ? (
                  <CheckCircle className="text-green-500 h-5 w-5" />
                ) : (
                  <Circle className="text-gray-300 h-5 w-5" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompletionTracker;
