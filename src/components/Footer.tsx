import React from "react";

import {
  Container,
  ContentRow,
  Ul,
  Li,
  Link,
  Title,
  Section,
  Logo,
  ContentCol,
  Terms,
} from "../styles/FooterStyles";

export const Footer = () => {
  return (
    <Container>
      <ContentCol>
        <Logo>Let's Travel</Logo>
        <ContentRow>
          <Section>
            <Title>Sobre nossa empresa</Title>
            <Ul>
              <Li>
                <Link>Quem somos</Link>
              </Li>
              <Li>
                <Link>Trabalhe conosco</Link>
              </Li>
              <Li>
                <Link>Contato com a imprensa</Link>
              </Li>
              <Li>
                <Link>Afiliados</Link>
              </Li>
            </Ul>
          </Section>
          <Section>
            <Title>Ajuda</Title>
            <Ul>
              <Li>
                <Link>Suporte</Link>
              </Li>
              <Li>
                <Link>Condições de uso</Link>
              </Li>
              <Li>
                <Link>Aviso de privacidade</Link>
              </Li>
              <Li>
                <Link>Informações legais</Link>
              </Li>
              <Li>
                <Link>Alterar ou cancelar reservas</Link>
              </Li>
            </Ul>
          </Section>
          <Section>
            <Title>Outros serviços</Title>
            <Ul>
              <Li>
                <Link>Segurança</Link>
              </Li>
              <Li>
                <Link>Relações com investidores</Link>
              </Li>
              <Li>
                <Link>Parceiros</Link>
              </Li>
              <Li>
                <Link>Descubra como o trivago funciona</Link>
              </Li>
              <Li>
                <Link>Termos de uso</Link>
              </Li>
            </Ul>
          </Section>
        </ContentRow>
        <Terms>
          © 2023 Let's Travel, Inc. Todos os direitos reservados.&nbsp;
          <a>Termos</a>,&nbsp;<a>Privacidade</a>&nbsp;e&nbsp;
          <a>Acessibilidade</a>.
        </Terms>
      </ContentCol>
    </Container>
  );
};
