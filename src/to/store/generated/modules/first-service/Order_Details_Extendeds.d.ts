import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
/**
 * This class represents the entity "Order_Details_Extendeds" of service "first".
 */
export declare class Order_Details_Extendeds<T extends DeSerializers = DefaultDeSerializers> extends Entity implements Order_Details_ExtendedsType<T> {
    /**
     * Technical entity name for Order_Details_Extendeds.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * All key fields of the Order_Details_Extendeds entity
     */
    static _keys: string[];
    /**
     * Order Id.
     */
    orderId: DeserializedType<T, 'Edm.Int32'>;
    /**
     * Product Id.
     */
    productId: DeserializedType<T, 'Edm.Int32'>;
    /**
     * Product Name.
     * Maximum length: 40.
     */
    productName: DeserializedType<T, 'Edm.String'>;
    /**
     * Unit Price.
     */
    unitPrice: DeserializedType<T, 'Edm.Decimal'>;
    /**
     * Quantity.
     */
    quantity: DeserializedType<T, 'Edm.Int16'>;
    /**
     * Discount.
     */
    discount: DeserializedType<T, 'Edm.Single'>;
    /**
     * Extended Price.
     * @nullable
     */
    extendedPrice?: DeserializedType<T, 'Edm.Decimal'> | null;
}
export interface Order_Details_ExtendedsType<T extends DeSerializers = DefaultDeSerializers> {
    orderId: DeserializedType<T, 'Edm.Int32'>;
    productId: DeserializedType<T, 'Edm.Int32'>;
    productName: DeserializedType<T, 'Edm.String'>;
    unitPrice: DeserializedType<T, 'Edm.Decimal'>;
    quantity: DeserializedType<T, 'Edm.Int16'>;
    discount: DeserializedType<T, 'Edm.Single'>;
    extendedPrice?: DeserializedType<T, 'Edm.Decimal'> | null;
}
//# sourceMappingURL=Order_Details_Extendeds.d.ts.map