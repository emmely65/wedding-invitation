export default function IslamicOrnament({ className = '', size = 'md' }) {
  const sizes = { sm: 'w-16 h-16', md: 'w-24 h-24', lg: 'w-32 h-32' };
  return (
    <svg
      className={`${sizes[size] || sizes.md} ${className} pointer-events-none opacity-30`}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Islamic geometric star pattern */}
      <g stroke="currentColor" strokeWidth="1.2" opacity="0.6">
        <polygon points="100,10 120,80 190,80 130,120 150,190 100,150 50,190 70,120 10,80 80,80" />
        <circle cx="100" cy="100" r="60" />
        <circle cx="100" cy="100" r="40" />
        <line x1="100" y1="30" x2="100" y2="170" />
        <line x1="30" y1="100" x2="170" y2="100" />
        <line x1="50" y1="50" x2="150" y2="150" />
        <line x1="150" y1="50" x2="50" y2="150" />
      </g>
    </svg>
  );
}
