import button from "./button";

export default {
  ...button,
  install(app) {
    app.component(button.name, button);
  },
};
