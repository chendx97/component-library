import { App } from "vue";
import Card from "./card";
import Demo from "./demo";

const components: any = {
  MyCard: Card,
  MyDemo: Demo,
};

const MyUI = {
  install: (Vue: App) => {
    Object.keys(components).forEach((key) => {
      Vue.use(components[key]);
    });
  },
};

// 按需引入
export { Card, Demo };

export default MyUI;
