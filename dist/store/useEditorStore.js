"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEditorStore = void 0;
const zustand_1 = require("zustand");
exports.useEditorStore = (0, zustand_1.create)((set) => ({
    currentSite: null,
    currentPage: null,
    blocks: [],
    selectedBlockId: null,
    unsavedChanges: false,
    setSite: (site) => set({ currentSite: site }),
    setPage: (page) => set({ currentPage: page }),
    setBlocks: (blocks) => set({ blocks, unsavedChanges: true }),
    selectBlock: (id) => set({ selectedBlockId: id }),
    addBlock: (block) => set((state) => ({
        blocks: [...state.blocks, block],
        selectedBlockId: block.id,
        unsavedChanges: true,
    })),
    updateBlockProps: (id, props) => set((state) => ({
        blocks: state.blocks.map((block) => block.id === id
            ? { ...block, props: { ...block.props, ...props } }
            : block),
        unsavedChanges: true,
    })),
    removeBlock: (id) => set((state) => ({
        blocks: state.blocks.filter((block) => block.id !== id),
        selectedBlockId: state.selectedBlockId === id ? null : state.selectedBlockId,
        unsavedChanges: true,
    })),
    reorderBlocks: (orderedIds) => set((state) => ({
        blocks: orderedIds
            .map((id, index) => ({
            ...state.blocks.find((block) => block.id === id),
            order: index,
        }))
            .filter(Boolean),
        unsavedChanges: true,
    })),
    applyPattern: (pattern) => set((state) => ({
        blocks: [
            ...state.blocks,
            {
                id: `${pattern.type}-${Date.now()}`,
                pageId: state.currentPage?.id || "",
                type: pattern.type,
                props: pattern.props,
                order: state.blocks.length,
            },
        ],
        unsavedChanges: true,
    })),
    savePage: (page, blocks) => set({ currentPage: page, blocks, unsavedChanges: false }),
}));
