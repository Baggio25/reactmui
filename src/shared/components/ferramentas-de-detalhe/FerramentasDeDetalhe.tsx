import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material";

export const FerramentasDeDetalhe: React.FC = () => {

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
      <Button
        variant="contained"
        color="primary"
        disableElevation
        startIcon={<Icon>save</Icon>}
      >
        Salvar 
      </Button>

      <Button
        variant="outlined"
        color="primary"
        disableElevation
        startIcon={<Icon>save_as</Icon>}
      >
        Salvar e voltar
      </Button>

      <Button
        variant="outlined"
        color="primary"
        disableElevation
        startIcon={<Icon>delete</Icon>}
      >
        Apagar
      </Button>

      <Button
        variant="outlined"
        color="primary"
        disableElevation
        startIcon={<Icon>add</Icon>}
      >
        Novo
      </Button>
      
      <Divider 
        variant="middle"
        orientation="vertical"
      />

      <Button
        variant="outlined"
        color="primary"
        disableElevation
        startIcon={<Icon>arrow_back</Icon>}
      >
        Voltar
      </Button>

    </Box>
  )
}