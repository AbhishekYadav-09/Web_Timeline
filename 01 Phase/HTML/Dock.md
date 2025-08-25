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

#   Chapter 04
## `<a>` Understanding the  Attribute in HTML Anchor Tags

```
<a href="https://example.com/report.pdf"
   target="_blank"
   rel="noopener noreferrer"
   download="AnnualReport.pdf"
   hreflang="en"
   type="application/pdf"
   referrerpolicy="no-referrer">
   Download Report
</a>
```

- `href` → Destination URL (HTTP, mailto, tel, file, fragment, etc.)
- `target` Where to open the link
-  Relationship between current and linked document (nofollow, noopener)
- `download`
Forces download instead of navigation (same-origin only)
- `type`
MIME type of the linked resource
- `hreflang`
Language of the linked document
- `ping`
Space-separated list of URLs for tracking pings when the link is clicked
- `referrerpolicy`
Controls how much referrer info is sent

### You can use different protocols in href
```
<a href="mailto:someone@example.com">Email us</a>
<a href="tel:+1234567890">Call now</a>
<a href="sms:+1234567890">Send SMS</a>
<a href="javascript:alert('Hi!')">Run JS</a>
<a href="#section2">Go to Section 2</a>
 ```

# Chapter 05
## Understanding the HTML `<img>` Tag and Its Attributes

```
<img 
src="cat.jpg" 
alt="A cute cat" 
width="300" 
height="200" 
loading="lazy" 
title="This is a cat">
 ```

- `src`	Specifies the path (URL) to the image file.
- `alt`	Provides alternative text if the image cannot be displayed (important for accessibility & SEO).
- `width`	Sets the width of the image (in pixels or %).
- `height`	Sets the height of the image (in pixels or %).
- `loading`	Controls loading behavior (lazy, eager).
- `title`	Adds a tooltip when you hover over the image.
- `srcset`	Allows different image sizes for different devices (responsive images).

# Chapter 06
## HTML Table Structure and Elements Explained

```
<!DOCTYPE html>
<html>
<head>
    <title>Student Marks Table</title>
</head>
<body>

<table border="1">
    <caption>Student Marks Report</caption>
    
    <thead>
        <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Math</th>
            <th>Science</th>
            <th>English</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>101</td>
            <td>Abhishek</td>
            <td>95</td>
            <td>89</td>
            <td>93</td>
        </tr>
        <tr>
            <td>102</td>
            <td>Priya</td>
            <td>85</td>
            <td>92</td>
            <td>88</td>
        </tr>
        <tr>
            <td>103</td>
            <td>Rahul</td>
            <td>78</td>
            <td>85</td>
            <td>80</td>
        </tr>
    </tbody>

</table>

</body>
</html>

```
- `<table>`	Table	Yeh pura table banane ka container hota hai.
- `<caption>`	Caption	Table ka title/heading show karta hai (by default top me).
- `<tr>`	Table Row	Ek horizontal row banata hai table me.
- `<th>`	Table Header	Row ke header cells ke liye hota hai (bold & centered by default).
- `<td>`	Table Data	Normal data cell ke liye hota hai.
- `<thead>`	Table Head	Header section ko group karta hai (mostly `<th>` ke sath).
- `<tbody>`	Table Body	Table ka main data section.

#  Chapter 08
## HTML Form Elements and Their Usage

`<fieldset>`
 Form ke elements ko ek box ke andar group karne ke liye use hota hai.

`<legend>`
 Fieldset ka title hota hai (jo box ke top pe dikhata hai).

`<label>`
Input field ke liye description deta hai (like "Enter email").
for="id" use karne se, agar label pe click karein to input active ho jata hai.

`<input>` Types

- type="text" → Normal text field.

- type="password" → Password hide karke input leta hai.

- type="checkbox" → Multiple select option ke liye.

- type="radio" → Sirf ek select option ke liye (same group name dena padta hai).

- type="date" → Date picker open karta hai.

`<select> and <option>`
Dropdown banane ke liye use hota hai.

`<textarea>`
Bada text input dene ke liye (multi-line).

`<button>`

- type="submit" → Form ko submit karta hai.

- type="button" → Bas ek button hota hai, kaam manually JS se karte hain.


#   Chapter 09
## Semantic HTML vs Non-Semantic HTML

`<header>` → website ya section ka heading area.

`<nav>` → navigation links ke liye.

`<main>` → page ka main content.

`<section>` → content ka ek logical section (topics, chapters, etc).

`<article>` → independent content (blog, news, etc).

`<aside>` → sidebar ya extra info.

`<footer>` → footer ke liye.

 Ye SEO-friendly hote hain aur screen readers (accessibility tools) ko help karte hain.



#  Chapter 09
## Multimedia in HTML – video, audio, and iframe embedding


### `<video>` Tag

Used to embed videos directly in a webpage.

- Attributes:

- `src` → video file path (local/video.mp4 or URL).

- `poster` → image shown before video starts.

- `width / height` → size of video.

- `controls` → shows play/pause/volume bar.

- `muted, autoplay, loop` → control playback behavior.

### `<iframe>` Tag

Embeds another web page or external content (like YouTube videos) inside your webpage.

- Attributes:

- `src` → link of the video/page.

- `width / height` → size.

- `frameborder` → border thickness (0 = no border).

- `title` → accessibility label.