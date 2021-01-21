import React from "react";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import {
  SwipeableDrawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core/";
import { Home, Info, ContactPhone } from "@material-ui/icons";

import { useLayoutStore, useLayoutDispatch } from "../../hooks/useLayoutStore";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const { sideBarOpen } = useLayoutStore();
  const layoutDispatch = useLayoutDispatch();

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    layoutDispatch({ type: "TOGGLE_SIDEBAR" });
  };

  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Info />
          </ListItemIcon>
          <ListItemText primary={"About"} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ContactPhone />
          </ListItemIcon>
          <ListItemText primary={"Contact"} />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <SwipeableDrawer
        anchor="left"
        open={sideBarOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}
