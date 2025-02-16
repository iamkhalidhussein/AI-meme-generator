import { Wand2, Loader2, Palette } from 'lucide-react';

interface MemeFormProps {
  caption: string;
  setCaption: (value: string) => void;
  handleAICaption: () => void;
  isGenerating: boolean;
  handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fontSize: number;
  setFontSize: (value: number) => void;
  fontColor: string;
  setFontColor: (value: string) => void;
  sticker: string | null;
  setSticker: (value: string) => void;
  uploadingImg: boolean;
}


export const MemeForm: React.FC<MemeFormProps> = ({
  caption,
  setCaption,
  handleAICaption,
  isGenerating,
  handleImageUpload,
  fontSize,
  setFontSize,
  fontColor,
  setFontColor,
  sticker,
  setSticker,
  uploadingImg
}) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="caption" className="text-green-400">
          Caption Transmission
        </label>
        <div className="flex space-x-2">
          <input
            id="caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Enter meme caption"
            className="bg-gray-800 border-green-400 text-green-400 placeholder-green-600"
          />
          <button onClick={handleAICaption} className="bg-green-600 hover:bg-green-700 text-black flex items-center px-2 rounded py-2" disabled={isGenerating}>
            <Wand2 className="mr-2 h-4 w-4" />
            AI Boost
            {isGenerating && <Loader2 className="animate-spin"/>}
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="image" className="text-green-400">
          Image Uplink
        </label>
        <div className="flex relative">
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            disabled={uploadingImg}
            className="bg-gray-800 border-green-400 text-green-400"
          />
          {uploadingImg && <Loader2 className="animate-spin absolute right-2 top-1"/>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-green-400">Font Amplification</label>
        <div className="flex items-center space-x-4">
          <input
            type="range"
            min={12}
            max={48}
            step={1}
            value={fontSize}
            onChange={(e) => setFontSize(parseInt(e.target.value))}
            className="flex-grow"
          />
          <span className="text-2xl">{fontSize}px</span>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="fontColor" className="text-green-400">
          Chromatic Modulation
        </label>
        <div className="flex items-center space-x-4">
          <input
            id="fontColor"
            type="color"
            value={fontColor}
            onChange={(e) => setFontColor(e.target.value)}
            className="w-16 h-16 p-1 bg-gray-800 border-green-400"
          />
          <Palette className="h-8 w-8" style={{ color: fontColor }} />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="sticker" className="text-green-400">
          Emoji Infusion
        </label>
        <div className="grid grid-cols-4 gap-2">
          {["😂", "🎉", "❤️", "🚀", "🔥", "💡", "🌈", "🍕"].map((emoji) => (
            <button
              key={emoji}
              onClick={() => setSticker(emoji)}
              className={`text-2xl ${sticker === emoji ? "bg-green-600" : "bg-gray-700"} hover:bg-green-500`}
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};