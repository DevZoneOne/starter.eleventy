import minifier from "html-minifier-terser";
import { minify as minifyXML } from "minify-xml";
import prettier from "prettier";
import path from "path";

const minify = (content, outputPath) => {
  if (outputPath) {
    const extname = path.extname(outputPath);
    if (extname) {
      switch (extname) {
        case ".html":
          return minifier.minify(content, {
            useShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true,
          });
        case ".json":
          // Not found a proper minifier yet, so formatting it instead.
          // Strip leading period from extension and use as the Prettier parser.
          const parser = extname.replace(/^./, "");
          return prettier.format(content, {
            parser,
            printWidth: 160,
            singleAttributePerLine: false,
            bracketSameLine: true,
          });
        case ".xml": 
          return minifyXML(content, {});
        default:
          return content;
        }
      }
    }
    return content;
};

const prettify = (content, outputPath) => {
  if (outputPath) {
    const extname = path.extname(outputPath);
    if (extname) {
      switch (extname) {
        case ".html":
        case ".json":
          // Strip leading period from extension and use as the Prettier parser.
          const parser = extname.replace(/^./, "");
          return prettier.format(content, {
            parser,
            printWidth: 160,
            singleAttributePerLine: false,
            bracketSameLine: true,
          });

        default:
          return content;
      }
    }
  }
  return content;
};

export default {
  minify,
  prettify,
};