import { BarraDeFerramentas } from "../../shared/components"
import { LayoutBaseDePagina } from "../../shared/layouts"


export const Dashboard = () => {
  return (
    <LayoutBaseDePagina
      titulo="Dashboard"
      barraDeFerramentas={(
        <BarraDeFerramentas 
          mostrarInputBusca
          mostrarBotaoNovo
        />
      )}
    >
      Início
    </LayoutBaseDePagina>
  )
}