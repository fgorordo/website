import { Product } from "@/data/models"
import { CardsContainer, ProductCard } from "../cards"
import { PageContainer, PageSubtitle, PageTitle } from "../common"
import { products } from "@/data/product.data"

export const FeaturedProducts = () => {
    const featuredProductsIds = ["mst-n", "mst-zn", "mst-tps", "mst-tps-78"]

    const productsToRender: Product[] = products.filter(p => featuredProductsIds.includes(p.id))

    

    return (
        <PageContainer>
            <PageTitle>Productos destacados</PageTitle>
            <PageSubtitle>Nanotecnología al servicio de una agricultura más limpia, eficiente y regenerativa.</PageSubtitle>
            <CardsContainer>
                {
                    productsToRender.map(p => (
                        <ProductCard 
                            key={p.id}
                            name={p.name}
                            image_url={p.image_url}
                            category={p.category}
                            sub_category={p.sub_category}
                            slug={p.slug}
                            product_volume_state={p.product_volume_state}
                        />
                    ))
                }
            </CardsContainer>
        </PageContainer>
    )
}