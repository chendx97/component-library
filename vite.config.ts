import { LibraryOptions, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import glob from "glob";

const list = {};
const makeList = async (dirPath) => {
  const files = glob.sync(`${dirPath}/**/index.ts`);
  for (let file of files) {
    const component = file.split(/[/.]/)[2];
    // list.push({
    //   entry: path.resolve(__dirname, file),
    //   name: component,
    //   fileName: (format) => `${component}.${format}.js`,
    // });
    list[component] = file;
  }
};
makeList("components/lib");
console.log(list);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "components/lib/card/index.ts"),
      name: "MyUI",
      formats: ["umd"],
      fileName: (format, fileName) => `${fileName}.${format}.js`,
    },
    // lib: list as LibraryOptions,
    // lib: {
    //   entry: list,
    //   name: "MyUI",
    //   formats: ["umd"],
    // },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        inlineDynamicImports: true,
      },
    },
  },
});
