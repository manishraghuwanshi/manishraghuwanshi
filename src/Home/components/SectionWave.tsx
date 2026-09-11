type SectionWaveProps = {
  fill?: string;
};

function SectionWave({
  fill = "#050b12",
}: SectionWaveProps) {
  return (
    <div
      aria-hidden="true"
      className="relative -my-px h-12 overflow-hidden bg-black sm:h-16"
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path
          d="M0 55C180 15 300 88 480 52C660 15 760 18 930 55C1110 93 1240 18 1440 50V100H0Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export default SectionWave;
