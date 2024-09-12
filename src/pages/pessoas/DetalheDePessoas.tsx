import { useNavigate, useParams } from "react-router-dom";

import { LayoutBaseDePagina } from "../../shared/layouts";
import { FerramentasDeDetalhe } from "../../shared/components";

export const DetalheDePessoas : React.FC = () => {
  const { pessoaId = 'nova'} = useParams<'pessoaId'>();

  const navigate = useNavigate();

  const handleNovoClick = () => {
    navigate("/pessoas/detalhe/nova");
  }

  const handleVoltarClick = () => {
    navigate("/pessoas");
  }

  const handleSaveClick = () => {
    console.log('save');
  }

  const handleDeleteClick = () => {
    console.log('delete');
  }

  return(
    <LayoutBaseDePagina
      titulo="Detalhe de pessoa"
      barraDeFerramentas={
        <FerramentasDeDetalhe 
          textoBotaoNovo="Nova"
          mostrarBotaoApagar={pessoaId !== 'nova'}
          mostrarBotaoNovo={pessoaId !== 'nova'}
          mostrarBotaoSalvarEFechar

          aoClicarEmSalvar={handleSaveClick}
          aoClicarEmSalvarEFechar={() => {}}
          aoClicarEmVoltar={handleVoltarClick}
          aoClicarEmApagar={handleDeleteClick}
          aoClicarEmNovo={handleNovoClick}
        />
      }
    >

      <p>Pessoa {pessoaId}</p>
    </LayoutBaseDePagina>
  )
}