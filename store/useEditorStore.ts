import { create } from "zustand";

export type BlockItem = {
  id: string;
  pageId: string;
  type: string;
  props: Record<string, any>;
  order: number;
};

type Block = {
  id: string;
  pageId: string;
  type: string;
  props: Record<string, any>;
  order: number;
};

export type PageItem = {
  id: string;
  siteId: string;
  slug: string;
  title: string;
  content: Record<string, any>;
  seo: Record<string, any>;
};

export type SiteItem = {
  id: string;
  name: string;
  domain: string;
  settings: Record<string, any>;
};

type EditorState = {
  currentSite: any | null;
  currentPage: any | null;
  blocks: Block[];
  selectedBlockId: string | null;
  unsavedChanges: boolean;
  setSite: (site: any) => void;
  setPage: (page: any) => void;
  setBlocks: (blocks: Block[]) => void;
  selectBlock: (id: string) => void;
  addBlock: (block: Block) => void;
  updateBlockProps: (id: string, props: Record<string, any>) => void;
  removeBlock: (id: string) => void;
  reorderBlocks: (orderedIds: string[]) => void;
  applyPattern: (pattern: { type: string; props: Record<string, any> }) => void;
  savePage: (page: any, blocks: Block[]) => void;
};


export const useEditorStore = create<EditorState>((set) => ({
  currentSite: null,
  currentPage: null,
  blocks: [],
  selectedBlockId: null,
  unsavedChanges: false,
  setSite: (site) => set({ currentSite: site }),
  setPage: (page) => set({ currentPage: page }),
  setBlocks: (blocks) => set({ blocks, unsavedChanges: true }),
  selectBlock: (id) => set({ selectedBlockId: id }),
  addBlock: (block) =>
    set((state) => ({
      blocks: [...state.blocks, block],
      selectedBlockId: block.id,
      unsavedChanges: true,
    })),
  updateBlockProps: (id, props) =>
    set((state) => ({
      blocks: state.blocks.map((block) =>
        block.id === id
          ? { ...block, props: { ...block.props, ...props } }
          : block
      ),
      unsavedChanges: true,
    })),
  removeBlock: (id) =>
    set((state) => ({
      blocks: state.blocks.filter((block) => block.id !== id),
      selectedBlockId: state.selectedBlockId === id ? null : state.selectedBlockId,
      unsavedChanges: true,
    })),
  reorderBlocks: (orderedIds) =>
    set((state) => ({
      blocks: orderedIds
        .map((id, index) => ({
          ...state.blocks.find((block) => block.id === id)!,
          order: index,
        }))
        .filter(Boolean),
      unsavedChanges: true,
    })),
  applyPattern: (pattern) =>
    set((state) => ({
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
