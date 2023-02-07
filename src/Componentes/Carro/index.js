import { CarroContainer } from './styles'
import { Botao } from '../Garagem/styles';


export function Carro({ modelo, cor, ano, flex, adicionadoPor, mudarCarro}) {
  return (
    <CarroContainer>
      <h2>{modelo}</h2>
      <ul>
        <li>Cor: {cor}</li>
        <li>Ano: {ano}</li>
        <li>Flex: {flex ? 'Sim' : 'Não'}</li>
        <li>Adicionado: {adicionadoPor}</li>
      </ul>
        <Botao onClick={mudarCarro} >aperte aqui para mudar de carro</Botao>
    </CarroContainer>
  )
}
