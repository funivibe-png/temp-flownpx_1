"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stylePropsToClasses = stylePropsToClasses;
exports.stylePropsToInline = stylePropsToInline;
exports.inlineStyleString = inlineStyleString;
// Convert a style JSON object to Tailwind class names or inline styles.
function stylePropsToClasses(styles = {}) {
    const classes = [];
    if (styles.color && !styles.color.startsWith("#")) {
        classes.push(`text-${styles.color}`);
    }
    if (styles.bg && !styles.bg.startsWith("#")) {
        classes.push(`bg-${styles.bg}`);
    }
    if (styles.padding) {
        classes.push(`p-${styles.padding}`);
    }
    if (styles.margin) {
        classes.push(`m-${styles.margin}`);
    }
    if (styles.rounded) {
        classes.push(`rounded-${styles.rounded}`);
    }
    if (styles.textAlign) {
        classes.push(`text-${styles.textAlign}`);
    }
    if (styles.fontSize) {
        classes.push(`text-${styles.fontSize}`);
    }
    if (styles.border) {
        classes.push(`border`, styles.border === "none" ? "border-none" : styles.border);
    }
    return classes.filter(Boolean).join(" ");
}
// Generate inline CSS for hexadecimal colors or unsupported Tailwind values.
function stylePropsToInline(styles = {}) {
    const inlineStyles = {};
    if (styles.color && styles.color.startsWith("#")) {
        inlineStyles.color = styles.color;
    }
    if (styles.bg && styles.bg.startsWith("#")) {
        inlineStyles.backgroundColor = styles.bg;
    }
    if (styles.padding && !/^\d+$/.test(styles.padding)) {
        inlineStyles.padding = styles.padding;
    }
    if (styles.margin && !/^\d+$/.test(styles.margin)) {
        inlineStyles.margin = styles.margin;
    }
    return inlineStyles;
}
// Build a minimal HTML style string for export.
function inlineStyleString(styles = {}) {
    const inlineStyles = stylePropsToInline(styles);
    return Object.entries(inlineStyles)
        .map(([key, value]) => `${key}: ${value};`)
        .join(" ");
}
