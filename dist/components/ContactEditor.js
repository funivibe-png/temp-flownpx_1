"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ContactEditor;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_hook_form_1 = require("react-hook-form");
const useEditorStore_1 = require("../store/useEditorStore");
function ContactEditor({ blockId }) {
    const block = (0, useEditorStore_1.useEditorStore)((state) => state.blocks.find((item) => item.id === blockId));
    const updateBlockProps = (0, useEditorStore_1.useEditorStore)((state) => state.updateBlockProps);
    const { register, handleSubmit } = (0, react_hook_form_1.useForm)({
        defaultValues: block?.props.content || {}
    });
    const onSubmit = (data) => {
        updateBlockProps(blockId, {
            content: { ...block?.props.content, ...data }
        });
    };
    if (!block)
        return (0, jsx_runtime_1.jsx)("div", { children: "Block introuvable." });
    return ((0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4", children: [(0, jsx_runtime_1.jsxs)("label", { className: "block", children: [(0, jsx_runtime_1.jsx)("span", { className: "text-sm font-semibold text-[#7c1d18]", children: "Adresse" }), (0, jsx_runtime_1.jsx)("input", { ...register("address"), className: "mt-2 w-full rounded-3xl border px-4 py-3" })] }), (0, jsx_runtime_1.jsxs)("label", { className: "block", children: [(0, jsx_runtime_1.jsx)("span", { className: "text-sm font-semibold text-[#7c1d18]", children: "T\u00E9l\u00E9phone" }), (0, jsx_runtime_1.jsx)("input", { ...register("phone"), className: "mt-2 w-full rounded-3xl border px-4 py-3" })] }), (0, jsx_runtime_1.jsxs)("label", { className: "block", children: [(0, jsx_runtime_1.jsx)("span", { className: "text-sm font-semibold text-[#7c1d18]", children: "Email" }), (0, jsx_runtime_1.jsx)("input", { ...register("email"), className: "mt-2 w-full rounded-3xl border px-4 py-3" })] }), (0, jsx_runtime_1.jsx)("button", { type: "submit", className: "inline-flex rounded-full bg-[#7c1d18] px-6 py-3 text-sm font-semibold text-white", children: "Enregistrer" })] }));
}
