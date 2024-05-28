import fs from "fs";
export const getHTMLContent = (filePath: string) => {
  return   fs.readFileSync(filePath, "utf8");
};
