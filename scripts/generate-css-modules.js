const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const fs = require("fs");
const path = require("path");
const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const { glob } = require("glob");
const crypto = require("crypto");
const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("../tailwind.config.js");
const readline = require("readline");

// 🛠️ Parse command-line arguments properly
const argv = yargs(hideBin(process.argv))
  .option("f", {
    alias: "folders",
    type: "array",
    description: "List of folders to process",
    default: ["components", "app"] // Default folders
  })
  .option("pname", {
    type: "string",
    description: "Prefix for hashed class names",
    default: "prefixname"
  })
  .help().argv;

// 🔑 Generate unique hash for a given string
const generateHash = (str) =>
  crypto.createHash("md5").update(str).digest("hex").slice(0, 6);

// 🎨 Load Tailwind config
const fullConfig = resolveConfig(tailwindConfig);
const allTailwindClasses = new Set(
  Object.keys(fullConfig.theme.extend || {}).concat(
    Object.keys(fullConfig.theme || {})
  )
);

// 🔍 Check if a class belongs to Tailwind
const isTailwindClass = (cls) => {
  if (cls.startsWith("[") && cls.endsWith("]")) {
    return false;
  }

  const tailwindPrefixes = [
    "dark:",
    "hidden",
    "block",
    "inline",
    "inline-block",
    "flex",
    "inline-flex",
    "grid",
    "inline-grid",
    "m-",
    "mx-",
    "my-",
    "mt-",
    "mr-",
    "mb-",
    "ml-",
    "space-",
    "p-",
    "px-",
    "py-",
    "pt-",
    "pr-",
    "pb-",
    "pl-",
    "w-",
    "h-",
    "min-w-",
    "min-h-",
    "max-w-",
    "max-h-",
    "size-",
    "absolute",
    "relative",
    "fixed",
    "sticky",
    "inset-",
    "top-",
    "right-",
    "bottom-",
    "left-",
    "z-",
    "text-",
    "font-",
    "leading-",
    "tracking-",
    "whitespace-",
    "break-",
    "uppercase",
    "lowercase",
    "capitalize",
    "normal-case",
    "border-",
    "border-t-",
    "border-r-",
    "border-b-",
    "border-l-",
    "rounded-",
    "outline-",
    "bg-",
    "from-",
    "via-",
    "to-",
    "ring-",
    "shadow-",
    "opacity-",
    "blur-",
    "drop-shadow-",
    "backdrop-",
    "brightness-",
    "contrast-",
    "grid-",
    "flex-",
    "gap-",
    "col-span-",
    "row-span-",
    "justify-",
    "items-",
    "self-",
    "content-",
    "order-",
    "cursor-",
    "pointer-events-",
    "select-",
    "resize-",
    "touch-",
    "scroll-",
    "animate-",
    "transition-",
    "duration-",
    "ease-",
    "delay-",
    "scale-",
    "rotate-",
    "translate-",
    "skew-",
    "-scale-",
    "-rotate-",
    "-translate-",
    "-skew-",
    "overflow-",
    "overflow-x-",
    "overflow-y-",
    "overscroll-",
    "visible",
    "invisible",
    "aspect-",
    "mix-blend-",
    "bg-blend-",
    "hover:",
    "focus:",
    "active:",
    "disabled:",
    "checked:",
    "open:",
    "visited:",
    "first:",
    "last:",
    "odd:",
    "even:",
    "sm:",
    "md:",
    "lg:",
    "xl:",
    "2xl:"
  ];

  return (
    allTailwindClasses.has(cls) ||
    tailwindPrefixes.some((prefix) => cls.startsWith(prefix))
  );
};


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer.toLowerCase()));
  });
};

const moveToDump = async (filePath) => {
  const dumpFolder = path.join(__dirname, "..", "dump");

  if (!fs.existsSync(dumpFolder)) {
    fs.mkdirSync(dumpFolder, { recursive: true });
  }

  const relativePath = path.relative(path.join(__dirname, ".."), filePath);
  const dumpPath = path.join(dumpFolder, relativePath);
  const dumpDir = path.dirname(dumpPath);

  if (!fs.existsSync(dumpDir)) {
    fs.mkdirSync(dumpDir, { recursive: true });
  }

  if (fs.existsSync(dumpPath)) {
    const answer = await askQuestion(
      `⚠️ File already exists in dump: ${dumpPath}. Overwrite? (yes/no): `
    );

    if (answer === "yes") {
      fs.copyFileSync(filePath, dumpPath);
      console.log(`📦 Overwritten in dump: ${dumpPath}`);
    } else {
      console.log("❌ Move operation cancelled.");
    }
  } else {
    fs.copyFileSync(filePath, dumpPath);
    console.log(`📦 Moved original to: ${dumpPath}`);
  }
};


