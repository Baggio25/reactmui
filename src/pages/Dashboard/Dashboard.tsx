import { FerramentasDaListagem } from "../../shared/components"
import { LayoutBaseDePagina } from "../../shared/layouts"


export const Dashboard = () => {
  return (
    <LayoutBaseDePagina
      titulo="Dashboard"
      barraDeFerramentas={(
        <FerramentasDaListagem 
          mostrarInputBusca
          mostrarBotaoNovo
        />
      )}
    >
      Início
    </LayoutBaseDePagina>
  )
}