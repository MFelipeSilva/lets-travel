import { AiOutlineGlobal, AiOutlineMenu } from "react-icons/ai";

import { FaRegCircleUser } from "react-icons/fa6";

import { MdOutlineCardTravel } from "react-icons/md";

import { NavBar, Logo, Pages, Page, Content, Link } from "./styles";

export const Navbar = () => {
  return (
    <NavBar>
      <Content>
        <Logo>
          <Link href="/">Let's Travel</Link>
        </Logo>
        <Pages>
          <Page>
            <AiOutlineGlobal />
            Português
          </Page>
          <Page>
            <MdOutlineCardTravel />
            Minhas viagens
          </Page>
          <Page>
            <FaRegCircleUser />
            Iniciar sessão
          </Page>
          <AiOutlineMenu cursor={"pointer"} />
        </Pages>
      </Content>
    </NavBar>
  );
};
