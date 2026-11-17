#!/usr/bin/env python3
"""Check a built Jekyll site for broken internal links.

Usage:
    bundle exec jekyll build
    python3 scripts/check_links.py _site

Reports every internal link whose target page or file does not exist,
with the pages that link to it. Exits 1 if any are found.
"""
import os
import sys
from collections import defaultdict
from html.parser import HTMLParser
from urllib.parse import urljoin, urlparse


class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []

    def handle_starttag(self, tag, attrs):
        if tag == "a":
            href = dict(attrs).get("href")
            if href:
                self.links.append(href)


def target_exists(root, path):
    p = os.path.join(root, path.lstrip("/"))
    candidates = [p, p + ".html", os.path.join(p, "index.html")]
    return any(os.path.isfile(c) for c in candidates)


def main(root):
    broken = defaultdict(set)
    skip_dirs = ("assets", "downloads", "stacks")
    for dirpath, _, files in os.walk(root):
        rel = os.path.relpath(dirpath, root)
        if rel.split(os.sep)[0] in skip_dirs:
            continue
        for name in files:
            if not name.endswith(".html"):
                continue
            fp = os.path.join(dirpath, name)
            url = "/" + os.path.relpath(fp, root).replace(os.sep, "/")
            parser = LinkParser()
            with open(fp, encoding="utf-8") as fh:
                parser.feed(fh.read())
            for href in parser.links:
                if href.startswith(("http:", "https:", "mailto:", "#", "javascript:", "//")):
                    continue
                path = urlparse(urljoin(url, href)).path
                if not target_exists(root, path):
                    broken[path].add(url)
    for path in sorted(broken):
        sources = sorted(broken[path])
        print(f"{path}  <- {len(sources)} page(s): {', '.join(sources[:5])}")
    print(f"{len(broken)} broken internal link target(s)")
    return 1 if broken else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1] if len(sys.argv) > 1 else "_site"))
