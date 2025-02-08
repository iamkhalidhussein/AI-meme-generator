import { MemeGenerator } from "./components/meme-generator";

const App = () => {
  return (
    <div className="min-h-screen bg-black py-10 px-4">
      <style>{`
        @keyframes glitch {
          0% {
            text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                         -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
                         -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
          }
          14% {
            text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                         -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
                         -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
          }
          15% {
            text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
                         0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
                         -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          49% {
            text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
                         0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
                         -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          50% {
            text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
                         0.05em 0 0 rgba(0, 255, 0, 0.75),
                         0 -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          99% {
            text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
                         0.05em 0 0 rgba(0, 255, 0, 0.75),
                         0 -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          100% {
            text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
                         -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
                         -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
          }
        }

        .glitch {
          animation: glitch 1s linear infinite;
        }

        @keyframes scanline {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100%);
          }
        }

        .scanline::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: rgba(0, 255, 0, 0.2);
          animation: scanline 6s linear infinite;
        }
      `}</style>
      <div>
        <MemeGenerator />
      </div>
    </div>
  );
};

export default App;