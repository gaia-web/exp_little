import { html } from "lit-html";
import { Template, TemplateProps } from "..";

export default (({ routerMatch }: TemplateProps) =>
  html`
    <h1>Other</h1>
    <main>${JSON.stringify(routerMatch)}</main>
  `) as Template;
