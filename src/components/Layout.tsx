import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Box, Container, ThemeProvider } from "@material-ui/core";

// Providers
import { LayoutProvider } from "../hooks/useLayoutStore";
import { ArticlesProvider } from "../hooks/useArticlesStore";

// Components
import Header from "../components/Header";
import Head from "../components/Head";

// theme
import theme from "../theme";

export default function Layout({ children }) {
  const data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
      };
    };
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);
  const { title, description, author } = data?.site.siteMetadata;

  return (
    <>
      <ThemeProvider theme={theme}>
        <LayoutProvider>
          <ArticlesProvider>
            <Head title={title} description={description} author={author} />
            <Header title={title} />
            <Box marginTop={20}>
              <Container maxWidth="lg">{children}</Container>
            </Box>
          </ArticlesProvider>
        </LayoutProvider>
      </ThemeProvider>
    </>
  );
}
