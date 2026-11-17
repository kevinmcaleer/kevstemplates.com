"""Build every generated template into downloads/.

Run from the repository root:  python3 scripts/templates/build.py [name ...]
With names, only those files are rebuilt.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from lib import build_docx, build_xlsx, ROOT  # noqa: E402
from docs import docs  # noqa: E402

OUT = os.path.join(ROOT, "downloads")


def main(only):
    built = []
    for name, spec in docs().items():
        if only and name not in only:
            continue
        build_docx(os.path.join(OUT, name), **spec)
        built.append(name)
    try:
        from sheets import sheets
    except ImportError:
        sheets = dict
    for name, spec in sheets().items():
        if only and name not in only:
            continue
        build_xlsx(os.path.join(OUT, name), **spec)
        built.append(name)
    try:
        from other import others
    except ImportError:
        others = dict
    for name, fn in others().items():
        if only and name not in only:
            continue
        fn(os.path.join(OUT, name))
        built.append(name)
    for b in built:
        print("built", b)


if __name__ == "__main__":
    main(set(sys.argv[1:]))
