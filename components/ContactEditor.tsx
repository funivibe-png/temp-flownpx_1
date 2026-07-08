"use client";

import { useForm } from "react-hook-form";
import { useEditorStore } from "../store/useEditorStore";

type ContactEditorProps = {
  blockId: string;
};

export default function ContactEditor({ blockId }: ContactEditorProps) {
  const block = useEditorStore((state) =>
    state.blocks.find((item) => item.id === blockId)
  );
  const updateBlockProps = useEditorStore((state) => state.updateBlockProps);

  const { register, handleSubmit } = useForm({
    defaultValues: block?.props.content || {}
  });

  const onSubmit = (data: Record<string, any>) => {
    updateBlockProps(blockId, {
      content: { ...block?.props.content, ...data }
    });
  };

  if (!block) return <div>Block introuvable.</div>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <label className="block">
        <span className="text-sm font-semibold text-[#7c1d18]">Adresse</span>
        <input {...register("address")} className="mt-2 w-full rounded-3xl border px-4 py-3" />
      </label>
      <label className="block">
        <span className="text-sm font-semibold text-[#7c1d18]">Téléphone</span>
        <input {...register("phone")} className="mt-2 w-full rounded-3xl border px-4 py-3" />
      </label>
      <label className="block">
        <span className="text-sm font-semibold text-[#7c1d18]">Email</span>
        <input {...register("email")} className="mt-2 w-full rounded-3xl border px-4 py-3" />
      </label>
      <button type="submit" className="inline-flex rounded-full bg-[#7c1d18] px-6 py-3 text-sm font-semibold text-white">
        Enregistrer
      </button>
    </form>
  );
}
