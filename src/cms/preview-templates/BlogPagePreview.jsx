import React from "react";

// components
import ArticlePage from "../../components/ArticlePage";

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

  return <ArticlePage article={article} />;
}
