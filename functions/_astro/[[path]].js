import { proxyBlog } from "../_lib/blog-proxy.js";

export function onRequest({ request }) {
  return proxyBlog(request);
}
