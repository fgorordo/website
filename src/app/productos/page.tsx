import { CardsContainer, ProductCard } from "@/components/cards";
import { PageContainer, PageTitle } from "@/components/common";
import { products } from "@/data/product.data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos" 
}

export default async function Page() {
    return (
        <PageContainer>
            <PageTitle>Catálogo de Productos</PageTitle>
            <CardsContainer>
                {
                    products.map(p => (
                        <ProductCard 
                            slug={p.slug}
                            category={p.category}
                            image_url={p.image_url}
                            name={p.name}
                            sub_category={p.sub_category}
                            key={p.id}

                        />
                    ))
                }
            </CardsContainer>
        </PageContainer>
    )
}