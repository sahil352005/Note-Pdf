
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface HelpDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const HelpDialog: React.FC<HelpDialogProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-purple-800">How to Use MedDoc Viewer</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 p-2">
          <div className="border-l-4 border-purple-400 pl-4 py-2">
            <h3 className="font-semibold text-purple-800 mb-1">Document Selection</h3>
            <p className="text-gray-700">
              Click on any document in the left panel to view it in the center panel.
            </p>
          </div>
          
          <div className="border-l-4 border-purple-400 pl-4 py-2">
            <h3 className="font-semibold text-purple-800 mb-1">Creating Summaries</h3>
            <p className="text-gray-700">
              Use the editor in the right panel to write your document summary. Format text using the toolbar options.
            </p>
          </div>
          
          <div className="border-l-4 border-purple-400 pl-4 py-2">
            <h3 className="font-semibold text-purple-800 mb-1">Saving Work</h3>
            <p className="text-gray-700">
              Click the "Save Summary" button to save your work. You can also download your summary as a text file.
            </p>
          </div>
          
          <div className="border-l-4 border-purple-400 pl-4 py-2">
            <h3 className="font-semibold text-purple-800 mb-1">Need Additional Help?</h3>
            <p className="text-gray-700">
              Contact our support team at support@meddocviewer.com
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HelpDialog;
