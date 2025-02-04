'use client';

interface ToggleButtonsProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const ToggleButtons: React.FC<ToggleButtonsProps> = ({ selected, setSelected }) => {
  return (
    <div className="flex-center flex-nowrap gap-3 bg-[#1C1C1C] border border-[#262626] p-3 rounded-full w-fit">
      <button
        className={`whitespace-nowrap px-4 py-2 rounded-full transition-colors duration-300 ${
          selected === 'individuals'
            ? 'btn-primary'
            : 'bg-transparent text-[#B3B3B3] hover:bg-[#262626]'
        }`}
        onClick={() => setSelected('individuals')}
      >
        For Individuals
      </button>

      <button
        className={`whitespace-nowrap px-4 py-2 rounded-full transition-colors duration-300 ${
          selected === 'business'
            ? 'btn-primary'
            : 'bg-transparent text-[#B3B3B3] hover:bg-[#262626]'
        }`}
        onClick={() => setSelected('business')}
      >
        For Business
      </button>
    </div>
  );
};

export default ToggleButtons;
