const BLOG_ORIGIN = "https://blog.greyden.dev";
const INTERNAL_PROXY_HEADER = "X-Greyden-Internal-Proxy";

export async function proxyBlog(request, stripPrefix = "") {
  const incomingUrl = new URL(request.url);
  const upstreamUrl = new URL(BLOG_ORIGIN);

  upstreamUrl.pathname = stripPrefix
    ? incomingUrl.pathname.slice(stripPrefix.length) || "/"
    : incomingUrl.pathname;
  upstreamUrl.search = incomingUrl.search;

  const upstreamRequest = new Request(upstreamUrl, request);
  upstreamRequest.headers.set(INTERNAL_PROXY_HEADER, "1");

  return fetch(upstreamRequest);
}
