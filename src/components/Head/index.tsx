import React from "react";

import { Helmet } from "react-helmet";

export default function Head({ title, description, author }) {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
        title={title}
        meta={[
          {
            name: "description",
            content: description,
          },
          { name: "author", content: author },
          { property: "og:type", content: "website" },
        ]}
      />
    </>
  );
}
