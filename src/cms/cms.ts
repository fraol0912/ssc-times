import CMS from "netlify-cms-app";

// Preview
import BlogPagePreview from "./preview-templates/BlogPagePreview";

CMS.registerPreviewTemplate("articles", BlogPagePreview);
