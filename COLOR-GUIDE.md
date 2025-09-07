# 🎨 Easy Color Theme Changes

Your Dandelion Wiki now has a **fully centralized color system**! You can change the entire site's theme by editing just a few lines in one file.

## 📍 Where to Make Changes

**File:** `app/globals.css`  
**Lines:** ~10-36 (the `:root` section)

## 🎯 How to Change Colors

### 1. **Main Brand Color** (buttons, primary elements)
```css
--color-primary: #0d9488;        /* Change this hex code */
--color-primary-light: #14b8a6;  /* Lighter version */
--color-primary-dark: #0f766e;   /* Darker version */
```

### 2. **Accent Color** (special highlights, hovers)
```css
--color-accent-pink: #F5BABB;    /* Change this hex code */
```

### 3. **Link Colors**
```css
--color-link: #0d9488;           /* Links in light mode */
--color-link-dark: #2dd4bf;      /* Links in dark mode */
```

## 🚀 Quick Theme Examples

### Red Theme
```css
--color-primary: #dc2626;        /* red-600 */
--color-primary-light: #ef4444;  /* red-500 */
--color-primary-dark: #991b1b;   /* red-800 */
```

### Purple Theme
```css
--color-primary: #7c3aed;        /* purple-600 */
--color-primary-light: #8b5cf6;  /* purple-500 */
--color-primary-dark: #6d28d9;   /* purple-700 */
```

### Blue Theme
```css
--color-primary: #2563eb;        /* blue-600 */
--color-primary-light: #3b82f6;  /* blue-500 */
--color-primary-dark: #1d4ed8;   /* blue-700 */
```

## ✨ What Changes Automatically

When you update these colors, **everything** updates instantly:
- ✅ All navigation links
- ✅ All buttons
- ✅ All hover effects
- ✅ All icon backgrounds
- ✅ All focus states
- ✅ All accent elements
- ✅ Dark mode colors too!

## 💡 Pro Tip

Use a color picker tool to find hex codes for your desired colors, then paste them into the CSS variables. The entire site will update immediately!

**Total files that change automatically: 100+ components across your entire wiki!** 🚀
