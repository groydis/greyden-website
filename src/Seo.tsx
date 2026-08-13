import { useEffect } from "react";

export const SITE_URL = "https://greyden.dev";
export const SITE_NAME = "GreyDOS 1.0";
export const DEFAULT_DESCRIPTION =
  "Welcome to GreyDOS 1.0. Greyden Scott's personal website — a Windows 98 / GeoCities homage from a software developer in Brisbane, Australia.";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

type SeoProps = {
  title: string;
  description: string;
  path: string;
};

export function Seo({ title, description, path }: SeoProps) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const fullTitle = title.includes(SITE_NAME)
      ? title
      : `${title} | ${SITE_NAME}`;

    document.title = fullTitle;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    upsertLink("canonical", url);
  }, [title, description, path]);

  return null;
}
