import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
/**
 * This class represents the entity "Order_Subtotals" of service "first".
 */
export declare class Order_Subtotals<T extends DeSerializers = DefaultDeSerializers> extends Entity implements Order_SubtotalsType<T> {
    /**
     * Technical entity name for Order_Subtotals.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * All key fields of the Order_Subtotals entity
     */
    static _keys: string[];
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
export interface Order_SubtotalsType<T extends DeSerializers = DefaultDeSerializers> {
    orderId: DeserializedType<T, 'Edm.Int32'>;
    subtotal?: DeserializedType<T, 'Edm.Decimal'> | null;
}
//# sourceMappingURL=Order_Subtotals.d.ts.map