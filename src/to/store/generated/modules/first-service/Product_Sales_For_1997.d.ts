import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
/**
 * This class represents the entity "Product_Sales_for_1997" of service "first".
 */
export declare class Product_Sales_For_1997<T extends DeSerializers = DefaultDeSerializers> extends Entity implements Product_Sales_For_1997Type<T> {
    /**
     * Technical entity name for Product_Sales_For_1997.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * All key fields of the Product_Sales_For_1997 entity
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
     * Product Sales.
     * @nullable
     */
    productSales?: DeserializedType<T, 'Edm.Decimal'> | null;
}
export interface Product_Sales_For_1997Type<T extends DeSerializers = DefaultDeSerializers> {
    categoryName: DeserializedType<T, 'Edm.String'>;
    productName: DeserializedType<T, 'Edm.String'>;
    productSales?: DeserializedType<T, 'Edm.Decimal'> | null;
}
//# sourceMappingURL=Product_Sales_For_1997.d.ts.map