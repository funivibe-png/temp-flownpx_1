
import { useEffect, useRef } from "react";
import { useEditorStore } from "../store/useEditorStore";

// Autosave after a pause in editing.
export function useAutosave(delay = 2500) {
  const unsavedChanges = useEditorStore((state) => state.unsavedChanges);
  const blocks = useEditorStore((state) => state.blocks);
  const currentPage = useEditorStore((state) => state.currentPage);
  const savePage = useEditorStore((state) => state.savePage);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);


  useEffect(() => {
    if (!unsavedChanges || !currentPage) return;

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
