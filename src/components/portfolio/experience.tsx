import WritingsOfExperience from "./writings-of-experience";

const Experience = () => {
  return (
    <div>
      <WritingsOfExperience
        subtitle={"Autônomo | Fevereiro de 2014 – Outubro de 2015"}
        text="Desenvolvimento de sites personalizados, utilizando abordagens
        consultivas para atender às necessidades específicas dos clientes.
        Colaboração eficiente com equipes multidisciplinares, incluindo
        designers e desenvolvedores, garantindo a entrega de projetos de alta
        qualidade. Criação de estratégias para maximizar a presença online dos
        clientes, estabelecendo parcerias sólidas e duradouras."
        title={"Desenvolvedor Web Freelancer"}
      />
      <WritingsOfExperience
        subtitle={"Ortobom | Março de 2020 – Presente"}
        title={"Executivo de Vendas Externas"}
        text={
          "Identificação das necessidades dos clientes e apresentação de soluções inovadoras no segmento de colchões de alta qualidade. Superação consistente de metas de vendas, construindo relacionamentos de confiança com uma carteira diversificada de clientes."
        }
      />
      <WritingsOfExperience
        title={"Técnico Comercial"}
        subtitle={
          "Wurth do Brasil Peças de Fixação Ltda. | Março de 2018 – Dezembro de 2019"
        }
        text={
          "Venda de produtos industriais de alto desempenho, oferecendo soluções técnicas para otimização da produtividade. Desenvolvimento de estratégias comerciais para atender às demandas do setor industrial, superando metas e fortalecendo a presença da empresa no mercado."
        }
      />
      <WritingsOfExperience
        title={"Especialista em Vendas"}
        subtitle={"Atento | Novembro de 2015 – Maio de 2017"}
        text={
          "Expansão do market share através da venda de máquinas de cartão, utilizando abordagens consultivas e estratégicas. Aumento significativo da presença da empresa no mercado, com foco na satisfação do cliente e resultados mensuráveis."
        }
      />
      <WritingsOfExperience
        title={"Consultor Técnico"}
        subtitle={
          "Fox Comércio de Peças e Equipamentos Industriais LTDA | Setembro de 2011 – Agosto de 2013"
        }
        text={
          "Especificação técnica de produtos e elaboração de cotações para clientes do setor industrial. Prospecção de novos clientes e negociação de contratos, contribuindo para o crescimento da empresa."
        }
      />
      <WritingsOfExperience
        title={"Consultor Técnico"}
        subtitle={
          "SMC Pneumáticos do Brasil LTDA | Junho de 2008 – Março de 2011"
        }
        text={
          "Atuação como trainee de vendas e posterior evolução para consultor técnico externo. Fidelização de clientes e comercialização de produtos SMC, consolidando a presença da empresa no mercado de automação industrial."
        }
      />
      <h3 className="text-center text-xl font-semibold">Resumo Profissional</h3>
      <p className="mt-2 text-justify mx-3 md:mx-48">
        Profissional com experiência diversificada em desenvolvimento web,
        vendas consultivas e soluções técnicas personalizadas. Habilidades
        comprovadas em identificar necessidades dos clientes, criar estratégias
        inovadoras e entregar resultados excepcionais. Experiência em
        colaboração com equipes multidisciplinares e construção de
        relacionamentos duradouros, sempre alinhado ao objetivo de superar
        expectativas e impulsionar o sucesso dos projetos.
      </p>
    </div>
  );
};

export default Experience;
