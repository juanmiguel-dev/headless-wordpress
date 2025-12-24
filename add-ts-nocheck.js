const fs = require("fs");

const files = ["src/gql/gql.ts", "src/gql/graphql.ts"];

files.forEach((filePath) => {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf8");
    if (!data.includes("// @ts-nocheck")) {
      const updatedContent = `// @ts-nocheck\n${data}`;
      fs.writeFileSync(filePath, updatedContent, "utf8");
      console.log(`Added "// @ts-nocheck" to ${filePath}`);
    }
  } else {
    console.warn(`File not found: ${filePath}`);
  }
});

