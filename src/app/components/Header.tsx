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
    <div className="flex flex-col md:flex-row md:gap-12 h-full md:items-stretch md:justify-between">
      {/* MÓVIL: Imagen + Títulos en la misma fila */}
      <div className="flex gap-4 items-center mb-6 md:mb-0 md:block">
        {image && (
          <Image
            src={image}
            alt={title}
            width={320}
            height={255}
            sizes="(max-width: 768px) 40vw, 25vw"
            className="rounded-lg object-contain w-32 h-auto md:w-80"
          />
        )}
        
        {/* Títulos - visible solo en móvil */}
        <div className="flex flex-col gap-2 md:hidden">
          <h1 className="text-2xl heading-gradient">{subtitle}</h1>
          <h2 className="text-lg heading-gradient">{title}</h2>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex flex-col gap-4 md:gap-6 md:justify-between md:w-3/4">
        {/* Títulos - visible solo en desktop */}
        <div className="hidden md:block space-y-2">
          <h1 className="text-3xl heading-gradient">{subtitle}</h1>
          <h2 className="text-xl sm:text-2xl heading-gradient">{title}</h2>
        </div>

        <p className="custom-text font-jetmono">{description}</p>

        {actions.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {actions.map((action, i) => {
              const buttonClasses =
                "custom-button bg-primary text-secondary";
              
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
          <div className="flex flex-wrap gap-1 justify-center md:justify-start">
            {labels.map((label, i) => (
              <span
                key={i}
                className="custom-label font-alumi"
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