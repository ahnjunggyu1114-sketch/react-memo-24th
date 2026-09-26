export default function TagIcon({ width = 13, height = 16, ...props }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M0 16L13 8L0 0V16Z" fill="currentColor" />
    </svg>
  );
}
