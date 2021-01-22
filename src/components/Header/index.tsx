import React from "react";
import { Link } from "gatsby";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Avatar } from "@material-ui/core";

// @ts-ignore
import logo from "../../logo.png";

// Components
import Tabs from "../Tabs";

// hooks
import { useArticlesStore } from "../../hooks/useArticlesStore";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    largeLogo: {
      width: theme.spacing(5),
      height: theme.spacing(5),
      marginRight: theme.spacing(4),
    },
  })
);

interface Props {
  title: string;
}

export default function Header({ title }: Props): JSX.Element {
  const classes = useStyles();

  const { articles } = useArticlesStore();

  const tabs = [...new Set<string>(articles.map(article => article.tag))];

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Avatar src={logo} className={classes.largeLogo} />
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography variant="h5" className={classes.title}>
              {title}
            </Typography>
          </Link>
        </Toolbar>
        <Tabs tabs={tabs} />
      </AppBar>
    </div>
  );
}
