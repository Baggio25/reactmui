import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  useMediaQuery,
  useTheme
} from "@mui/material";

import { useDrawerContext } from "../../contexts";
import { ListItemLink } from "./list-item-link/ListItemLink";


interface IMenuLateralProps {
  children: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              alt="avatar-img"
              src="https://avatars.githubusercontent.com/u/26611668?v=4"
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              {
                drawerOptions.map(drawerOption => (
                  <ListItemLink
                    key={drawerOption.path}
                    to={drawerOption.path}
                    icon={drawerOption.icon}
                    label={drawerOption.label}
                    onClickItemLink={smDown ? toggleDrawerOpen : undefined}
                  />
                ))
              }
            </List>
          </Box>

        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  )

}