import {
  AiOutlineUser,
  AiOutlineCar,
  AiOutlineGlobal,
  AiOutlineExclamationCircle,
  AiOutlineMenu,
} from "react-icons/ai";

import { NavBar, Logo, Links, Link, Content } from "../styles/NavbarStyles";

export const Navbar = () => {
  return (
    <NavBar>
      <Content>
        <Logo>Let's Travel?</Logo>
        <Links>
          <Link>
            <AiOutlineGlobal />
            Português
          </Link>
          <Link>
            <AiOutlineExclamationCircle />
            Suporte
          </Link>
          <Link>
            <AiOutlineCar />
            Minhas viagens
          </Link>
          <Link>
            <AiOutlineUser />
            Iniciar sessão
          </Link>
          <AiOutlineMenu cursor={"pointer"} />
        </Links>
      </Content>
    </NavBar>
  );
};
