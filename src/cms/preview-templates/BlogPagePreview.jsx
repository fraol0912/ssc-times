import React from "react";
import { Typography, Avatar, Box, Container } from "@material-ui/core";

export default function BlogPagePreview({ entry, widgetFor, getAsset }) {
  const article = {
    title: entry.getIn(["data", "title"]),
    description: entry.getIn(["data", "description"]),
    date: entry.getIn(["data", "date"]),
    author: entry.getIn(["data", "author"]),
    tag: entry.getIn(["data", "tag"]),
    image: getAsset(entry.getIn(["data", "image"])).url,
    authorPic: getAsset(entry.getIn(["data", "authorPic"])).url,
    imageAlt: entry.getIn(["data", "imageAlt"]),
    html: widgetFor("body"),
    id: "",
    slug: "",
  };

  return (
    <>
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
          width: "190px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Avatar
          alt={article.author}
          src={article.authorPic}
          style={{ display: "inline-block" }}
        />{" "}
        by <strong>{article.author}</strong>
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
    </>
  );
}
