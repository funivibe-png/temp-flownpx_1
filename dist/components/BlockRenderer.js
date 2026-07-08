"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockRenderer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styleUtils_1 = require("../styleUtils");
const BlockRenderer = ({ block }) => {
    const classes = (0, styleUtils_1.stylePropsToClasses)(block.props.styles);
    const inlineStyles = (0, styleUtils_1.stylePropsToInline)(block.props.styles);
    switch (block.type) {
        case "hero":
            return ((0, jsx_runtime_1.jsxs)("section", { className: `rounded-[32px] border border-[#7c1d18]/10 p-10 shadow-soft ${classes}`, style: inlineStyles, children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-4xl font-black text-[#7c1d18]", children: block.props.content?.title }), (0, jsx_runtime_1.jsx)("p", { className: "mt-4 max-w-2xl text-lg leading-8 text-[#4b0f0e]/80", children: block.props.content?.subtitle })] }));
        case "menu":
            return ((0, jsx_runtime_1.jsx)("section", { className: `grid gap-6 md:grid-cols-2 ${classes}`, style: inlineStyles, children: block.props.content?.items?.map((item) => ((0, jsx_runtime_1.jsxs)("article", { className: "rounded-3xl border border-[#7c1d18]/10 bg-white/90 p-6", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-semibold text-[#7c1d18]", children: item.name }), (0, jsx_runtime_1.jsx)("p", { className: "mt-2 text-sm text-[#4b0f0e]/80", children: item.description }), (0, jsx_runtime_1.jsx)("p", { className: "mt-4 font-semibold text-[#7c1d18]", children: item.price })] }, item.name))) }));
        case "contact":
            return ((0, jsx_runtime_1.jsxs)("section", { className: `rounded-[32px] border border-[#7c1d18]/10 p-8 ${classes}`, style: inlineStyles, children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-2xl font-bold text-[#7c1d18]", children: block.props.content?.heading }), (0, jsx_runtime_1.jsx)("p", { className: "mt-4 text-sm text-[#4b0f0e]/90", children: block.props.content?.address }), (0, jsx_runtime_1.jsx)("p", { className: "mt-2 text-sm text-[#4b0f0e]/90", children: block.props.content?.phone })] }));
        default:
            return ((0, jsx_runtime_1.jsx)("section", { className: classes, style: inlineStyles, children: (0, jsx_runtime_1.jsxs)("div", { className: "rounded-3xl border border-[#7c1d18]/10 bg-white/90 p-6 text-[#4b0f0e]/90", children: [(0, jsx_runtime_1.jsx)("strong", { children: "Block inconnu :" }), " ", block.type] }) }));
    }
};
exports.BlockRenderer = BlockRenderer;
