import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

// Components
import ArticleList from "./ArticleList";

// hooks
import {
  useArticlesStore,
  useArticlesDispatch,
} from "../../hooks/useArticlesStore";
import { useLayoutStore } from "../../hooks/useLayoutStore";

const query = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___date }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            tag
            author
            date(fromNow: true)
            description
            title
            authorPic {
              publicURL
            }
            image {
              publicURL
            }
            imageAlt
          }
          html
        }
      }
    }
  }
`;

export default function ArticleGrid(): JSX.Element {
  const data: {
    allMarkdownRemark: {
      edges: {
        node: {
          id: string;
          fields: {
            slug: string;
          };
          frontmatter: {
            tag: string;
            author: string;
            date: string;
            description: string;
            title: string;
            authorPic: {
              publicURL: string;
            };
            image: {
              publicURL: string;
            };
            imageAlt: string;
          };
          html: string;
        };
      }[];
    };
  } = useStaticQuery(query);

  const { articles } = useArticlesStore();
  const articlesDispatch = useArticlesDispatch();

  const { tab } = useLayoutStore();

  const tag = articles.map(article => article.tag)[tab];

  useEffect(() => {
    const articles = data.allMarkdownRemark.edges.map(({ node }) => {
      return {
        ...node.frontmatter,
        id: node.id,
        html: node.html,
        slug: node.fields.slug,
        image: node.frontmatter.image.publicURL,
        authorPic: node.frontmatter.authorPic.publicURL,
      };
    });

    articlesDispatch({ type: "ADD_ARTICLES", payload: articles });
  }, []);

  return <ArticleList articles={articles} tag={tag} />;
}
