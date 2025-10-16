import Image from "next/image";

type Action = {
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
};


type Props = {
    image: string;  
    subtitle: string;
    title: string;
    description: string;
    actions?: Action[]; // Arreglo de botones
    labels?: string[]; // Arreglo de etiquetas
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
    <div className="gap-4 md:flex h-full items-stretch justify-between">
        {/* Section 1 - Imagen */}
        <div className="flex justify-center">
          {image && (
            <Image
              src={image}
              alt={title}
              width={320}
              height={255}
              sizes="(max-width: 768px) 100vw, 25vw"
              className="rounded-lg object-contain"
            />
          )}
        </div>
        {/* section 2 - Texto y botnotes   */}
        <div className="gap-6 md:gap-none grid content-between md:w-3/4">
            <h1 className="font-mono text-3xl text-center md:text-left">{title}</h1>
            <h2 className="font-mono text-base leading-none text-center md:text-left">{subtitle}</h2>
            <p className="font-mono font-thin text-xs">{description}</p>



            {actions.length > 0 && (
                <div className="flex gap-2 mt-4 justify-center md:justify-start">
                {actions.map((action, i) => (
                    <button
                    key={i}
                    onClick={action.onClick}
                    className="bg-[#00DADA] text-black px-4 py-2 rounded flex items-center gap-2 hover:bg-[#00c0c0] transition"
                    >
                    {action.icon}
                    {action.href ? <a href={action.href}>{action.href}</a> : null}
                    </button>
                ))}
                </div>
            )}

            {labels.length > 0 && (
                <div className="flex gap-2 mt-2 justify-center md:justify-start">
                {labels.map((label, i) => (
                    <span key={i} className="bg-white/20 px-2 py-1 rounded text-sm">
                    {label}
                    </span>
                ))}
                </div>
            )}
        </div>
    </div>
  );
}

