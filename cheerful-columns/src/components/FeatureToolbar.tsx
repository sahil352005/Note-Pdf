
import React from 'react';
import { 
  Info, 
  HelpCircle, 
  Settings, 
  Search,
  Download
} from 'lucide-react';

interface FeatureToolbarProps {
  onAboutClick: () => void;
  onHelpClick: () => void;
  onSettingsClick: () => void;
  onSearchClick: () => void;
  onDownloadClick: () => void;
}

const FeatureToolbar: React.FC<FeatureToolbarProps> = ({ 
  onAboutClick,
  onHelpClick,
  onSettingsClick,
  onSearchClick,
  onDownloadClick
}) => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-xl p-1 animate-scale-in">
      <div className="flex items-center space-x-2">
        <button 
          onClick={onAboutClick}
          className="p-3 rounded-full text-purple-600 hover:bg-purple-50 transition-colors tooltip-trigger"
          title="About"
        >
          <Info size={20} />
        </button>
        
        <button 
          onClick={onHelpClick}
          className="p-3 rounded-full text-purple-600 hover:bg-purple-50 transition-colors"
          title="Help"
        >
          <HelpCircle size={20} />
        </button>
        
        <button 
          onClick={onSearchClick}
          className="p-3 rounded-full text-purple-600 hover:bg-purple-50 transition-colors"
          title="Search Documents"
        >
          <Search size={20} />
        </button>
        
        <button 
          onClick={onDownloadClick}
          className="p-3 rounded-full text-purple-600 hover:bg-purple-50 transition-colors"
          title="Download Summary"
        >
          <Download size={20} />
        </button>
        
        <button 
          onClick={onSettingsClick}
          className="p-3 rounded-full text-purple-600 hover:bg-purple-50 transition-colors"
          title="Settings"
        >
          <Settings size={20} />
        </button>
      </div>
    </div>
  );
};

export default FeatureToolbar;
