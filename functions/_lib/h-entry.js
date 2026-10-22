const AUTHOR_URL = "https://greyden.dev/";
const AUTHOR_NAME = "Greyden Scott";

export function isNewsPost(pathname) {
  return /^\/news\/posts\/[^/]+\/?$/.test(pathname);
}

function addClass(element, className) {
  const current = element.getAttribute("class") ?? "";
  const names = current.split(/\s+/).filter(Boolean);
  if (!names.includes(className)) {
    element.setAttribute("class", [...names, className].join(" "));
  }
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export function rewriteNewsPost(response, pageUrl) {
  const state = {
    published: "",
    canonical: pageUrl,
    inEntry: false,
  };

  return new HTMLRewriter()
    .on('meta[property="article:published_time"]', {
      element(element) {
        state.published = element.getAttribute("content") ?? "";
      },
    })
    .on('link[rel="canonical"]', {
      element(element) {
        const href = element.getAttribute("href");
        if (href) state.canonical = href;
      },
    })
    .on("article.article", {
      element(element) {
        state.inEntry = true;
        addClass(element, "h-entry");
        const permalink = escapeHtml(state.canonical);
        element.prepend(
          `<a class="u-url" href="${permalink}" hidden>${permalink}</a><a class="p-author h-card" rel="author" href="${AUTHOR_URL}" hidden>${AUTHOR_NAME}</a>`,
          { html: true },
        );
        element.onEndTag(() => {
          state.inEntry = false;
        });
      },
    })
    .on("h1.article-title", {
      element(element) {
        if (state.inEntry) addClass(element, "p-name");
      },
    })
    .on("div.article-content", {
      element(element) {
        if (state.inEntry) addClass(element, "e-content");
      },
    })
    .on("time", {
      element(element) {
        if (!state.inEntry) return;
        addClass(element, "dt-published");
        if (state.published && !element.getAttribute("datetime")) {
          element.setAttribute("datetime", state.published);
        }
      },
    })
    .transform(response);
}
