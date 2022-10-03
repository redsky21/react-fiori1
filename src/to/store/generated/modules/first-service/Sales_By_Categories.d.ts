import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
/**
 * This class represents the entity "Sales_by_Categories" of service "first".
 */
export declare class Sales_By_Categories<T extends DeSerializers = DefaultDeSerializers> extends Entity implements Sales_By_CategoriesType<T> {
    /**
     * Technical entity name for Sales_By_Categories.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * All key fields of the Sales_By_Categories entity
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
     * Product Name.
     * Maximum length: 40.
     */
    productName: DeserializedType<T, 'Edm.String'>;
    /**
     * Product Sales.
     * @nullable
     */
    productSales?: DeserializedType<T, 'Edm.Decimal'> | null;
}
export interface Sales_By_CategoriesType<T extends DeSerializers = DefaultDeSerializers> {
    categoryId: DeserializedType<T, 'Edm.Int32'>;
    categoryName: DeserializedType<T, 'Edm.String'>;
    productName: DeserializedType<T, 'Edm.String'>;
    productSales?: DeserializedType<T, 'Edm.Decimal'> | null;
}
//# sourceMappingURL=Sales_By_Categories.d.ts.map