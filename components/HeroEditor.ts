
"use client";

import { useForm } from "react-hook-form";

import { useEditorStore } from "../store/useEditorStore";
import ColorPicker from "../utils/ColorPicker";

type HeroEditorProps = {
  blockId: string;
};

export default function HeroEditor({ blockId }: HeroEditorProps) {
  const block = useEditorStore((state: { blocks: any[]; }) => state.blocks.find((item) => item.id === blockId));
  const updateBlockProps = useEditorStore((state: { updateBlockProps: any; }) => state.updateBlockProps);
  const { register, handleSubmit } = useForm({ defaultValues: block?.props.content || {} });

  const onSubmit = (data: Record<string, any>) => {
    updateBlockProps(blockId, { content: { ...block?.props.content, ...data } });
  };

  if (!block) return <div>Block introuvable.</div>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <label className="block">
        <span className="text-sm font-semibold text-[#7c1d18]">Titre</span>
        <input {...register("title")} className="mt-2 w-full rounded-3xl border border-[#7c1d18]/10 bg-[#fff4e8] px-4 py-3 text-sm text-[#2c1a16] outline-none" />
      </label>
      <label className="block">
        <span className="text-sm font-semibold text-[#7c1d18]">Sous-titre</span>
        <textarea {...register("subtitle")} rows={3} className="mt-2 w-full rounded-3xl border border-[#7c1d18]/10 bg-[#fff4e8] px-4 py-3 text-sm text-[#2c1a16] outline-none" />
      </label>
      <ColorPicker
        color={block.props.styles?.bg || "#fff8f2"}
        onChange={(value) => updateBlockProps(blockId, { styles: { ...block.props.styles, bg: value } })}
      />
      <button type="submit" className="inline-flex rounded-full bg-[#7c1d18] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5d1210]">
        Enregistrer
      </button>
    </form>
  );
}
