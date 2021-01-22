import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Box, Container } from "@material-ui/core";
import { lightGreen } from "@material-ui/core/colors";

import { Article } from "../../hooks/useArticlesStore";

// Components
import Layout from "../Layout";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    greenAvatar: {
      color: theme.palette.getContrastText(lightGreen[500]),
      backgroundColor: lightGreen[500],
      margin: theme.spacing(1),
    },
  })
);

interface Props {
  article: Article;
}

export default function ArticlePage({ article }: Props) {
  const classes = useStyles();

  return (
    <Layout>
      <Box textAlign="center">
        <img src={article.image} style={{ width: "100%" }} />
      </Box>
      <Typography variant="subtitle1">
        <strong>#{article.tag}</strong>
      </Typography>
      <Typography variant="subtitle1">{article.date}</Typography>
      <Box my={5}>
        <Typography variant="h3">{article.title}</Typography>
      </Box>
      <Box
        style={{
          width: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Avatar
          alt={article.author}
          src={article.authorPic}
          className={classes.greenAvatar}
        >
          {article.author
            .split(" ")
            .map(word => word[0])
            .join("")}
        </Avatar>
        <p>by</p>
        <strong>{article.author}</strong>
      </Box>
      <Container maxWidth="lg">
        <Box
          marginTop={5}
          dangerouslySetInnerHTML={{ __html: article.html }}
          style={{
            wordWrap: "normal",
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: "1.2rem",
          }}
        />
      </Container>
    </Layout>
  );
}
