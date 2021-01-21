import React from "react";
import { navigate } from "gatsby";
import { Box, Button, Container, Typography } from "@material-ui/core";

import Layout from "../components/Layout";

export default function NotFoundPage() {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Typography variant="h3">Page not found.</Typography>
        <Box marginTop={5}>
          <Typography variant="body1">
            The page you requested was not found. Please go back to the home
            page and browse more articles.
          </Typography>
        </Box>
        <Box marginTop={5}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/")}
          >
            Go to Home Page
          </Button>
        </Box>
      </Container>
    </Layout>
  );
}
