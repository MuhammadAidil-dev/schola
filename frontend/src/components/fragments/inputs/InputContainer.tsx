type InputContainerProps = {
  label: string;
  name: string;
  type?: string;
  value: string;
  setValue: (param: string) => void;
};

export default function InputContainer({
  label,
  name,
  type = 'text',
  value = '',
  setValue = () => {},
}: InputContainerProps) {
  return (
    <div className="flex flex-col w-full gap-2">
      <label htmlFor={name} className="text-primary text-base font-semibold">
        {label}
      </label>
      <input
        type={type}
        id={name}
        className="focus:outline-none py-2 px-4 text-sm font-medium text-primary border border-primary rounded-sm focus:border-2 transition-all w-full"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
