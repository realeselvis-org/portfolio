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
    <div className="flex flex-col h-[calc(100svh-48px)] md:grid md:grid-cols-2 gap-12 md:items-stretch pb-28 md:pb-0 justify-between">
      {/* Imagen y labels */}
      <div className="flex flex-col items-center justify-center gap-12">
        <div>
          {image && (
            <Image
              src={image}
              alt={title}
              width={320}
              height={255}
              sizes="(max-width: 768px) 40vw, 25vw"
              className="rounded-lg object-contain w-32 h-auto md:w-80 mx-auto"
            />
          )}
        </div>
        {/* Labels */}
        {labels.length > 0 && (
          <div className="flex flex-wrap gap-1 justify-center max-w-80 mx-auto">
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
      {/* Títulos + Contenido principal */}
      {/* Wrapper solo visible en escritorio */}
      <div className="contents md:flex md:flex-col  md:gap-18 md:justify-center">
        <h1 className="text-4xl text-center md:text-start heading-gradient">{subtitle}</h1>
        <h2 className="text-center md:text-start text-xl heading-gradient">{title}</h2>
        <p className="text-base text-center md:text-start font-jetmono">{description}</p>

      </div>
      {actions.length > 0 && (
          <div className="flex gap-2 justify-center col-span-2">
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
    </div>
  );
}