import { Header } from "@components/Header";
import { Contaier } from "./styles";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";


export function Groups() {
  return (
    
      <Contaier>
        <Header/>
        <Highlight title="Bem vindo" subtitle="Melhor de todos "/>
        <GroupCard title="Galera do Ignite" />
      </Contaier>
  );
}
