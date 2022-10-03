import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
/**
 * This class represents the entity "Summary_of_Sales_by_Quarters" of service "first".
 */
export declare class Summary_Of_Sales_By_Quarters<T extends DeSerializers = DefaultDeSerializers> extends Entity implements Summary_Of_Sales_By_QuartersType<T> {
    /**
     * Technical entity name for Summary_Of_Sales_By_Quarters.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * All key fields of the Summary_Of_Sales_By_Quarters entity
     */
    static _keys: string[];
    /**
     * Shipped Date.
     * @nullable
     */
    shippedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    /**
     * Order Id.
     */
    orderId: DeserializedType<T, 'Edm.Int32'>;
    /**
     * Subtotal.
     * @nullable
     */
    subtotal?: DeserializedType<T, 'Edm.Decimal'> | null;
}
export interface Summary_Of_Sales_By_QuartersType<T extends DeSerializers = DefaultDeSerializers> {
    shippedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    orderId: DeserializedType<T, 'Edm.Int32'>;
    subtotal?: DeserializedType<T, 'Edm.Decimal'> | null;
}
//# sourceMappingURL=Summary_Of_Sales_By_Quarters.d.ts.map