interface TechnicalLabelProps {
  children: React.ReactNode;
  /** Shorthand for `tone="blue"`, kept because most call sites read better with it. */
  blue?: boolean;
  /**
   * `blue` is the primary/structural accent; `teal` is the secondary one,
   * reserved for the storage (BESS) domain so the two application families
   * stay visually distinguishable wherever they appear together.
   */
  tone?: "grey" | "blue" | "teal";
  className?: string;
}

const TONE_CLASS = {
  grey: "",
  blue: "micro-label--blue",
  teal: "micro-label--teal",
} as const;

/** Mono uppercase micro-label, e.g. `CELL BALANCING / ACTIVE` */
export function TechnicalLabel({ children, blue, tone, className = "" }: TechnicalLabelProps) {
  const resolved = tone ?? (blue ? "blue" : "grey");
  return (
    <p className={`micro-label ${TONE_CLASS[resolved]} ${className}`}>
      {children}
    </p>
  );
}

export function SectionIntro({
  label,
  title,
  lead,
  className = "",
  titleClassName,
}: {
  label: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  className?: string;
  /**
   * A plain-string title gets a 16ch clamp to wrap it; a JSX title is assumed
   * to carry its own <br />. Titles that are JSX only because a clause is
   * wrapped in .headline-accent still need the clamp, and pass it here.
   */
  titleClassName?: string;
}) {
  return (
    <div className={className}>
      <TechnicalLabel blue className="mb-5">
        {label}
      </TechnicalLabel>
      <h2 className={`type-h2 ${titleClassName ?? (typeof title === "string" ? "max-w-[16ch]" : "")}`}>
        {title}
      </h2>
      {lead ? <p className="type-lead mt-6">{lead}</p> : null}
    </div>
  );
}
