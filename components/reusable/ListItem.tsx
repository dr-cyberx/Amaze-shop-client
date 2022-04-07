import React, { useState } from 'react';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import {
  List,
  ListSubheader,
  ListItemButton,
  ListItemText,
  Collapse,
  ListItemIcon,
} from '@mui/material';

const ListItem: React.FunctionComponent = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <List
        sx={{ width: '100%', bgcolor: 'white' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={() => setOpen(!open)}>
          <ListItemText primary="open modal" />
          {true ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 7 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </>
  );
};

export default ListItem;
