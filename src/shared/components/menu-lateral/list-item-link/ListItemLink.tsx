import {
  Icon,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface IListItemLinkProps {
  to: string;
  icon: string;
  label: string;
  onClickItemLink: (() => void) | undefined;
}

export const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onClickItemLink }) => {
  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: false});
  
  const handleClick = () => {
    navigate(to);
    onClickItemLink?.();
  }

  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  )
}