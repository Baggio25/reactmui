import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material";

interface IFerramentasDeDetalheProps {
  textoBotaoNovo?: string;

  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvarEFechar?: boolean;
  mostrarBotaoSalvar?: boolean;

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
      {mostrarBotaoSalvar && (
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

      {mostrarBotaoSalvarEFechar && (
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

      {mostrarBotaoApagar && (
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

      {mostrarBotaoNovo && (
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


      {mostrarBotaoVoltar && (
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

    </Box>
  )
}