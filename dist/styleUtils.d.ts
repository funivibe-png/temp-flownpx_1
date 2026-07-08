export type BlockStyles = {
    color?: string;
    bg?: string;
    padding?: string;
    margin?: string;
    rounded?: string;
    textAlign?: string;
    fontSize?: string;
    border?: string;
};
export declare function stylePropsToClasses(styles?: BlockStyles): string;
export declare function stylePropsToInline(styles?: BlockStyles): Record<string, string>;
export declare function inlineStyleString(styles?: BlockStyles): string;
