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

#  Chapter 02
## HTML Basic Text & Structure Tags

### `<h>` → (actually `<h1>` to `<h6>`)

Purpose: Heading tags for defining headings in a document.
1. `<h1>`→ Highest (main) heading
2. `<h2>`→ Lowest (smallest) heading

Search engines use heading hierarchy for SEO, so use them meaningfully, not just for size.

### `<p>` 
- Purpose: Defines a paragraph of text
- Behavior: Automatically adds some space before and after the text

### `<hr>`
- Purpose: Creates a horizontal rule (line) to visually separate content.
- In HTML5, it’s considered a thematic break, not just a design element.

### `<br>`
- Purpose: Inserts a line break inside text (without starting a new paragraph)
- Use `<br>` only for text line breaks (like addresses or poems), not for layout

### `<strong>`
- Purpose: Semantically marks text as important (not just bold visually)
- Default Styling: Usually bold

### `<small>`
- Purpose: Indicates side comments or fine print — less important text
- Default Styling: Smaller font size.

#   Chapter 03
## HTML List Tags – ul, li, ol, dl, and dt Explained


### `<ul>` → Unordered List
- Purpose: Creates a bulleted list (no numbers, just bullets)
- Default Style: Bullet points (•) before each item
- Usage: Used when order does not matter

### `<li>` →  List Item
- Purpose: Represents a single item inside either `<ul>` (unordered list) or `<ol>` (ordered list).
- Usage: Cannot be used alone — must be inside `<ul>` or `<ol>`

### `<ol>` → Ordered List
- Purpose: Creates a numbered list (1, 2, 3 or a, b, c)
- Default Style: Numbers (1, 2, 3...) before each item
- Usage: Used when order matters

Purpose: Creates a numbered list (1, 2, 3 or a, b, c).

Default Style: Numbers (1, 2, 3...) before each item.

### You can also change numbering style
`<ol type="A">`

### `<dl>` – Definition List
- Purpose: Creates a list of terms and their definitions
- Structure: Uses `<dt>` for the term and `<dd>` for the definition.
- Usage: Similar to a dictionary layout.