const processComponent = async (filePath) => {
  try {
    await moveToDump(filePath);

    const code = fs.readFileSync(filePath, "utf-8");
    const ext = path.extname(filePath);
    const cssModulePath = filePath.replace(ext, ".module.css");

    const ast = parse(code, {
      sourceType: "module",
      plugins: ["jsx", "typescript"]
    });

    const classMap = new Map();
    let hasStringLiteralClassName = false;
    let hasUseClient =
      code.startsWith('"use client"') || code.startsWith("'use client'");

    traverse(ast, {
      JSXOpeningElement({ node }) {
        if (!node.name) return;

        const tagName =
          node.name.type === "JSXIdentifier" ? node.name.name : null;
        if (!tagName) return;

        const validTags = [
          "html",
          "body",
          "main",
          "div",
          "section",
          "article",
          "footer",
          "header",
          "button",
          "a",
          "img"
        ];
        const isFragment = node.name.type === "JSXFragment";
        if (isFragment || validTags.includes(tagName)) {
          console.log(`🔍 Processing tag: ${tagName || "Fragment"}`);
        }

        const classNameAttr = node.attributes.find(
            (attr) => attr.type === "JSXAttribute" && attr.name.name === "className"
          );
  
          if (!classNameAttr || classNameAttr.value?.type !== "StringLiteral") return;
  
          hasStringLiteralClassName = true;
          const originalClassString = classNameAttr.value.value.trim();
          if (!originalClassString) return;
  
          const classList = originalClassString.split(/\s+/);
          
          // Split classes into regular, dark, and custom
          const regularClasses = [];
          const darkClasses = [];
          const customClasses = [];
          
          classList.forEach((cls) => {
            if (cls.startsWith("dark:")) {
              const baseClass = cls.slice(5); // Remove 'dark:'
              if (isTailwindClass(baseClass)) {
                darkClasses.push(baseClass);
              } else {
                customClasses.push(cls);
              }
            } else if (isTailwindClass(cls)) {
              regularClasses.push(cls);
            } else {
              customClasses.push(cls);
            }
          });
  
          const regularClassesStr = regularClasses.join(" ");
          const darkClassesStr = darkClasses.join(" ");
          const customClassesStr = customClasses.join(" ");
  
          if (!regularClassesStr && !darkClassesStr) return;
  
          if (!classMap.has(originalClassString)) {
            const uniqueClassName = `${argv.pname}${generateHash(originalClassString)}`;
            classMap.set(originalClassString, {
              hashedClass: uniqueClassName,
              regularClasses: regularClassesStr,
              darkClasses: darkClassesStr,
              customClasses: customClassesStr
            });
          }
        }
      });
  
      if (hasStringLiteralClassName && classMap.size > 0) {
        let cssContent = "";
        for (const { hashedClass, regularClasses, darkClasses } of classMap.values()) {
          if (regularClasses) {
            cssContent += `.${hashedClass} {\n  @apply ${regularClasses};\n}\n`;
          }
          if (darkClasses) {
            cssContent += `\n:global(.dark) .${hashedClass} {\n    @apply ${darkClasses};\n  }\n`;
          }
        }
  
        if (cssContent) {
          fs.writeFileSync(cssModulePath, cssContent);
          console.log(`✅ Generated CSS module: ${cssModulePath}`);
        }
  
        let newCode = code;

      // Ensure CSS module import exists
      if (!newCode.includes("import styles from")) {
        const importStatement = `import styles from './${path.basename(cssModulePath)}';\n`;

        if (hasUseClient) {
          newCode = newCode.replace(
            /^(['"])use client\1\s*/,
            `$1use client$1\n${importStatement}`
          );
        } else {
          newCode = importStatement + newCode;
        }
      }

      // Replace className attributes correctly
      for (const [originalClass, { hashedClass, customClasses }] of classMap) {
        const classReplacement = customClasses
          ? `className={\`\${styles.${hashedClass}} ${customClasses}\`}`
          : `className={styles.${hashedClass}}`;

        // Escape special characters for regex and replace in the code
        const regex = new RegExp(`className="${originalClass.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}"`, 'g');
        newCode = newCode.replace(regex, classReplacement);
      }

      fs.writeFileSync(filePath, newCode);
      console.log(`✅ Updated component: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
};

// 🏁 Main execution
(async () => {
  const patterns = argv.f.flatMap((folder) => [
    `${folder}/**/*.js`,
    `${folder}/**/*.jsx`,
    `${folder}/**/*.ts`,
    `${folder}/**/*.tsx`
  ]);
  const componentFiles = await glob(patterns);
  for (const filePath of componentFiles) {
    await processComponent(filePath);
  }
  rl.close();
})();
