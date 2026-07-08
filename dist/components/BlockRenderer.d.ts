type BlockRendererProps = {
    block: {
        id: string;
        type: string;
        props: Record<string, any>;
    };
};
export declare const BlockRenderer: ({ block }: BlockRendererProps) => import("react").JSX.Element;
export {};
