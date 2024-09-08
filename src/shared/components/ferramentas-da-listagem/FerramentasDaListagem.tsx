import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";

import { Environment } from "../../environments";

interface IFerramentasDaListagemProps {
  textoDaBusca?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextoDeBusca?: (novoTexto: string) => void;

  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
  aoMudarTextoDeBusca,
  mostrarInputBusca = false,
  textoDaBusca = '',
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
  aoClicarEmNovo
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
      {mostrarInputBusca &&
        (
          <TextField
            value={textoDaBusca}
            onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
            size="small"
            placeholder={Environment.INPUT_DE_BUSCA}
            sx={{ width: 450 }}
          />
        )
      }

      <Box
        flex={1}
        display="flex"
        justifyContent="end"
      >
        {mostrarBotaoNovo &&
          (
            <Button
              onClick={aoClicarEmNovo}
              variant="contained"
              color="primary"
              disableElevation
              endIcon={<Icon>add</Icon>}
            >
              {textoBotaoNovo}
            </Button>
          )
        }
      </Box>
    </Box>
  )
}