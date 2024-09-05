import { Box, Button, Divider, Icon, Paper, Skeleton, useTheme } from "@mui/material";

interface IFerramentasDeDetalheProps {
  textoBotaoNovo?: string;

  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvarEFechar?: boolean;
  mostrarBotaoSalvar?: boolean;

  mostrarBotaoNovoCarregando?: boolean;
  mostrarBotaoVoltarCarregando?: boolean;
  mostrarBotaoApagarCarregando?: boolean;
  mostrarBotaoSalvarEFecharCarregando?: boolean;
  mostrarBotaoSalvarCarregando?: boolean;

  aoClicarEmNovo?: () => void;
  aoClicarEmVoltar?: () => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarEmSalvarEFechar?: () => void;
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
  textoBotaoNovo = 'Novo',

  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEFechar = false,

  mostrarBotaoNovoCarregando = false,
  mostrarBotaoVoltarCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoSalvarEFecharCarregando = false,
  mostrarBotaoSalvarCarregando = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvarEFechar,
  aoClicarEmSalvar,
}) => {

  const theme = useTheme();

  return (
    <Box
      component={Paper}
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      gap={1}
      alignItems="center"
    >
      {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (
        <Button
          onClick={aoClicarEmSalvar}
          variant="contained"
          color="primary"
          disableElevation
          startIcon={<Icon>save</Icon>}
        >
          Salvar
        </Button>
      )}

      {mostrarBotaoSalvarCarregando && (<Skeleton width={110} height={60} />)}

      {(mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando) && (
        <Button
          onClick={aoClicarEmSalvarEFechar}
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>save_as</Icon>}
        >
          Salvar e Fechar
        </Button>
      )}

      {mostrarBotaoSalvarEFecharCarregando && (<Skeleton width={182} height={60} />)}

      {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (
        <Button
          onClick={aoClicarEmApagar}
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>delete</Icon>}
        >
          Apagar
        </Button>
      )}

      {mostrarBotaoApagarCarregando && (<Skeleton width={102} height={60} />)}

      {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando) && (
        <Button
          onClick={aoClicarEmNovo}
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>add</Icon>}
        >
          {textoBotaoNovo}
        </Button>
      )}

      {mostrarBotaoNovoCarregando && (<Skeleton width={90} height={60} />)}

      {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (
        <>
          <Divider
            variant="middle"
            orientation="vertical"
          />
          <Button
            onClick={aoClicarEmVoltar}
            variant="outlined"
            color="primary"
            disableElevation
            startIcon={<Icon>arrow_back</Icon>}
          >
            Voltar
          </Button>
        </>
      )}

      {mostrarBotaoVoltarCarregando && (<Skeleton width={100} height={60} />)}

    </Box>
  )
}