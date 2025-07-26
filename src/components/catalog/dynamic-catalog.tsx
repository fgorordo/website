"use client";

import { FC, useEffect, useState } from 'react'
import { CardsContainer, ProductCard } from '../cards'
import { Crops, Product } from '@/data/models'
import { products, products as productsData } from '@/data/product.data';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import { ScrollArea } from '../ui/scroll-area';

const generatePageTitle = (query: ReadonlyURLSearchParams) => {
    const categorySearch = query.get('categoria');
    const subCategorySearch = query.get('subcategoria');
    const cropsSearch = query.get('cultivo');

    if (categorySearch) {
        return categorySearch;
    }

    if (subCategorySearch) {
        return subCategorySearch;
    }

    if (cropsSearch) {
        return cropsSearch;
    }

    return;
};

const getProductsAndSearch = (query: ReadonlyURLSearchParams) => {
    const categorySearch = query.get('categoria');
    const subCategorySearch = query.get('subcategoria');
    const cropsSearch = query.get('cultivo');

    if (categorySearch) {
        const filter = products.filter(p => p.category.toLowerCase() === categorySearch)

        return {
            data: filter,
            pageTitle: `Productos encontrados para: ${categorySearch.charAt(0).toUpperCase()}`
        }
    }

    if (subCategorySearch) {
        const filter = products.filter(p => {
            if (p.sub_category) {
                return p.sub_category.toLowerCase() === subCategorySearch
            } else {
                return
            }
        })

        return {
            data: filter,
            pageTitle: `Productos encontrados para: ${subCategorySearch.charAt(0).toUpperCase()}`
        }
    }

    if (cropsSearch) {
        const filter = products.filter(p => {
            if (p.crops) {
                return p.crops.includes(cropsSearch as Crops)
            } else {
                return
            }
        })

        return {
            data: filter,
            pageTitle: `Productos encontrados para: ${cropsSearch.charAt(0).toUpperCase()}`
        }
    }

    return {
        data: products,
        pageTitle: 'Todos los productos',
    }
}



export const DynamicCatalog: FC = () => {
    const clientQuery = useSearchParams();
    const [products, setProducts] = useState<Product[]>(productsData)

    const search = generatePageTitle(clientQuery);

    useEffect(() => {
        const data = getProductsAndSearch(clientQuery)
        setProducts(data.data)
    }, [clientQuery])

    return (
        <>
            <p className='text-2xl lg:text-3xl font-light z-20 mb-4'>{search ? `Productos encontrados para: ${search.charAt(0).toUpperCase() + search.slice(1)}` : 'Todos los productos'}</p>
            <ScrollArea className='h-[52vh] px-6'>
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
                                product_volume_state={p.product_volume_state}

                            />
                        ))
                    }
                </CardsContainer>
            </ScrollArea>
        </>
    )
}