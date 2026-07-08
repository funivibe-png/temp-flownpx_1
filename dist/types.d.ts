export type HeroBlock = {
    id: string;
    order: number;
    type: "hero";
    props: {
        content: {
            title: string;
            subtitle?: string;
        };
        styles?: {
            bg?: string;
        };
    };
};
export type ContactBlock = {
    id: string;
    order: number;
    type: "contact";
    props: {
        content: {
            phone: string;
            email?: string;
        };
        styles?: {
            bg?: string;
        };
    };
};
