import React from "react";
import { graphql } from "gatsby";

// hooks
import { Article } from "../hooks/useArticlesStore";

import ArtclePage from "../components/ArticlePage";

interface Props {
  data: {
    markdownRemark: {
      id: string;

      fields: {
        slug: string;
      };
      frontmatter: {
        author: string;
        authorPic: {
          publicURL: string;
        };

        date: string;
        description: string;
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
  const article: Article = {
    ...data.markdownRemark.frontmatter,
    authorPic: data.markdownRemark.frontmatter.authorPic?.publicURL,
    image: data.markdownRemark.frontmatter.image?.publicURL,
    html: data.markdownRemark.html,
    id: data.markdownRemark.id,
    slug: data.markdownRemark.fields.slug,
  };

  return <ArtclePage article={article} />;
}

export const pageQuery = graphql`
  query BlogPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      fields {
        slug
      }
      frontmatter {
        author
        authorPic {
          publicURL
        }
        date(formatString: "ddd, MMM DD, YYYY")
        description
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
