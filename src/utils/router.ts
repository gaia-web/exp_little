import Router from "navigo";
import { Template, renderTemplate } from "./template";

type Route = {
  path: string;
  template: Template;
};

let render = () => renderTemplate();

export function setupRouter(base: string = "/", routes?: Route[]) {
  const router = new Router(base);
  routes?.map(({ path, template }) =>
    router.on(path, (match) => {
      render = () =>
        renderTemplate(template, {
          router,
          routerMatch: match,
        });
      render();
    })
  );
  router.resolve();
  return router;
}

export function rerender() {
  render();
}
