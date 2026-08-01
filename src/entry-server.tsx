import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import V5App from "./versions/v5-multipage/App";

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

/** Server render of the production multipage app for a given URL path. */
export function render(url: string): string {
  return renderToString(
    <StaticRouter basename={routerBasename} location={url}>
      <V5App />
    </StaticRouter>,
  );
}
