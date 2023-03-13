import { Contaier, Logo, BackIcon, BackButton } from "./styles";
import logoImg from "@assets/logo.png";

type Props ={
    showBackButton?:boolean
}

export function Header({showBackButton = false}: Props ) {
  return (
    <Contaier>
        {
            showBackButton &&
      <BackButton>
        <BackIcon color="#fff" size={32} />
      </BackButton>
        }
      <Logo source={logoImg} />
    </Contaier>
  );
}
