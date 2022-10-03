import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
/**
 * This class represents the entity "Products_Above_Average_Prices" of service "first".
 */
export declare class Products_Above_Average_Prices<T extends DeSerializers = DefaultDeSerializers> extends Entity implements Products_Above_Average_PricesType<T> {
    /**
     * Technical entity name for Products_Above_Average_Prices.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * All key fields of the Products_Above_Average_Prices entity
     */
    static _keys: string[];
    /**
     * Product Name.
     * Maximum length: 40.
     */
    productName: DeserializedType<T, 'Edm.String'>;
    /**
     * Unit Price.
     * @nullable
     */
    unitPrice?: DeserializedType<T, 'Edm.Decimal'> | null;
}
export interface Products_Above_Average_PricesType<T extends DeSerializers = DefaultDeSerializers> {
    productName: DeserializedType<T, 'Edm.String'>;
    unitPrice?: DeserializedType<T, 'Edm.Decimal'> | null;
}
//# sourceMappingURL=Products_Above_Average_Prices.d.ts.map