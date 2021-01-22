import React from "react";
import { Grid } from "@material-ui/core/";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

// Components
import ArticleCard from "../Card";

// hooks
import { Article } from "../../hooks/useArticlesStore";

interface Props {
  articles: Article[];
  tag: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);

export default function ArticleList({ articles, tag }: Props) {
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      id={`scrollable-auto-tabpanel-${tag}`}
      aria-labelledby={`scrollable-auto-tab-${tag}`}
      className={classes.root}
    >
      <Grid container spacing={5}>
        {articles
          .filter(article => article.tag.toLowerCase() === tag.toLowerCase())
          .map(article => (
            <Grid item xs={12} sm={6} md={4} key={article.id}>
              <ArticleCard article={article} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
