import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import V5App from "./versions/v5-multipage/App";

/** Server render of the production multipage app for a given URL path. */
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <V5App />
    </StaticRouter>,
  );
}
