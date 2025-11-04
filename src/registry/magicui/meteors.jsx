import React from "react";

export const Meteors = ({ number = 100, className }) => {
  const meteors = Array.from({ length: number }, (_, i) => ({
    id: i,
    delay: Math.random() * 10,
    duration: Math.random() * 8 + 2, // durations from 1s to 5s for more movement
    size: Math.floor(Math.random() * 4) + 4, // size 2 to 5 px
    x: Math.floor(Math.random() * 100),
    y: Math.floor(Math.random() * 100),
    opacity: (Math.random() * 1 + 1).toFixed(8) // opacity 0.5 to 1
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden ${className || ""}`}>
      <style>{`
        @keyframes meteor {
          0% {
            transform: rotate(215deg) translateX(0);
            opacity: 1;
            filter: drop-shadow(0 0 2px rgba(200, 230, 255, 0.8));
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: rotate(215deg) translateX(-700px);
            opacity: 0;
            filter: drop-shadow(0 0 10px rgba(200, 230, 255, 1));
          }
        }
        .animate-meteor {
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-name: meteor;
        }
      `}</style>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="absolute rounded-full bg-gradient-to-r from-white via-cyan-300 to-transparent animate-meteor"
          style={{
            top: `${meteor.y}%`,
            left: `${meteor.x}%`,
            width: `${meteor.size}px`,
            height: `${meteor.size}px`,
            opacity: meteor.opacity,
            boxShadow: `0 0 8px 2px rgba(200, 230, 255, 0.9), inset 0 0 5px 1.5px white`,
            transformOrigin: "50% 50%",
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
          }}
        >
          {/* Meteor Tail */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-24 h-px rounded-sm"
            style={{
              left: '100%',
              background:
                'linear-gradient(90deg, rgba(300,130,55,0.95) 0%, rgba(200,130,55,0.6) 40%, rgba(200,130,55,0) 100%)',
              filter: 'drop-shadow(0 0 5px rgba(200, 230, 155, 0.85))',
            }}
          />
        </span>
      ))}
    </div>
  );
};

export default Meteors;