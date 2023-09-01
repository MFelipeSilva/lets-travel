import { NavBar, Logo, Links, Link } from "./NavbarStyles";

import { AiOutlineUser, AiOutlineCar, AiOutlineGlobal } from "react-icons/ai";

export const Navbar = () => {
  return (
    <NavBar>
      <Logo>Let's Travel?</Logo>
      <Links>
        <Link>
          <AiOutlineGlobal /> 
          Português
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
    </NavBar>
  );
};
