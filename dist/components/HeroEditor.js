"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HeroEditor;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_hook_form_1 = require("react-hook-form");
const useEditorStore_1 = require("../store/useEditorStore");
const ColorPicker_1 = __importDefault(require("../utils/ColorPicker"));
function HeroEditor({ blockId }) {
    const block = (0, useEditorStore_1.useEditorStore)((state) => state.blocks.find((item) => item.id === blockId));
    const updateBlockProps = (0, useEditorStore_1.useEditorStore)((state) => state.updateBlockProps);
    const { register, handleSubmit } = (0, react_hook_form_1.useForm)({ defaultValues: block?.props.content || {} });
    const onSubmit = (data) => {
        updateBlockProps(blockId, { content: { ...block?.props.content, ...data } });
    };
    if (!block)
        return (0, jsx_runtime_1.jsx)("div", { children: "Block introuvable." });
    return ((0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4", children: [(0, jsx_runtime_1.jsxs)("label", { className: "block", children: [(0, jsx_runtime_1.jsx)("span", { className: "text-sm font-semibold text-[#7c1d18]", children: "Titre" }), (0, jsx_runtime_1.jsx)("input", { ...register("title"), className: "mt-2 w-full rounded-3xl border border-[#7c1d18]/10 bg-[#fff4e8] px-4 py-3 text-sm text-[#2c1a16] outline-none" })] }), (0, jsx_runtime_1.jsxs)("label", { className: "block", children: [(0, jsx_runtime_1.jsx)("span", { className: "text-sm font-semibold text-[#7c1d18]", children: "Sous-titre" }), (0, jsx_runtime_1.jsx)("textarea", { ...register("subtitle"), rows: 3, className: "mt-2 w-full rounded-3xl border border-[#7c1d18]/10 bg-[#fff4e8] px-4 py-3 text-sm text-[#2c1a16] outline-none" })] }), (0, jsx_runtime_1.jsx)(ColorPicker_1.default, { color: block.props.styles?.bg || "#fff8f2", onChange: (value) => updateBlockProps(blockId, { styles: { ...block.props.styles, bg: value } }) }), (0, jsx_runtime_1.jsx)("button", { type: "submit", className: "inline-flex rounded-full bg-[#7c1d18] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5d1210]", children: "Enregistrer" })] }));
}
