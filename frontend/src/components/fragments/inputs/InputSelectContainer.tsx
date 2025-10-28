type Option = {
  value: string;
  option: string;
};

type SelectContainerProps = {
  value: string;
  setValue: (params: string) => void;
  options: Option[];
  label: string;
  name: string;
};

export default function SelectContainer({
  value,
  setValue,
  options,
  label,
  name,
}: SelectContainerProps) {
  return (
    <div className="flex flex-col w-full gap-2">
      <label htmlFor={name} className="text-primary text-base font-semibold">
        {label}
      </label>
      <select
        name={name}
        id={name}
        className="focus:outline-none py-2 px-4 text-sm font-medium text-primary border border-primary rounded-sm focus:border-2 transition-all w-full"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {options?.map((data, index) => (
          <option key={index} value={data.value}>
            {data.option}
          </option>
        ))}
      </select>
    </div>
  );
}
