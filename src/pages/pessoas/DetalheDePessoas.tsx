/* eslint-disable no-restricted-globals */

import { useNavigate, useParams } from "react-router-dom";

import { LayoutBaseDePagina } from "../../shared/layouts";
import { FerramentasDeDetalhe } from "../../shared/components";
import { useEffect, useState } from "react";
import { PessoasService } from "../../shared/services/api/pessoas/PessoasService";
import { LinearProgress } from "@mui/material";

export const DetalheDePessoas: React.FC = () => {
  const { pessoaId = 'nova' } = useParams<'pessoaId'>();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [nome, setNome] = useState('');

  useEffect(() => {
    if (pessoaId !== 'nova') {
      setIsLoading(true);

      PessoasService.getById(Number(pessoaId))
        .then((result) => {
          setIsLoading(false);

          if (result instanceof Error) {
            alert(result.message);
            navigate('/pessoas');
          } else {
            setNome(result.nomeCompleto);
          }
        });
    }
  }, [pessoaId]);

  const handleNovoClick = () => {
    navigate("/pessoas/detalhe/nova");
  }

  const handleVoltarClick = () => {
    navigate("/pessoas");
  }

  const handleSaveClick = () => {
    console.log('save');
  }

  const handleDeleteClick = (pessoaId: number) => {
    if (confirm("Confirma a exclusão?")) {
      PessoasService.deleteById(Number(pessoaId)).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          navigate("/pessoas");
          alert("Registro excluído com sucesso.");
        }
      });
    }
  }

  return (
    <LayoutBaseDePagina
      titulo={(pessoaId === 'nova' ? 'Nova pessoa' : nome)}
      barraDeFerramentas={
        <FerramentasDeDetalhe
          textoBotaoNovo="Nova"
          mostrarBotaoApagar={pessoaId !== 'nova'}
          mostrarBotaoNovo={pessoaId !== 'nova'}
          mostrarBotaoSalvarEFechar

          aoClicarEmSalvar={handleSaveClick}
          aoClicarEmSalvarEFechar={() => { }}
          aoClicarEmVoltar={handleVoltarClick}
          aoClicarEmApagar={() => handleDeleteClick(Number(pessoaId))}
          aoClicarEmNovo={handleNovoClick}
        />
      }
    >

      {isLoading && (
        <LinearProgress variant="indeterminate" />
      )}

      <p>Pessoa {pessoaId}</p>
    </LayoutBaseDePagina>
  )
}