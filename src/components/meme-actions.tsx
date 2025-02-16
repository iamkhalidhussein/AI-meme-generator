import { Cpu, Download, Share2, Radio } from 'lucide-react';

interface MemeActionsProps {
  isGenerating: boolean;
  aiPower: number;
  handleDownload: () => void;
  shareToSocialMedia: () => void;
}
export const MemeActions: React.FC<MemeActionsProps> = ({ 
    isGenerating, 
    aiPower, 
    handleDownload, 
    shareToSocialMedia 
}) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-xl">AI Power Levels</span>
        <Cpu className={`h-6 w-6 ${isGenerating ? "animate-spin text-yellow-400" : ""}`} />
      </div>
      <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-green-400 to-blue-500"
          style={{ width: `${aiPower}%`, transition: "width 0.5s ease" }}
        ></div>
      </div>

      <div className="flex justify-between">
        <button onClick={handleDownload} className="bg-blue-600 hover:bg-blue-700 text-white flex items-center py-2 px-2 rounded">
          <Download className="mr-2 h-4 w-4" />
          Extract Meme
        </button>
        <button onClick={shareToSocialMedia} className="bg-purple-600 hover:bg-purple-700 text-white flex items-center py-2 px-2 rounded">
          <Share2 className="mr-2 h-4 w-4" />
          Broadcast
        </button>
      </div>

      <div className="mt-4 flex justify-center">
        <Radio className="h-8 w-8 text-red-500 animate-pulse" />
      </div>
    </div>
  );
};