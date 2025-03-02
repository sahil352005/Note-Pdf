
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface AboutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AboutDialog: React.FC<AboutDialogProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-purple-800">About MedDoc Viewer</DialogTitle>
          <DialogDescription>
            Version 1.0.0
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 p-2">
          <p className="text-gray-700">
            MedDoc Viewer is a sophisticated platform designed for healthcare professionals to view, manage, and summarize medical documents with powerful tools and an elegant interface.
          </p>
          
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
            <h3 className="font-semibold text-purple-800 mb-2">Key Features:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mt-0.5">✓</span>
                <span>Document tracking and organization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mt-0.5">✓</span>
                <span>Integrated PDF viewing with navigation controls</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mt-0.5">✓</span>
                <span>Rich text summary creation and export</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mt-0.5">✓</span>
                <span>Intuitive user interface with accessibility features</span>
              </li>
            </ul>
          </div>
          
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} MedDoc Viewer. All rights reserved.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutDialog;
