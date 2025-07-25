import { StaticImport } from "next/dist/shared/lib/get-img-props";

type ProductCategory = "Arrancador de cultivos" | "Corrección de suelos" | "Vivificante de semillas" | "Nutrición";

type ProductNutritionCategory = "Microelementos" | "Macroelementos" | "Balanceados" | undefined;

type ProductVolumeState = "Liquidos" | "Granulados"

type Crops = "Pasturas" | "Frutas" | "Yerba Mate" | "Cítricos" | "Cebada" | "Girasol" | "Trigo" | "Maíz" | "Algodón" | "Soja" ;

type Brand = "Mist" | "Biome";

export type Product = {
    id: string;
    pdf_url: string;
    slug: string;
    name: string;
    description_html: string;
    image_url: string;
    product_volume_state: ProductVolumeState;
    category: ProductCategory;
    sub_category: ProductNutritionCategory;
    crops: Crops[];
    brand: Brand;
};