import React from "react";
import { graphql } from "gatsby";

// hooks
import { ArticlePage } from "../hooks/useArticlesStore";

import ArtclePage from "../components/ArticlePage";

interface Props {
  data: {
    markdownRemark: {
      frontmatter: {
        author: string;
        authorPic: {
          publicURL: string;
        };

        date: string;
        image: {
          publicURL: string;
        };

        imageAlt: string;
        tag: string;
        title: string;
      };
      html: string;
    };
  };
}

export default function ArticleTemplate({ data }: Props) {
  const article: ArticlePage = {
    ...data.markdownRemark.frontmatter,
    authorPic: data.markdownRemark.frontmatter.authorPic?.publicURL,
    image: data.markdownRemark.frontmatter.image?.publicURL,
    html: data.markdownRemark.html,
  };

  return <ArtclePage article={article} />;
}

export const pageQuery = graphql`
  query BlogPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        author
        authorPic {
          publicURL
        }
        date(formatString: "ddd, MMM DD, YYYY")
        image {
          publicURL
        }
        imageAlt
        tag
        title
      }
      html
    }
  }
`;
