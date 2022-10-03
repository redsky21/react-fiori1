import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
/**
 * This class represents the entity "Sales_Totals_by_Amounts" of service "first".
 */
export declare class Sales_Totals_By_Amounts<T extends DeSerializers = DefaultDeSerializers> extends Entity implements Sales_Totals_By_AmountsType<T> {
    /**
     * Technical entity name for Sales_Totals_By_Amounts.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * All key fields of the Sales_Totals_By_Amounts entity
     */
    static _keys: string[];
    /**
     * Sale Amount.
     * @nullable
     */
    saleAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
    /**
     * Order Id.
     */
    orderId: DeserializedType<T, 'Edm.Int32'>;
    /**
     * Company Name.
     * Maximum length: 40.
     */
    companyName: DeserializedType<T, 'Edm.String'>;
    /**
     * Shipped Date.
     * @nullable
     */
    shippedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
}
export interface Sales_Totals_By_AmountsType<T extends DeSerializers = DefaultDeSerializers> {
    saleAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
    orderId: DeserializedType<T, 'Edm.Int32'>;
    companyName: DeserializedType<T, 'Edm.String'>;
    shippedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
}
//# sourceMappingURL=Sales_Totals_By_Amounts.d.ts.map