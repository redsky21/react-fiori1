import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import { Orders, OrdersType } from './Orders';
import { Products, ProductsType } from './Products';
/**
 * This class represents the entity "Order_Details" of service "first".
 */
export declare class Order_Details<T extends DeSerializers = DefaultDeSerializers> extends Entity implements Order_DetailsType<T> {
    /**
     * Technical entity name for Order_Details.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * All key fields of the Order_Details entity
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
     * One-to-one navigation property to the {@link Orders} entity.
     */
    order?: Orders<T> | null;
    /**
     * One-to-one navigation property to the {@link Products} entity.
     */
    product?: Products<T> | null;
}
export interface Order_DetailsType<T extends DeSerializers = DefaultDeSerializers> {
    orderId: DeserializedType<T, 'Edm.Int32'>;
    productId: DeserializedType<T, 'Edm.Int32'>;
    unitPrice: DeserializedType<T, 'Edm.Decimal'>;
    quantity: DeserializedType<T, 'Edm.Int16'>;
    discount: DeserializedType<T, 'Edm.Single'>;
    order?: OrdersType<T> | null;
    product?: ProductsType<T> | null;
}
//# sourceMappingURL=Order_Details.d.ts.map