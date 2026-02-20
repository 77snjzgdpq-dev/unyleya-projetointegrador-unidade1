import { IoSearch } from "react-icons/io5";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  placeholder?: string;
  width?: string;
};

export default function SearchBar({
                                    value,
                                    onChange,
                                    onSearch,
                                    placeholder = "Estou buscando por...",
                                    width = "w-full",
                                  }: SearchBarProps) {
  return (
    <div className={`flex flex-row h-[45px] rounded-md border-2 items-center ${width}`}>
      <input
        className="flex-1 h-full p-3 outline-none"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
      />

      <button onClick={onSearch} className="p-4">
        <IoSearch size={24} />
      </button>
    </div>
  );
}