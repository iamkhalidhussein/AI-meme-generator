import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Download, Share2, Wand2, Zap, Cpu, Radio, Palette } from "lucide-react";

const generateAICaption = async () => "AI generated caption"
const suggestTrendingTopics = async () => ["Topic 1", "Topic 2", "Topic 3"]
const shareToSocialMedia = async () => console.log("Shared to social media")

export const MemeGenerator = () => {
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState<string | null>(null);
    const [fontSize, setFontSize] = useState(24);
    const [fontColor, setFontColor] = useState("#ffffff");
    const [sticker, setSticker] = useState<string | null>(null);
    const [aiPower, setAiPower] = useState(50);
    const [isGenerating, setIsGenerating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
          setAiPower((prev) => (prev + 1) % 101)
        }, 100)
        return () => clearInterval(interval)
      }, [])
      
      const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
          const reader = new FileReader()
          reader.onloadend = () => {
            setImage(reader.result as string)
          }
          reader.readAsDataURL(file)
        }
      }

      const handleAICaption = async () => {
        setIsGenerating(true)
        const aiCaption = await generateAICaption()
        setCaption(aiCaption)
        setIsGenerating(false)
      }
    
      const handleDownload = () => {
        console.log("Downloading meme...")
      }

    return (
        <div className="w-full max-w-4xl mx-auto bg-gray-900 text-green-400 p-8 rounded-lg shadow-lg font-mono">
      <h1 className="text-4xl mb-6 text-center glitch" data-text="Meme Control Center">
        Meme Control Center
      </h1>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="caption" className="text-green-400">
              Caption Transmission
            </Label>
            <div className="flex space-x-2">
              <Input
                id="caption"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Enter meme caption"
                className="bg-gray-800 border-green-400 text-green-400 placeholder-green-600"
              />
              <Button onClick={handleAICaption} className="bg-green-600 hover:bg-green-700 text-black">
                <Wand2 className="mr-2 h-4 w-4" />
                AI Boost
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="image" className="text-green-400">
              Image Uplink
            </Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="bg-gray-800 border-green-400 text-green-400"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-green-400">Font Amplification</Label>
            <div className="flex items-center space-x-4">
              <Slider
                min={12}
                max={48}
                step={1}
                value={[fontSize]}
                onValueChange={(value) => setFontSize(value[0])}
                className="flex-grow"
              />
              <span className="text-2xl">{fontSize}px</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="fontColor" className="text-green-400">
              Chromatic Modulation
            </Label>
            <div className="flex items-center space-x-4">
              <Input
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
            <Label htmlFor="sticker" className="text-green-400">
              Emoji Infusion
            </Label>
            <div className="grid grid-cols-4 gap-2">
              {["😂", "🎉", "❤️", "🚀", "🔥", "💡", "🌈", "🍕"].map((emoji) => (
                <Button
                  key={emoji}
                  onClick={() => setSticker(emoji)}
                  className={`text-2xl ${sticker === emoji ? "bg-green-600" : "bg-gray-700"} hover:bg-green-500`}
                >
                  {emoji}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border-2 border-green-400 rounded-lg p-4 min-h-[300px] flex items-center justify-center bg-gray-800 relative overflow-hidden">
            {image ? (
              <div className="relative inline-block">
                <img src={image || "/placeholder.svg"} alt="Meme" className="max-w-full max-h-[280px]" />
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    fontSize: `${fontSize}px`,
                    color: fontColor,
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  {caption}
                </div>
                {sticker && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      right: "10px",
                      fontSize: "40px",
                    }}
                  >
                    {sticker}
                  </div>
                )}
              </div>
            ) : (
              <p className="text-green-400">Initiate image uplink to preview your meme</p>
            )}
            <div className="absolute inset-0 pointer-events-none">
              <div className="w-full h-full opacity-50 bg-repeat bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')]"></div>
            </div>
          </div>

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
          </div>

          <div className="flex justify-between">
            <Button onClick={handleDownload} className="bg-blue-600 hover:bg-blue-700 text-white">
              <Download className="mr-2 h-4 w-4" />
              Extract Meme
            </Button>
            <Button onClick={shareToSocialMedia} className="bg-purple-600 hover:bg-purple-700 text-white">
              <Share2 className="mr-2 h-4 w-4" />
              Broadcast
            </Button>
          </div>

          <div className="mt-4 flex justify-center">
            <Radio className="h-8 w-8 text-red-500 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
    )
};