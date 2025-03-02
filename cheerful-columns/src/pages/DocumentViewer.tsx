
import React, { useState, useEffect } from 'react';
import CompletionTracker from '@/components/CompletionTracker';
import FileViewer from '@/components/FileViewer';
import TextEditor from '@/components/TextEditor';
import DocumentHeader from '@/components/DocumentHeader';
import FeatureToolbar from '@/components/FeatureToolbar';
import AboutDialog from '@/components/dialogs/AboutDialog';
import HelpDialog from '@/components/dialogs/HelpDialog';
import SettingsDialog from '@/components/dialogs/SettingsDialog';
import { FileItem } from '@/types';
import { toast } from 'sonner';

const DocumentViewer = () => {
  const [files, setFiles] = useState<FileItem[]>([
    { id: 1, name: 'Lab Report', reportType: 'Diagnostic Reports', accepted: true, path: '/sample-pdfs/sample1.pdf' },
    { id: 2, name: 'Sleep Study', reportType: 'Diagnostic Reports', accepted: true, path: '/sample-pdfs/sample2.pdf' },
    { id: 3, name: 'Chest X-ray', reportType: 'Diagnostic Reports', accepted: true, path: '/sample-pdfs/sample3.pdf' },
    { id: 4, name: '2-D Echocardiogram', reportType: 'Diagnostic Reports', accepted: true, path: '/sample-pdfs/sample4.pdf' },
    { id: 5, name: 'MRI', reportType: 'Diagnostic Reports', accepted: true, path: '/sample-pdfs/sample5.pdf' },
    { id: 6, name: 'Ultrasound', reportType: 'Diagnostic Reports', accepted: true, path: '/sample-pdfs/sample6.pdf' },
    { id: 7, name: 'Operative report', reportType: 'Operative report', accepted: true, path: '/sample-pdfs/sample7.pdf' },
    { id: 8, name: 'Office Visit', reportType: 'Medical Reports', accepted: true, path: '/sample-pdfs/sample8.pdf' },
    { id: 9, name: 'Medical Legal Report', reportType: 'Medical Records', accepted: true, path: '/sample-pdfs/sample9.pdf' },
  ]);
  
  const [selectedFileId, setSelectedFileId] = useState<number | null>(null);
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
  const [summaryText, setSummaryText] = useState<string>('');
  const [aboutOpen, setAboutOpen] = useState<boolean>(false);
  const [helpOpen, setHelpOpen] = useState<boolean>(false);
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (selectedFileId) {
      const file = files.find(f => f.id === selectedFileId) || null;
      setSelectedFile(file);
      setSummaryText('');
    } else {
      setSelectedFile(null);
    }
  }, [selectedFileId, files]);

  const handleSelectFile = (fileId: number) => {
    setSelectedFileId(fileId);
  };

  const handleSaveSummary = (text: string) => {
    if (!text.trim()) {
      toast.error("Summary cannot be empty");
      return;
    }
    
    toast.success("Summary saved successfully");
    setSummaryText(text);
    
    console.log('Saved summary:', text);
  };

  const handleDownloadSummary = () => {
    if (!summaryText.trim()) {
      toast.error("No summary to download");
      return;
    }
    
    const blob = new Blob([summaryText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `summary-${selectedFile?.name || 'document'}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success("Summary downloaded successfully");
  };

  const handleSearch = () => {
    toast.info("Search functionality will be implemented in a future update");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 flex flex-col">
      <DocumentHeader 
        onSaveSummary={handleSaveSummary}
        summaryText={summaryText}
      />
      
      <main className="flex-1 container mx-auto p-6 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-8rem)]">
          <div className="lg:col-span-1 animate-slide-up" style={{animationDelay: '0.1s'}}>
            <CompletionTracker 
              files={files} 
              selectedFileId={selectedFileId}
              onSelectFile={handleSelectFile}
            />
          </div>
          
          <div className="lg:col-span-1 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <FileViewer selectedFile={selectedFile} />
          </div>
          
          <div className="lg:col-span-1 animate-slide-up" style={{animationDelay: '0.3s'}}>
            <TextEditor 
              onSave={handleSaveSummary}
              value={summaryText}
              onChange={setSummaryText}
            />
          </div>
        </div>
      </main>

      <FeatureToolbar 
        onAboutClick={() => setAboutOpen(true)}
        onHelpClick={() => setHelpOpen(true)}
        onSettingsClick={() => setSettingsOpen(true)}
        onSearchClick={handleSearch}
        onDownloadClick={handleDownloadSummary}
      />

      <AboutDialog 
        open={aboutOpen} 
        onOpenChange={setAboutOpen} 
      />

      <HelpDialog 
        open={helpOpen} 
        onOpenChange={setHelpOpen} 
      />

      <SettingsDialog 
        open={settingsOpen} 
        onOpenChange={setSettingsOpen} 
      />
    </div>
  );
};

export default DocumentViewer;
