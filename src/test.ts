import { setupRouter } from ".";
import home from "./templates/home";
import other from "./templates/other";

setupRouter("/", [
  { path: "/", template: home },
  { path: "/:other", template: other },
]);
