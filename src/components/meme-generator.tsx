import { useState, useEffect } from "react";
import { MemeForm } from "./meme-form";
import { MemePreview } from "./meme-preview";
import { MemeActions } from "./meme-actions";
import useHandleAiCaption from "@/hooks/useHandleAiCaption";
import useImgUpload from "@/hooks/useImgUpload";

export const MemeGenerator = () => {
    const [caption, setCaption] = useState("");
    const [fontSize, setFontSize] = useState(24);
    const [fontColor, setFontColor] = useState("#ffffff");
    const [sticker, setSticker] = useState<string | null>(null);
    const [aiPower, setAiPower] = useState(50);
    const [isGenerating, setIsGenerating] = useState(false);
    const [uploadingImg, setUploadingImg] = useState(false);
    const [imageURL, setImageURL] = useState<string | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
          setAiPower((prev) => (prev + 1) % 101)
        }, 100)
        return () => clearInterval(interval)
      }, []);
      
      const handleImageUpload = useImgUpload(setUploadingImg, setImageURL);

      const handleAICaption = useHandleAiCaption(setIsGenerating, setCaption, imageURL);
    
    return (
      <div className="w-full max-w-4xl mx-auto bg-gray-900 text-green-400 p-8 rounded-lg shadow-lg font-mono">
      <h1 className="text-4xl mb-6 text-center glitch" data-text="Meme Control Center">
        Meme Control Center
      </h1>

      <div className="grid grid-cols-2 gap-8">
        <MemeForm
          caption={caption}
          setCaption={setCaption}
          handleAICaption={handleAICaption}
          isGenerating={isGenerating}
          handleImageUpload={handleImageUpload}
          fontSize={fontSize}
          setFontSize={setFontSize}
          fontColor={fontColor}
          setFontColor={setFontColor}
          sticker={sticker}
          setSticker={setSticker}
          uploadingImg={uploadingImg}
        />
        <div className="space-y-6">
          <MemePreview
            imageURL={imageURL}
            caption={caption}
            fontSize={fontSize}
            fontColor={fontColor}
            sticker={sticker}
          />
          <MemeActions
            isGenerating={isGenerating}
            aiPower={aiPower}
            handleDownload={() => {}}
            shareToSocialMedia={() =>{}}
          />
        </div>
      </div>
    </div>
    )
};