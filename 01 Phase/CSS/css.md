 # 01 Flexbox Basics

Pehle samjho ki Flexbox use hota hai layout control ke liye, especially items ko align & distribute karne ke liye.

`.container {
  display: flex; /* Flexbox activate */
}`

 ## Properties (Container level)

- `flex-direction` → items row/column me honge

- `flex-wrap` → items ek line me fit na ho to wrap karna ya nahi

- `justify-content` → items ko horizontally align karo

- `align-items` → items ko vertically align karo

- `align-content` → multiple rows/columns ko align karo

## 2. Flexbox Item Properties

Container ke andar ke items ko individually control kar sakte ho.

- `order` → kisi item ko aage/peeche lana

- `flex-grow` → item ko extra jagah lene dena

- `flex-shrink` → item ko squeeze hone dena

- `flex-basis` → item ka initial size set karna

- `align-self` → ek particular item ka vertical alignment alag karna