import { AiOutlineGlobal, AiOutlineMenu } from "react-icons/ai";

import { FaRegCircleUser } from "react-icons/fa6";

import { MdOutlineCardTravel } from "react-icons/md";

import { NavBar, Logo, Links, Link, Content } from "../styles/NavbarStyles";

export const Navbar = () => {
  return (
    <NavBar>
      <Content>
        <Logo>Let's Travel</Logo>
        <Links>
          <Link>
            <AiOutlineGlobal />
            Português
          </Link>
          <Link>
            <MdOutlineCardTravel />
            Minhas viagens
          </Link>
          <Link>
            <FaRegCircleUser />
            Iniciar sessão
          </Link>
          <AiOutlineMenu cursor={"pointer"} />
        </Links>
      </Content>
    </NavBar>
  );
};
