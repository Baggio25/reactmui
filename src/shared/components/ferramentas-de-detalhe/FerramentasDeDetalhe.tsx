import { Box, Button, Divider, Icon, Paper, Skeleton, Typography, useMediaQuery, useTheme } from "@mui/material";

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
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

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
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Salvar
          </Typography>
        </Button>
      )}

      {mostrarBotaoSalvarCarregando && (<Skeleton width={110} height={60} />)}

      {(  
          mostrarBotaoSalvarEFechar && 
          !mostrarBotaoSalvarEFecharCarregando &&
          !smDown &&
          !mdDown
        ) 
        && 
        (
          <Button
            onClick={aoClicarEmSalvarEFechar}
            variant="outlined"
            color="primary"
            disableElevation
            startIcon={<Icon>save_as</Icon>}
          >
            <Typography
              variant="button"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              overflow="hidden"
            >
              Salvar e Fechar
            </Typography>
          </Button>
        )
      }

      {mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown && (<Skeleton width={182} height={60} />)}

      {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (
        <Button
          onClick={aoClicarEmApagar}
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>delete</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Apagar
          </Typography>
        </Button>
      )}

      {mostrarBotaoApagarCarregando && (<Skeleton width={102} height={60} />)}

      { (
          mostrarBotaoNovo && 
          !mostrarBotaoNovoCarregando &&
          !smDown &&
          !mdDown
        ) && 
        (
          <Button
            onClick={aoClicarEmNovo}
            variant="outlined"
            color="primary"
            disableElevation
            startIcon={<Icon>add</Icon>}
          >
            <Typography
              variant="button"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              overflow="hidden"
            >
              {textoBotaoNovo}
            </Typography>
          </Button>
        )
      }

      {mostrarBotaoNovoCarregando && !smDown && !mdDown && (<Skeleton width={90} height={60} />)}

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
            <Typography
              variant="button"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              overflow="hidden"
            >
              Voltar
            </Typography>
          </Button>
        </>
      )}

      {mostrarBotaoVoltarCarregando && (<Skeleton width={100} height={60} />)}

    </Box>
  )
}