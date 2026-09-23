import type { ReactNode } from "react";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

export default function SectionTitle({
  title,
  subtitle,
  children,
}: SectionTitleProps) {
  return (
    <div className="flex justify-between items-end">
      <div className="flex flex-col items-start gap-0.5 md:gap-1.5">
        <h2 className="font-morabba-medium text-2xl md:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <h5 className="font-morabba-light text-lg md:text-3xl">
            {subtitle}
          </h5>
        )}
      </div>
      {children}
    </div>
  );
}
