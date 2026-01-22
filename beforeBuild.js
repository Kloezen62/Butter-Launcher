import fs from "fs";
import path from "path";

// read package.json
const packageJson = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "package.json")),
);
packageJson.build_date =
  "ButterLauncher_" + new Date().toISOString().split("T")[0];

console.log("Setting build date to: " + packageJson.build_date);

fs.writeFileSync(
  path.join(process.cwd(), "package.json"),
  JSON.stringify(packageJson, null, 2),
);
