import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Tabs, Tab } from "@material-ui/core/";

// hooks
import { useLayoutStore, useLayoutDispatch } from "../../hooks/useLayoutStore";

function a11yProps(label: string) {
  return {
    id: `scrollable-auto-tab-${label}`,
    "aria-controls": `scrollable-auto-tabpanel-${label}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

interface Props {
  tabs: string[];
}

export default function TabsList({ tabs }: Props) {
  const classes = useStyles();
  const { tab } = useLayoutStore();
  const layoutDispatch = useLayoutDispatch();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    layoutDispatch({ type: "CHANGE_TAB", payload: newValue });
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={tab}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="on"
        aria-label="scrollable auto tabs example"
      >
        {tabs.map((label, index) => {
          return <Tab label={`#${label}`} {...a11yProps(label)} key={index} />;
        })}
      </Tabs>
    </div>
  );
}
