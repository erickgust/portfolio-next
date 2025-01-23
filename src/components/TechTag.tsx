import Image from "next/image";

type TechTagProps = {
  color: `#${string}`;
  title: string;
  img: {
    src: string;
    alt: string;
  };
};

export function TechTag(props: TechTagProps) {
  const colors: Record<`#${string}`, string> = {
    "#88E6FF": "text-[#88E6FF] border-[#88E6FF]",
    "#A6C6E0": "text-[#A6C6E0] border-[#A6C6E0]",
    "#72B5FF": "text-[#72B5FF] border-[#72B5FF]",
    "#B0F45E": "text-[#B0F45E] border-[#B0F45E]",
    "#8AD3C8": "text-[#8AD3C8] border-[#8AD3C8]",
    "#FFF": "text-[#FFF] border-[#FFF]",
  };

  const color = colors[props.color] || colors["#FFF"];

  return (
    <span
      className={`inline-flex rounded-full border py-2 px-4 gap-2.5 items-center justify-center leading-none text-sm ${color}`}
    >
      <Image
        aria-hidden
        src={props.img.src}
        alt={props.img.alt}
        width={16}
        height={16}
      />
      <span className="pt-0.5">{props.title}</span>
    </span>
  );
}
