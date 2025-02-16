
export const MemePreview = ({ imageURL, caption, fontSize, fontColor, sticker }) => {
  return (
    <div className="border-2 border-green-400 rounded-lg p-4 min-h-[300px] flex items-center justify-center bg-gray-800 relative overflow-hidden">
      {imageURL ? (
        <div className="relative inline-block">
          <img src={imageURL || "/placeholder.svg"} alt="Meme" className="max-w-full max-h-[280px]" />
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
  );
};