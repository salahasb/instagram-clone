function SliderDots({ list, current }) {
  return (
    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-wrap gap-2">
      {list.map((_, i) => (
        <span
          className="size-[0.7rem] rounded-full bg-white  transition-colors "
          style={{ opacity: `${current - 1 === i ? '1' : '0.5'}` }}
          key={i}
        ></span>
      ))}
    </div>
  );
}

export default SliderDots;
