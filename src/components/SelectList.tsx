interface SelectListProps {
  label: string;
  id: string;
  value: string | undefined;
  options: { id: string | number; value: string; title: string }[];
  disabled: boolean;
  onChange: (value: string) => void;
  placeholder?: string;
}

function SelectList({
  label,
  id,
  value,
  options,
  disabled,
  onChange,
  placeholder,
}: SelectListProps) {
  return (
    <div className="w-64">
      <label htmlFor={id} className="text-gray-light text-sm pl-1">
        {label}
      </label>
      <select
        id={id}
        name={id}
        value={value || ""}
        disabled={disabled}
        className={`block w-full bg-transparent mt-1 py-3 px-2 text-gray-light text-base border-[1px] border-gray-dark
                    focus:outline-none sm:text-sm rounded-md ${
                      disabled
                        ? "cursor-not-allowed opacity-55"
                        : "cursor-pointer"
                    }`}
        onChange={(e: any) => onChange(e.target.value)}
      >
        {placeholder && (
          <option
            value=""
            className="text-sm bg-[#06030c] text-gray-light"
            disabled
          >
            {placeholder}
          </option>
        )}
        {options.map((item) => (
          <option
            key={item.id}
            className="text-sm bg-[#06030c] text-gray-light"
            value={item.value}
          >
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectList;
