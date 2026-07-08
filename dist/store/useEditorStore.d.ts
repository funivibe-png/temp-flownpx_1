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
    applyPattern: (pattern: {
        type: string;
        props: Record<string, any>;
    }) => void;
    savePage: (page: any, blocks: Block[]) => void;
};
export declare const useEditorStore: import("zustand").UseBoundStore<import("zustand").StoreApi<EditorState>>;
export {};
