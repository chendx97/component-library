import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// 引入打包前代码
// import MyDemo from "../components/lib/demo/index.ts";
// import MyCard from "../components/lib/card/index.ts";

// import MyUI from "../components/lib";

// 按需导入
import { Card } from "../components/lib";

// import MyUI from "../dist/index.es.js";
// import '../dist/style.css';

const app = createApp(App);
// app.use(MyDemo);
// app.use(MyCard);

// app.use(MyUI);
app.use(Card);

app.mount("#app");
