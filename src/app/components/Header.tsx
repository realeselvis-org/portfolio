import Image from "next/image";
import Link from "next/link";

type Action = {
  icon: React.ReactNode;
  text?: string;         
  href?: string;
  target?: "_blank" | "_self"; 
  onClick?: () => void;
};

type Props = {
  image: string;
  subtitle: string;
  title: string;
  description: string;
  actions?: Action[];
  labels?: string[];
};

export default function Header({
  image,
  subtitle,
  title,
  description,
  actions = [],
  labels = [],
}: Props) {
  return (
    <div className="gap-12 md:flex h-full items-stretch justify-between">
      {/* Section 1 - Imagen */}
      <div className="flex justify-center">
        {image && (
          <Image
            src={image}
            alt={title}
            width={320}
            height={255}
            sizes="(max-width: 768px) 100vw, 25vw"
            className="rounded-lg object-contain pb-12 md:pb-0"
          />
        )}
      </div>

      {/* Section 2 - Texto y botones */}
      <div className="gap-6 md:gap-none grid content-center md:w-3/4">
        <h1 className="font-mono text-3xl">{title}</h1>
        <h2 className="font-mono text-base leading-none">
          {subtitle}
        </h2>
        <p className="font-mono font-thin text-xs">{description}</p>

        {actions.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {actions.map((action, i) => {
              const buttonClasses =
                "bg-[#00DADA] text-black px-4 py-2 rounded flex items-center gap-2 hover:bg-[#00c0c0] transition text-sm cursor-pointer";

              // Si tiene href → Link
              if (action.href) {
                return (
                  <Link
                    key={i}
                    href={action.href}
                    target={action.target || "_self"}
                    rel={action.target === "_blank" ? "noopener noreferrer" : undefined}
                    className={buttonClasses}
                  >
                    {action.icon}
                    {action.text && <span>{action.text}</span>}
                  </Link>
                );
              }

              // Si tiene onClick → button
              return (
                <button
                  key={i}
                  onClick={action.onClick}
                  className={buttonClasses}
                >
                  {action.icon}
                  {action.text && <span>{action.text}</span>}
                </button>
              );
            })}
          </div>
        )}

        {labels.length > 0 && (
          <div className="flex gap-1 justify-center md:justify-start">
            {labels.map((label, i) => (
              <span
                key={i}
                className="bg-white/5 px-2 py-1 rounded-2xl text-[10px] font-mono"
              >
                {label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}