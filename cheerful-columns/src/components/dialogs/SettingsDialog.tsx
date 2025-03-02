
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SettingsDialog: React.FC<SettingsDialogProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-purple-800">Settings</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 p-2">
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-700">Display Options</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Enable Dark Mode</span>
              <div className="bg-gray-200 w-12 h-6 rounded-full relative cursor-pointer">
                <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Show Document Thumbnails</span>
              <div className="bg-purple-600 w-12 h-6 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 bg-white w-4 h-4 rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-700">Text Editor Settings</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Auto-save (every 30 seconds)</span>
              <div className="bg-purple-600 w-12 h-6 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 bg-white w-4 h-4 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Spell Check</span>
              <div className="bg-purple-600 w-12 h-6 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 bg-white w-4 h-4 rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="pt-2 flex justify-end">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
              Save Settings
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsDialog;
