
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/Gold-For-Cash/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/Gold-For-Cash/src/pages/about.js")),
  "component---src-pages-archive-js": preferDefault(require("/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/Gold-For-Cash/src/pages/archive.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/Gold-For-Cash/src/pages/index.js")),
  "component---src-pages-preview-js": preferDefault(require("/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/Gold-For-Cash/src/pages/preview.js")),
  "component---src-templates-project-js": preferDefault(require("/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/Gold-For-Cash/src/templates/project.js"))
}

