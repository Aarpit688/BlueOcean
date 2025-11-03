import React from "react";

export const Meteors = ({ number, className }) => {
  const meteors = Array.from({ length: number || 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: Math.floor(Math.random() * 8 + 2),
    size: Math.floor(Math.random() * 3 + 2),
    x: Math.floor(Math.random() * 100),
    y: Math.floor(Math.random() * 100),
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden ${className || ""}`}>
      <style>{`
        @keyframes meteor {
          0% {
            transform: rotate(215deg) translateX(0);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: rotate(215deg) translateX(-500px);
            opacity: 0;
          }
        }
        .animate-meteor {
          animation: meteor 10s linear infinite;
        }
      `}</style>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="absolute h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"
          style={{
            top: `${meteor.y}%`,
            left: `${meteor.x}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
          }}
        >
          {/* Meteor Tail */}
          <div className="absolute top-1/2 -z-10 h-px w-16 -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
        </span>
      ))}
    </div>
  );
};

export default Meteors;