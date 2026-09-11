type WebsiteDotsProps = {
  count: number;
  activeIndex: number;
  onChange: (index: number) => void;
};

function WebsiteDots({
  count,
  activeIndex,
  onChange,
}: WebsiteDotsProps) {
  return (
    <div className="mt-6 flex justify-center gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Show website ${index + 1}`}
          onClick={() => onChange(index)}
          className={`h-2 rounded-full transition-all ${
            index === activeIndex
              ? "w-7 bg-white"
              : "w-2 bg-white/25"
          }`}
        />
      ))}
    </div>
  );
}

export default WebsiteDots;
