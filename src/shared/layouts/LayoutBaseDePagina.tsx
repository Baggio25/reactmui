import { ReactNode } from "react";
import { Box, Icon, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";

import { useDrawerContext } from "../contexts";

interface ILayoutBaseDePaginaProps {
  titulo: string;
  barraDeFerramentas: ReactNode;
  children: React.ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({ titulo, barraDeFerramentas, children }) => {

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      gap={1}
    >
      <Box
        display="flex"
        alignItems="center"
        padding={1}
        gap={2}
        bgcolor={theme.palette.background.default}
        height={theme.spacing(smDown ? 5 : mdDown ? 7 : 9)}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography 
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          variant={smDown ? 'h6' : mdDown ? 'h5' : 'h4'}
        >
          {titulo}
        </Typography>
      </Box>

      {barraDeFerramentas && 
        (
          <Box>
            {barraDeFerramentas}
          </Box>
        )
      }

      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  )
}