"use client";

import { stylePropsToClasses, stylePropsToInline } from "../styleUtils";

type BlockRendererProps = {
  block: {
    id: string;
    type: string;
    props: Record<string, any>;
  };
};

export const BlockRenderer = ({ block }: BlockRendererProps) => {
  const classes = stylePropsToClasses(block.props.styles);
  const inlineStyles = stylePropsToInline(block.props.styles);

  switch (block.type) {
    case "hero":
      return (
        <section className={`rounded-[32px] border border-[#7c1d18]/10 p-10 shadow-soft ${classes}`} style={inlineStyles}>
          <h2 className="text-4xl font-black text-[#7c1d18]">{block.props.content?.title}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#4b0f0e]/80">{block.props.content?.subtitle}</p>
        </section>
      );
    case "menu":
      return (
        <section className={`grid gap-6 md:grid-cols-2 ${classes}`} style={inlineStyles}>
          {block.props.content?.items?.map((item: any) => (
            <article key={item.name} className="rounded-3xl border border-[#7c1d18]/10 bg-white/90 p-6">
              <h3 className="text-xl font-semibold text-[#7c1d18]">{item.name}</h3>
              <p className="mt-2 text-sm text-[#4b0f0e]/80">{item.description}</p>
              <p className="mt-4 font-semibold text-[#7c1d18]">{item.price}</p>
            </article>
          ))}
        </section>
      );
    case "contact":
      return (
        <section className={`rounded-[32px] border border-[#7c1d18]/10 p-8 ${classes}`} style={inlineStyles}>
          <h3 className="text-2xl font-bold text-[#7c1d18]">{block.props.content?.heading}</h3>
          <p className="mt-4 text-sm text-[#4b0f0e]/90">{block.props.content?.address}</p>
          <p className="mt-2 text-sm text-[#4b0f0e]/90">{block.props.content?.phone}</p>
        </section>
      );
    default:
      return (
        <section className={classes} style={inlineStyles}>
          <div className="rounded-3xl border border-[#7c1d18]/10 bg-white/90 p-6 text-[#4b0f0e]/90">
            <strong>Block inconnu :</strong> {block.type}
          </div>
        </section>
      );
  }
}
