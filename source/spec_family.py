from PIL import Image, ImageDraw, ImageFont
D="fonts/arjun-sans/ArjunSans-"
im=Image.new("RGB",(1600,1000),"#f6f4ef"); d=ImageDraw.Draw(im); y=40
f=lambda s,z: ImageFont.truetype(D+s+".ttf",z)
d.text((60,y),"Arjun Sans",font=f("Bold",150),fill="#111"); y+=200
d.text((60,y),"Light · Regular · Bold — original stroke family, v1.000",font=f("Regular",34),fill="#666"); y+=80
for s in ["Light","Regular","Bold"]:
    d.text((60,y),"Compress the context, keep the signal.",font=f(s,64),fill="#111"); y+=95
y+=20
d.text((60,y),"ABCDEFGHIJKLMNOPQRSTUVWXYZ",font=f("Regular",54),fill="#111"); y+=80
d.text((60,y),"abcdefghijklmnopqrstuvwxyz",font=f("Regular",54),fill="#111"); y+=80
d.text((60,y),"0123456789 .,:;!?'\"-()/&@#%+=*",font=f("Bold",54),fill="#111"); y+=80
d.text((60,y),"Sphinx of black quartz, judge my vow. AVATAR To Wave",font=f("Light",40),fill="#333")
im.save("specimens/arjun-sans.png")
