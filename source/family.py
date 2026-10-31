"""Build 'Arjun Sans' family (Light/Regular/Bold) from the original hand-written skeletons in base.py. No LLM, no copied outlines."""
import os, random, re
from fontTools.ttLib import TTFont
import fontgen as F
from base import BASE
FAM = "Arjun Sans"; OUT = "fonts/arjun-sans"; os.makedirs(OUT, exist_ok=True)
W = {"Light": (48, 400), "Regular": (78, 400), "Bold": (124, 700)}
for style, (wt, cls) in W.items():
    st = {"weight": wt, "cap": "flat", "join": "round", "width": 1.0}
    geos = {c: F.glyph_geom(BASE[c], st, random.Random(7)) for c in F.CHARS if c in BASE}
    tmp = f"build/{style}"; os.makedirs(tmp, exist_ok=True)
    paths, nk = F.build(FAM, geos, st, tmp, "stroke")
    ps = "ArjunSans-" + style
    for flav, p in paths.items():
        f = TTFont(p); n = f["name"]
        for rec_id, val in {1: FAM if style in ("Regular","Bold") else FAM+" "+style, 2: "Regular" if style=="Light" else style,
                            4: f"{FAM} {style}", 6: ps, 3: ps+";1.000", 16: FAM, 17: style}.items():
            n.setName(val, rec_id, 3, 1, 0x409)
        f["OS/2"].usWeightClass = {"Light":300,"Regular":400,"Bold":700}[style]
        if style == "Bold": f["OS/2"].fsSelection = (f["OS/2"].fsSelection & ~0x40) | 0x20; f["head"].macStyle |= 1
        if "CFF " in f: f["CFF "].cff.fontNames = [ps]
        f.save(f"{OUT}/{ps}.{flav}")
    print(style, nk, "kern pairs", "missing:", [c for c in F.CHARS if c not in BASE])
