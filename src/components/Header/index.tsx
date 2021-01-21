import React from "react";
import { Link } from "gatsby";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

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
  })
);

interface Props {
  title: string;
}

export default function Header({ title }: Props): JSX.Element {
  const classes = useStyles();

  const { articles } = useArticlesStore();

  const tabs = [...new Set<string>(articles.map(article => article.tag))];

  console.log(tabs);

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
          </Link>
        </Toolbar>
        <Tabs tabs={tabs} />
      </AppBar>
    </div>
  );
}
