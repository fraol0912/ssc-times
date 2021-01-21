import React from "react";
import { navigate } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

// hooks
import { Article } from "../../hooks/useArticlesStore";

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

interface Props {
  article: Article;
}

export default function ArticleCard({ article }: Props) {
  const classes = useStyles();

  return (
    <Card variant="outlined">
      <CardActionArea onClick={() => navigate(article.slug)}>
        <CardMedia
          className={classes.media}
          image={article.image}
          title={article.imageAlt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {article.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {article.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
