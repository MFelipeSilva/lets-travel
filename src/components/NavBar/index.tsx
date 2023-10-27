import { AiOutlineGlobal, AiOutlineMenu } from "react-icons/ai";

import { FaRegCircleUser } from "react-icons/fa6";

import { MdOutlineCardTravel } from "react-icons/md";

import { NavBar, Logo, Pages, Page, Content } from "./styles";

export const Navbar = () => {
  return (
    <NavBar>
      <Content>
        <Logo>Let's Travel</Logo>
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
