"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ColorPicker;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_colorful_1 = require("react-colorful");
function ColorPicker({ color, onChange }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "rounded-3xl border border-[#7c1d18]/10 bg-white p-4 shadow-soft", children: [(0, jsx_runtime_1.jsx)(react_colorful_1.HexColorPicker, { color: color, onChange: onChange }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-4 text-sm text-[#4b0f0e]/80", children: ["Couleur actuelle : ", color] })] }));
}
