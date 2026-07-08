"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAutosave = useAutosave;
const react_1 = require("react");
const useEditorStore_1 = require("../store/useEditorStore");
// Autosave after a pause in editing.
function useAutosave(delay = 2500) {
    const unsavedChanges = (0, useEditorStore_1.useEditorStore)((state) => state.unsavedChanges);
    const blocks = (0, useEditorStore_1.useEditorStore)((state) => state.blocks);
    const currentPage = (0, useEditorStore_1.useEditorStore)((state) => state.currentPage);
    const savePage = (0, useEditorStore_1.useEditorStore)((state) => state.savePage);
    const timer = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (!unsavedChanges || !currentPage)
            return;
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(async () => {
            await savePage(currentPage, blocks);
        }, delay);
        return () => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
        };
    }, [blocks, currentPage, delay, savePage, unsavedChanges]);
}
