import { NavBar, Logo, Links, Link, Content } from "./NavbarStyles";

import {
  AiOutlineUser,
  AiOutlineCar,
  AiOutlineGlobal,
  AiOutlineExclamationCircle,
} from "react-icons/ai";

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
        </Links>
      </Content>
    </NavBar>
  );
};
