# 🎨 Demo: Easy Color Scheme Changes

Your Dandelion Wiki now has a centralized color system! Here's how easy it is to change the entire site's appearance:

## Quick Demo: Change to Purple Theme

To demonstrate the power of the new system, here's how to change from teal to a purple theme in just a few lines:

### 1. Open `app/globals.css`

### 2. Change these values in the `:root` section:

```css
:root {
  /* Change from teal to purple */
  --color-primary: #7c3aed;        /* purple-600 */
  --color-primary-light: #8b5cf6;  /* purple-500 */
  --color-primary-dark: #6d28d9;   /* purple-700 */
  
  /* Optional: Change accent color too */
  --color-accent-pink: #c084fc;    /* purple-400 for complementary look */
  
  /* Links will automatically update */
  --color-link: #7c3aed;           /* purple-600 */
  --color-link-hover: #8b5cf6;     /* purple-500 */
  --color-link-dark: #a78bfa;      /* purple-400 */
  --color-link-dark-hover: #c4b5fd; /* purple-300 */
}
```

### 3. Save and see the magic! ✨

The entire site will now use purple instead of teal:
- All links
- All buttons
- All hover effects
- All accent elements
- All brand elements

## Other Theme Examples

### Ocean Blue Theme
```css
--color-primary: #0ea5e9;        /* sky-500 */
--color-primary-light: #38bdf8;  /* sky-400 */
--color-primary-dark: #0284c7;   /* sky-600 */
```

### Forest Green Theme
```css
--color-primary: #059669;        /* emerald-600 */
--color-primary-light: #10b981;  /* emerald-500 */
--color-primary-dark: #047857;   /* emerald-700 */
```

### Sunset Orange Theme
```css
--color-primary: #ea580c;        /* orange-600 */
--color-primary-light: #f97316;  /* orange-500 */
--color-primary-dark: #c2410c;   /* orange-700 */
```

## What Changed Under the Hood

✅ **Before**: Colors scattered across 100+ files  
✅ **After**: All colors centralized in one place  

✅ **Before**: Manual find/replace needed for theme changes  
✅ **After**: Change 3 CSS variables, update entire site  

✅ **Before**: Risk of missing colors during updates  
✅ **After**: Guaranteed consistency across all components  

## Benefits

1. **Easy Theming**: Change colors site-wide in seconds
2. **Consistency**: All components use the same color variables
3. **Maintainability**: Single source of truth for colors
4. **Flexibility**: Easy to create seasonal themes or user preferences
5. **Future-Proof**: Adding new components automatically inherits the color scheme

Enjoy your new centralized color system! 🚀
