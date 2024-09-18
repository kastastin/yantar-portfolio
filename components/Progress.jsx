const Progress = ({ progress }) => {
  return (
    <div className="h-0 w-full border-t border-dotted border-black">
      <div
        className="animate-progress relative h-[3px] translate-y-[-2px] bg-[#F7BF00]"
        style={{ "--progress-width": `${progress}%` }}
      >
        <div className="absolute right-0 top-1/2 size-2 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#F7BF00]" />
      </div>
    </div>
  );
};

export default Progress;
