import { useState } from "react";
import { Carro } from "../Carro";
import { Botao, Estacionamento, GaragemContainer } from "./styles";

export function Garagem({ nome, setNome }) {
  const [automovel, setAutomovel] = useState({
    cor: "preto",
    ano: 1993,
    flex: false,
    adicionado: "Marcos",
    modelo: "Civic 1.6 Vtec",
  });

  function mudarNomeGaragem() {
    setNome("Jose da silva");
  }

function mudarCarro(){
setAutomovel({modelo:"C3",
cor:"Prata",
ano:2012,
adicionado:"Samuca Maloqueiro",
flex:true,})

}
  return (
    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Botao onClick={mudarNomeGaragem}>Muda nome</Botao>

      <Estacionamento>
        <Carro
          modelo="Corsa"
          cor="branco"
          ano={2020}
          adicionadoPor="Labenu"
          flex
        />
        <Carro
          modelo={automovel.modelo}
          cor={automovel.cor}
          ano={automovel.ano}
          adicionadoPor={automovel.adicionado}
          flex={automovel.flex}
          mudarCarro={mudarCarro}
        />
        
      </Estacionamento>
    </GaragemContainer>
  );
}
