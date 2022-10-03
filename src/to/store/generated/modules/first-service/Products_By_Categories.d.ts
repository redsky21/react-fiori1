import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
/**
 * This class represents the entity "Products_by_Categories" of service "first".
 */
export declare class Products_By_Categories<T extends DeSerializers = DefaultDeSerializers> extends Entity implements Products_By_CategoriesType<T> {
    /**
     * Technical entity name for Products_By_Categories.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * All key fields of the Products_By_Categories entity
     */
    static _keys: string[];
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
     * Quantity Per Unit.
     * Maximum length: 20.
     * @nullable
     */
    quantityPerUnit?: DeserializedType<T, 'Edm.String'> | null;
    /**
     * Units In Stock.
     * @nullable
     */
    unitsInStock?: DeserializedType<T, 'Edm.Int16'> | null;
    /**
     * Discontinued.
     */
    discontinued: DeserializedType<T, 'Edm.Boolean'>;
}
export interface Products_By_CategoriesType<T extends DeSerializers = DefaultDeSerializers> {
    categoryName: DeserializedType<T, 'Edm.String'>;
    productName: DeserializedType<T, 'Edm.String'>;
    quantityPerUnit?: DeserializedType<T, 'Edm.String'> | null;
    unitsInStock?: DeserializedType<T, 'Edm.Int16'> | null;
    discontinued: DeserializedType<T, 'Edm.Boolean'>;
}
//# sourceMappingURL=Products_By_Categories.d.ts.map