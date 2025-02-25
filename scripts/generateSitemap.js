const { writeFileSync, existsSync, mkdirSync } = require("fs")
const prettier = require("prettier")
const path = require("path")

async function generate() {
  const { globby } = await import("globby") // Dynamic import

  console.log("Generating sitemaps...")

  const prettierConfig = (await prettier.resolveConfig("./.prettierrc.js")) || {}

  // Get all relevant pages
  const allPages = await globby(["app/**/*.tsx", "posts/**/*.md", "pages/**/*.md", "!app/**/*.test.tsx", "!app/**/_*.tsx"])

  // Separate standard and web-story pages
  const standardPages = []
  const webStoryPages = []

  allPages.forEach((page) => {
    const formattedPath = page
      .replace(/^app\//, "")
      .replace(/^posts\//, "blog/") // Convert posts to blog URLs
      .replace(/^pages\//, "")
      .replace(/\.tsx$/, "")
      .replace(/\.md$/, "")
      .replace(/\/page$/, "")

    const route = ["index", "home", "layout"].includes(formattedPath) ? "" : formattedPath

    if (route.includes("[slug]")) {
      return // Exclude dynamic [slug] pages
    }

    const url = `https://akashInsights.com/${route}`
    const entry = `
      <url>
          <loc>${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>${route.startsWith("blog/") ? "0.8" : "1.0"}</priority>
      </url>
    `

    if (route.startsWith("blog/")) {
      webStoryPages.push(entry) // Add to web story sitemap
    } else {
      standardPages.push(entry) // Add to main sitemap
    }
  })

  // Generate sitemap.xml
  const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${standardPages.join("")}
  </urlset>`

  // Generate web-story-sitemap.xml
  const webStoryXML = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${webStoryPages.join("")}
  </urlset>`

  // Format XML using Prettier
  const formattedSitemap = await prettier.format(sitemapXML, { ...prettierConfig, parser: "html" })
  const formattedWebStory = await prettier.format(webStoryXML, { ...prettierConfig, parser: "html" })

  // Ensure the `public/` directory exists
  const publicDir = path.join(process.cwd(), "public")
  if (!existsSync(publicDir)) {
    mkdirSync(publicDir, { recursive: true })
  }

  // Write both sitemaps
  writeFileSync(path.join(publicDir, "sitemap.xml"), formattedSitemap)
  writeFileSync(path.join(publicDir, "web-story-sitemap.xml"), formattedWebStory)

  console.log("Sitemap and Web Story Sitemap generated successfully!")
}

generate().catch((error) => {
  console.error("Error generating sitemaps:", error)
  process.exit(1)
})
