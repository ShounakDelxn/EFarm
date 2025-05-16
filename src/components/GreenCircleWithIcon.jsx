// components/GreenCircleWithIcon.jsx
export default function GreenCircleWithIcon({ size = "md", className = "", iconSize = "sm" }) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-32 h-32"
  };
  
  const iconSizeClasses = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-10 h-10"
  };
  
  return (
    <div 
      className={`
        ${sizeClasses[size] || sizeClasses.md}
        bg-green-500 
        rounded-full 
        shadow-lg
        flex
        items-center
        justify-center
        ${className}
      `}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className={`${iconSizeClasses[iconSize] || iconSizeClasses.sm} text-white`}
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" 
        />
      </svg>
    </div>
  );
}