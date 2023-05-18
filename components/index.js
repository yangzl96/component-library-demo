import * as components from "./components";
// import { button } from xxx
export * from "./components";

// app.use('JinkeUI')

const install = (app) => {
  Object.keys(components).forEach((key) => {
    const comp = components[key];
    if (comp.install) {
      comp.install(app);
    } else {
      app.use(comp.name, comp);
    }
  });
};

export default install;
