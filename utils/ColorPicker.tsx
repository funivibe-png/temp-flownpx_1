"use client";

import { HexColorPicker } from "react-colorful";

type ColorPickerProps = {
  color: string;
  onChange: (value: string) => void;
};

export default function ColorPicker({ color, onChange }: ColorPickerProps) {
  return (
    <div className="rounded-3xl border border-[#7c1d18]/10 bg-white p-4 shadow-soft">
      <HexColorPicker color={color} onChange={onChange} />
      <div className="mt-4 text-sm text-[#4b0f0e]/80">Couleur actuelle : {color}</div>
    </div>
  );
}
