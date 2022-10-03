import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import { Products, ProductsType } from './Products';
/**
 * This class represents the entity "Categories" of service "first".
 */
export declare class Categories<T extends DeSerializers = DefaultDeSerializers> extends Entity implements CategoriesType<T> {
    /**
     * Technical entity name for Categories.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * All key fields of the Categories entity
     */
    static _keys: string[];
    /**
     * Category Id.
     */
    categoryId: DeserializedType<T, 'Edm.Int32'>;
    /**
     * Category Name.
     * Maximum length: 15.
     */
    categoryName: DeserializedType<T, 'Edm.String'>;
    /**
     * Description.
     * Maximum length: Max.
     * @nullable
     */
    description?: DeserializedType<T, 'Edm.String'> | null;
    /**
     * Picture.
     * Maximum length: Max.
     * @nullable
     */
    picture?: DeserializedType<T, 'Edm.Binary'> | null;
    /**
     * One-to-many navigation property to the {@link Products} entity.
     */
    products: Products<T>[];
}
export interface CategoriesType<T extends DeSerializers = DefaultDeSerializers> {
    categoryId: DeserializedType<T, 'Edm.Int32'>;
    categoryName: DeserializedType<T, 'Edm.String'>;
    description?: DeserializedType<T, 'Edm.String'> | null;
    picture?: DeserializedType<T, 'Edm.Binary'> | null;
    products: ProductsType<T>[];
}
//# sourceMappingURL=Categories.d.ts.map