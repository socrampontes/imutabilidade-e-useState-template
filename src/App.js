import { useState } from "react";
import { Garagem } from "./Componentes/Garagem";
import { GlobalStyled } from "./GlobalStyled";

export default function App() {
  /*   const array = ['pisicao1','posicao2']
  //console.log(array[0])

  const [elemento1, elemento2] = array

  console.log(elemento1) */
  /*  let nome = 'labenu'

  function btnMudaNome() {
  nome = 'marcos'
  console.log(nome)
  } */

  const [nome, setNome] = useState("Labenu");

  //function btnMudaNome() {
    /* const novoNome = prompt("qual nome da garagem")
    setNome(novoNome) */
  /*   setNome("Marcos");
  } */
  console.log(nome);
  return (
    <div className="App">
      <GlobalStyled />

      <Garagem nome={nome} setNome={setNome} />
    </div>
  );
}
