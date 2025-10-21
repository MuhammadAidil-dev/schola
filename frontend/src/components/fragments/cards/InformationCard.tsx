type InformationCardProp = {
  total: number;
  title: string;
};

export default function InformationCard({ total, title }: InformationCardProp) {
  return (
    <div className="bg-white shadow-md py-4 gap-2 rounded-sm flex flex-col items-center justify-center">
      <p className="font-semibold text-sm text-secondary sm:text-base">
        {total}
      </p>
      <p className="font-semibold text-lg text-primary">{title}</p>
    </div>
  );
}
