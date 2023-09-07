import { html } from "lit-html";
import { Template, rerender } from "..";

let count = 0;

export default (() =>
  html`
    <h1>Home</h1>
    <button
      @click=${() => {
        count++;
        debugger;
        rerender();
      }}
    >
      Count ${count}
    </button>
  `) as Template;
