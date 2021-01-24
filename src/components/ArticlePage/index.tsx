import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Box, Container } from "@material-ui/core";
import { lightGreen } from "@material-ui/core/colors";

import { ArticlePage } from "../../hooks/useArticlesStore";

// Components
import Layout from "../Layout";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    greenAvatar: {
      color: theme.palette.getContrastText(lightGreen[500]),
      backgroundColor: lightGreen[500],
      margin: theme.spacing(1),
      display: "inline-block",
    },
  })
);

interface Props {
  article: ArticlePage;
}

export default function ArticlePageComponent({ article }: Props) {
  const classes = useStyles();

  return (
    <Layout>
      <Box textAlign="center">
        <img src={article.image} style={{ width: "100%" }} id="article_image" />
      </Box>
      <Typography variant="subtitle1">
        <strong id="article_tag">#{article.tag}</strong>
      </Typography>
      <Typography variant="subtitle1" id="article_date">
        {article.date}
      </Typography>
      <Box my={5}>
        <Typography variant="h3" id="article_title">
          {article.title}
        </Typography>
      </Box>
      <Box style={{ display: "flex" }}>
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
        <Typography style={{ display: "inline-block" }}>
          <p style={{ display: "inline-block", marginRight: 10 }}>by</p>
          <strong id="article_author" style={{ display: "inline-block" }}>
            {article.author}
          </strong>
        </Typography>
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
          id="article_body"
        />
      </Container>
    </Layout>
  );
}
