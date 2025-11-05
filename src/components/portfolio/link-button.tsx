import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

// Definimos as props que nosso botão-link aceitará
type Props = {
  href: string; // A URL para onde o link deve ir
  children: React.ReactNode; // O texto ou ícone dentro do botão
};

/**
 * Um componente de botão que funciona como um Link do Next.js,
 * abrindo em uma nova aba por padrão.
 */
const ProjectLinkButton = ({ href, children }: Props) => {
  return (
    <Button className="h-7 px-2 text-xs md:h-10 md:text-sm" asChild>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </Link>
    </Button>
  );
};

export default ProjectLinkButton;
