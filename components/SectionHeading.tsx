import Reveal from "./Reveal";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <h2 className="text-[32px] font-bold leading-[1.15] tracking-tight text-charcoal md:text-[36px]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-[16px] leading-relaxed text-medgray">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}
