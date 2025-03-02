
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, Maximize, Minimize, RotateCw, File, Download } from 'lucide-react';
import { FileItem } from '@/types';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface FileViewerProps {
  selectedFile: FileItem | null;
}

const FileViewer: React.FC<FileViewerProps> = ({ selectedFile }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset: number) {
    if (!numPages) return;
    setPageNumber(prevPageNumber => {
      const newPage = prevPageNumber + offset;
      return newPage >= 1 && newPage <= numPages ? newPage : prevPageNumber;
    });
  }

  function zoomIn() {
    setScale(prevScale => Math.min(prevScale + 0.2, 2));
  }

  function zoomOut() {
    setScale(prevScale => Math.max(prevScale - 0.2, 0.6));
  }

  function rotateDocument() {
    setRotation(prevRotation => (prevRotation + 90) % 360);
  }

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 h-full flex flex-col">
      <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-purple-50 to-indigo-50">
        <h2 className="text-xl font-semibold text-purple-800 flex items-center gap-2">
          <File size={20} className="text-purple-600" />
          Document Viewer
        </h2>
        <p className="text-sm text-gray-500 mt-1">View and review selected files</p>
      </div>

      <div className="flex-1 overflow-hidden flex flex-col">
        {selectedFile ? (
          <>
            <div className="bg-gray-50 p-4 flex justify-between items-center border-b border-gray-100">
              <div className="flex flex-col">
                <span className="text-base font-medium text-gray-800">{selectedFile.name}</span>
                <span className="text-sm text-gray-500">{selectedFile.reportType}</span>
              </div>
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded text-sm font-medium transition-colors">
                <Download size={16} />
                Download
              </button>
            </div>

            <div className="flex-1 overflow-auto flex justify-center p-4 bg-gray-50">
              <div className="relative shadow-2xl max-w-full">
                <Document
                  file={selectedFile.path}
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={
                    <div className="flex items-center justify-center h-40 w-64 bg-white border border-gray-200 rounded">
                      <div className="flex flex-col items-center gap-2">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-700"></div>
                        <p className="text-gray-500 text-sm">Loading document...</p>
                      </div>
                    </div>
                  }
                  error={
                    <div className="flex items-center justify-center h-40 w-64 bg-white border border-gray-200 rounded">
                      <div className="flex flex-col items-center gap-2 text-center p-4">
                        <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <p className="text-red-500 text-sm">Error loading PDF. Please try again.</p>
                      </div>
                    </div>
                  }
                >
                  <Page
                    pageNumber={pageNumber}
                    scale={scale}
                    rotate={rotation}
                    className="shadow-lg"
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </Document>
              </div>
            </div>

            <div className="py-3 px-4 bg-white border-t border-gray-200 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => changePage(-1)} 
                  disabled={pageNumber <= 1}
                  className="p-1.5 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent"
                >
                  <ChevronLeft size={18} className="text-gray-700" />
                </button>
                <span className="text-sm font-medium text-gray-700">
                  Page {pageNumber} of {numPages || '?'}
                </span>
                <button 
                  onClick={() => changePage(1)} 
                  disabled={!numPages || pageNumber >= numPages}
                  className="p-1.5 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent"
                >
                  <ChevronRight size={18} className="text-gray-700" />
                </button>
              </div>
              
              <div className="flex items-center space-x-3">
                <button 
                  onClick={zoomOut} 
                  className="p-1.5 rounded-full hover:bg-gray-100 text-gray-700"
                  title="Zoom out"
                >
                  <Minimize size={18} />
                </button>
                <div className="text-sm font-medium text-gray-700">{Math.round(scale * 100)}%</div>
                <button 
                  onClick={zoomIn} 
                  className="p-1.5 rounded-full hover:bg-gray-100 text-gray-700"
                  title="Zoom in"
                >
                  <Maximize size={18} />
                </button>
                <div className="w-px h-6 bg-gray-200 mx-1"></div>
                <button 
                  onClick={rotateDocument} 
                  className="p-1.5 rounded-full hover:bg-gray-100 text-gray-700"
                  title="Rotate"
                >
                  <RotateCw size={18} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center p-6 max-w-sm">
              <div className="mx-auto w-16 h-16 bg-purple-100 flex items-center justify-center rounded-full mb-4">
                <File size={24} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">No Document Selected</h3>
              <p className="text-gray-500 text-sm">
                Please select a document from the library on the left to view it in detail.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileViewer;
