import namedLinks from "../config/socialsLinks";
import { SocialLink } from "../types";

const formatLinks = (links: string[]) => {
  const special = ["(personal)", "https://github.com/"];
  let result = links.map((l) => ({
    display: namedLinks.find((nl: SocialLink) => l.startsWith(nl.href))?.name,
    url: l,
    icon: namedLinks.find((nl: SocialLink) => l.startsWith(nl.href))?.icon,
    special: special.some((s) => l.startsWith(s)),
  }));
  result.forEach((l) => {
    if (l.url.match(/\([a-z]+\)/)) {
      l.url = l.url.replace(/\([a-z]+\)/g, "").trim();
    }
  });
  result.sort((a, b) => (a.special === b.special ? 0 : a.special ? -1 : 1));
  return result;
};

export default formatLinks;
