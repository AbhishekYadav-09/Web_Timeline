# Chapter 01 
### HTML5 Page Skeleton Overview 
`<!DOCTYPE html>`

This is a special instruction written at the very beginning of the HTML file that tells the browser which HTML standard this document is using.

1. This is the doctype of HTML5.
2. It tells the browser "use modern HTML5 rendering rules".
3. If this is not written, the browser goes into quirks mode (old, inconsistent rendering like in 1990s browsers)

`<html></html>`

Tells the browser that this is the starting point of the HTML document.
All HTML elements are inside this (in two sections)
1. `head` → metadata
2. `body` → visible context


- `<html lang="en" dir="rtl">`

The `lang` attribute tells screen readers and search engines what the language of the page is
1. `lang="hi"` → hindi
2. `lang="fr"` → french
3. `dir="rtl` → Right-to-Left languages (Arabic, Hebrew, Persian)
4. `dir="ltr"` →Left-to-Right (default for English, Hindi, etc.)


`<head></head>`

This section is the "head" of the page that contains the metadata
- `meta` tags (charset, viewport, description, etc.)
- `title`
- External css/js link
- Favicon info
- SEO info

Note: The content in the head is not directly visible to the user on the page (except title in browser tab)

`<meta charset="UTF-8">`
- Character encoding set karta hai
 - UTF-8 = Supports almost all languages & emojis
 - If you don't write this, some characters may appear wrong 

 `<meta name="viewport" content="width=device-width, initial-scale=1.0">
`

Mobile responsiveness ke liye important.

- `width=device-width` → Page ka width = device ka width
- `initial-scale=1.0` → Zoom 100% by default
- If you don't write this, the site may appear small or zoomed-out on mobile.

`<title>Document</title>`
- Sets the name of the browser tab
- Important in SEO — this is where the clickable blue title of search results comes from

`<body></body>`→ Ye section actual visible content rakhta hai jo user screen pe dekhega
- Text
- Images
- Buttons
- Forms
- Videos
- etc.