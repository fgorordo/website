import { StaticImport } from "next/dist/shared/lib/get-img-props";

type ProductCategory = "Arrancador de cultivos" | "Corrección de suelos" | "Vivificante de semillas" | "Nutrición";

type ProductNutritionCategory = "Microelementos" | "Macroelementos" | "Balanceados" | undefined;

type ProductVolumeState = "Liquidos" | "Granulados"

export type Crops = "Pasturas" | "Frutales" | "Yerba Mate" | "Cítricos" | "Cebada" | "Girasol" | "Trigo" | "Maíz" | "Algodón" | "Soja";

type Brand = "Mist" | "Biome";

type HtmlContent = {
    descripction?: string;
    effects?: {
        list?: string[];
        common?: string,
    };
    content?: {
        list?: string[];
    };
    properties?: {
        list?: string[];
    };
    storage?: {
        list?: string[];
    };
    volume?: {
        list?: string[];
    };
    packaging?: string;
    application_dosage?: {
        extensive_industrial_fruits?: {
            title?: string;
            type?: string;
            dose?: string;
        },
        intensive?: {
            title?: string;
            type?: string;
            dose?: string;
        },
        others?: string[];
        image_url?: string;
    };
    reccommendations?: {
        text?: string;
        pulverization?: string;
        fertiriego?: string;
        aereo?: string;
    };
    cautions_and_warnings?: {
        text?: string;
    };
}

export type Product = {
    id: string;
    pdf_url: string;
    slug: string;
    name: string;
    description_html: string;
    html_content: HtmlContent;
    image_url: string;
    product_volume_state: ProductVolumeState;
    category: ProductCategory;
    sub_category: ProductNutritionCategory;
    crops: Crops[];
    brand: Brand;
};