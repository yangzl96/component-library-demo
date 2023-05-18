import cpy from "cpy";
import less from "less";
import fs from "fs";
import glob from "fast-glob";
import { resolve } from "path";

const root = process.cwd();
const targets = resolve(root, "./components");
const targetLib = resolve(root, "./lib");
const targetEs = resolve(root, "./es");

const buildLess = async () => {
  // 拷贝原来的less 到对应的文件夹
  await cpy(`${targets}/**/*.less`, targetLib);
  await cpy(`${targets}/**/*.less`, targetEs);

  // 获取所有的 less 文件
  const lessFiles = await glob("**/*.less", { cwd: targets, onlyFiles: true });

  // 遍历 less
  for (let file in lessFiles) {
    const filePath = `${targets}/${lessFiles[file]}`;
    // less code
    const lessCode = fs.readFileSync(filePath, "utf8");
    // 转换 css
    const cssCode = await less.render(lessCode, {
      path: [targets, filePath],
    });

    // 写入 css 文件
    const cssPath = lessFiles[file].replace(".less", ".css");
    fs.writeFileSync(resolve(targetLib, cssPath), cssCode.css);
    fs.writeFileSync(resolve(targetEs, cssPath), cssCode.css);
  }
};

await buildLess();
