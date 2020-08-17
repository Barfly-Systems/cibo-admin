import { ProductCategory } from './product-category.model';

export interface UpsertProductCategoryViewModel
{
    ProductCategory: ProductCategory;
    EditMode: boolean;
}