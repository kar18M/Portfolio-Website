import os
import shutil
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def get_avg_color(img, box):
    crop = img.crop(box)
    pixels = list(crop.getdata())
    r = sum([p[0] for p in pixels]) // len(pixels)
    g = sum([p[1] for p in pixels]) // len(pixels)
    b = sum([p[2] for p in pixels]) // len(pixels)
    return (r, g, b)

img = Image.open('portfolio-website/static/models/Computer/baked_computer.jpg')
draw = ImageDraw.Draw(img)
font_bold = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 36)
font_regular = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 24)

# 1. Bezel bottom (User's custom image)
bezel_box = (1200, 2600, 1800, 2800)
bezel = img.crop(bezel_box)
bezel = bezel.rotate(180)

# Erase the old text 'Heffernan henry inc' perfectly preserving horizontal gradient
clean_bg = bezel.crop((195, 20, 485, 25))
clean_bg_stretched = clean_bg.resize((485 - 195, 160 - 35))

erase_mask = Image.new('L', clean_bg_stretched.size, 0)
erase_draw = ImageDraw.Draw(erase_mask)
erase_draw.rectangle((5, 5, erase_mask.size[0]-5, erase_mask.size[1]-5), fill=255)
erase_mask = erase_mask.filter(ImageFilter.GaussianBlur(radius=6))
bezel.paste(clean_bg_stretched, (195, 35), erase_mask)

# Paste the user's logo patch, resized to match the original logo dimensions
user_patch = Image.open('image copy.png').convert('RGB')
user_patch = user_patch.resize((370, 120), Image.Resampling.LANCZOS)
mask = Image.new('L', user_patch.size, 0)
draw_mask = ImageDraw.Draw(mask)
# Inner rectangle fully opaque, with a 5px border for feathering
draw_mask.rectangle((5, 5, mask.size[0]-5, mask.size[1]-5), fill=255)
mask = mask.filter(ImageFilter.GaussianBlur(radius=5))

bezel.paste(user_patch, (100, 40), mask)

bezel = bezel.rotate(180)
img.paste(bezel, (1200, 2600))



# 2. Back of monitor sticker
box2_left = (1560, 520, 1630, 820)
bg2 = get_avg_color(img, (1650, 550, 1700, 600))
draw.rectangle(box2_left, fill=bg2)
t2_img = Image.new('RGBA', (300, 100), (0, 0, 0, 0))
t2_draw = ImageDraw.Draw(t2_img)
t2_draw.text((0, 0), "Karthick 2026 Showcase", fill=(180, 180, 180), font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 20))
t2_draw.text((0, 30), "developer", fill=(180, 180, 180), font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 16))
t2_img = t2_img.rotate(90, expand=True)
img.paste(t2_img, (1570, 520), t2_img)

box2_right = (1750, 650, 1820, 820)
draw.rectangle(box2_right, fill=bg2)
t2b_img = Image.new('RGBA', (200, 80), (0, 0, 0, 0))
t2b_draw = ImageDraw.Draw(t2b_img)
t2b_draw.text((0, 0), "Karthick", fill=(180, 180, 180), font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 24))
t2b_draw.text((0, 30), "developer", fill=(180, 180, 180), font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 16))
t2b_img = t2b_img.rotate(90, expand=True)
img.paste(t2b_img, (1750, 670), t2b_img)

box2_mid = (1630, 640, 1650, 820)
draw.rectangle(box2_mid, fill=bg2)

# 3. Keyboard bezel
box3 = (2350, 1860, 2550, 1920)
bg3 = get_avg_color(img, (2400, 1800, 2450, 1850))
draw.rectangle(box3, fill=bg3)
t3_font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 20)
draw.text((2370, 1870), "Karthick M", fill=(120, 120, 120), font=t3_font)
draw.text((2370, 1895), "portfolio", fill=(120, 120, 120), font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 14))

# 4. Back of PC case sticker
box4_top = (2680, 3130, 2900, 3180)
bg4 = get_avg_color(img, (2700, 3200, 2750, 3250))
draw.rectangle(box4_top, fill=bg4)
draw.text((2690, 3135), "Karthick 2026 Showcase", fill=(180, 180, 180), font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 16))
draw.text((2690, 3155), "developer", fill=(180, 180, 180), font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 12))

box4_mid = (2680, 3210, 2900, 3230)
draw.rectangle(box4_mid, fill=bg4)

box4_br = (2830, 3250, 2960, 3300)
draw.rectangle(box4_br, fill=bg4)
draw.text((2830, 3260), "Karthick", fill=(180, 180, 180), font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 16))
draw.text((2830, 3280), "developer", fill=(180, 180, 180), font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 12))

# Save
img.save('portfolio-website/static/models/Computer/baked_computer.jpg')
shutil.copy('portfolio-website/static/models/Computer/baked_computer.jpg', 'portfolio-website/public/models/Computer/baked_computer.jpg')

print("Applied texture edits successfully.")
