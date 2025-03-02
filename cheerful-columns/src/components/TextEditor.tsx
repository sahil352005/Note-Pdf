
import React, { useState } from 'react';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Type, Save, Check, RotateCcw } from 'lucide-react';

interface TextEditorProps {
  onSave: (text: string) => void;
  value: string;
  onChange: (text: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ onSave, value, onChange }) => {
  const [isBold, setIsBold] = useState<boolean>(false);
  const [isItalic, setIsItalic] = useState<boolean>(false);
  const [isUnderlined, setIsUnderlined] = useState<boolean>(false);
  const [alignment, setAlignment] = useState<'left' | 'center' | 'right'>('left');

  const handleSave = () => {
    onSave(value);
  };

  const toggleBold = () => {
    setIsBold(!isBold);
  };

  const toggleItalic = () => {
    setIsItalic(!isItalic);
  };

  const toggleUnderline = () => {
    setIsUnderlined(!isUnderlined);
  };

  const setTextAlign = (align: 'left' | 'center' | 'right') => {
    setAlignment(align);
  };

  const formatText = (action: string) => {
    switch(action) {
      case 'uppercase':
        onChange(value.toUpperCase());
        break;
      case 'lowercase':
        onChange(value.toLowerCase());
        break;
      case 'capitalize':
        onChange(value.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '));
        break;
      case 'clear':
        onChange('');
        break;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 h-full flex flex-col">
      <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-purple-50 to-indigo-50">
        <h2 className="text-xl font-semibold text-purple-800 flex items-center gap-2">
          <Type size={20} className="text-purple-600" />
          Summary Editor
        </h2>
        <p className="text-sm text-gray-500 mt-1">Create document summaries</p>
      </div>

      <div className="flex-1 p-4 flex flex-col">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-2 mb-4 flex flex-wrap gap-1">
          <button 
            onClick={toggleBold}
            className={`p-2 rounded ${isBold ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100 text-gray-700'}`}
            title="Bold"
          >
            <Bold size={16} />
          </button>
          <button 
            onClick={toggleItalic}
            className={`p-2 rounded ${isItalic ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100 text-gray-700'}`}
            title="Italic"
          >
            <Italic size={16} />
          </button>
          <button 
            onClick={toggleUnderline}
            className={`p-2 rounded ${isUnderlined ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100 text-gray-700'}`}
            title="Underline"
          >
            <Underline size={16} />
          </button>
          
          <div className="h-6 w-px bg-gray-300 mx-1"></div>
          
          <button 
            onClick={() => setTextAlign('left')}
            className={`p-2 rounded ${alignment === 'left' ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100 text-gray-700'}`}
            title="Align Left"
          >
            <AlignLeft size={16} />
          </button>
          <button 
            onClick={() => setTextAlign('center')}
            className={`p-2 rounded ${alignment === 'center' ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100 text-gray-700'}`}
            title="Align Center"
          >
            <AlignCenter size={16} />
          </button>
          <button 
            onClick={() => setTextAlign('right')}
            className={`p-2 rounded ${alignment === 'right' ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100 text-gray-700'}`}
            title="Align Right"
          >
            <AlignRight size={16} />
          </button>
          
          <div className="h-6 w-px bg-gray-300 mx-1"></div>
          
          <button 
            onClick={() => formatText('uppercase')}
            className="p-2 rounded hover:bg-gray-100 text-gray-700"
            title="UPPERCASE"
          >
            <span className="text-xs font-bold">ABC</span>
          </button>
          <button 
            onClick={() => formatText('lowercase')}
            className="p-2 rounded hover:bg-gray-100 text-gray-700"
            title="lowercase"
          >
            <span className="text-xs font-bold">abc</span>
          </button>
          <button 
            onClick={() => formatText('capitalize')}
            className="p-2 rounded hover:bg-gray-100 text-gray-700"
            title="Capitalize"
          >
            <span className="text-xs font-bold">Abc</span>
          </button>
          
          <div className="h-6 w-px bg-gray-300 mx-1"></div>
          
          <button 
            onClick={() => formatText('clear')}
            className="p-2 rounded hover:bg-gray-100 text-gray-700"
            title="Clear"
          >
            <RotateCcw size={16} />
          </button>
          
          <button 
            onClick={handleSave}
            className="ml-auto p-2 rounded bg-purple-600 text-white hover:bg-purple-700 flex items-center gap-1"
            title="Save"
          >
            <Save size={16} />
            <span className="text-xs font-medium">Save</span>
          </button>
        </div>

        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Create a summary of the document here..."
          className={`flex-1 p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all font-${isBold ? 'bold' : 'normal'} ${isItalic ? 'italic' : ''} ${isUnderlined ? 'underline' : ''}`}
          style={{ textAlign: alignment }}
        />
      </div>
    </div>
  );
};

export default TextEditor;
