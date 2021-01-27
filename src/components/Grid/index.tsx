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
            description
            title
            image {
              publicURL
            }
            imageAlt
          }
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
            description: string;
            title: string;
            image: {
              publicURL: string;
            };
            imageAlt: string;
          };
        };
      }[];
    };
  } = useStaticQuery(query);

  const { articles } = useArticlesStore();
  const articlesDispatch = useArticlesDispatch();

  const { tab } = useLayoutStore();

  const tags = [...new Set<string>(articles.map(article => article.tag))];
  const tag = tags[tab];

  useEffect(() => {
    const articles = data.allMarkdownRemark.edges.map(({ node }) => {
      return {
        ...node.frontmatter,
        id: node.id,
        slug: node.fields.slug,
        image: node.frontmatter.image?.publicURL,
      };
    });

    articlesDispatch({ type: "ADD_ARTICLES", payload: articles });
  }, []);

  return <ArticleList articles={articles} tag={tag} />;
}
