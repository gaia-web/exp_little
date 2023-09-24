import { TemplateResult, render } from "lit-html";
import Navigo, { Match } from "navigo";

export type Template = (props: TemplateProps) => TemplateResult;
export type TemplateProps = {
  router?: Navigo;
  routerMatch?: Match;
} & Record<string, any>;

export function renderTemplate(template?: Template, props?: TemplateProps) {
  switch (typeof template) {
    case "function":
      render(template(props ?? {}), document.body);
      break;
    default:
      render("", document.body);
      break;
  }
}
