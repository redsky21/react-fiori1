import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
/**
 * This class represents the entity "Customer_and_Suppliers_by_Cities" of service "first".
 */
export declare class Customer_And_Suppliers_By_Cities<T extends DeSerializers = DefaultDeSerializers> extends Entity implements Customer_And_Suppliers_By_CitiesType<T> {
    /**
     * Technical entity name for Customer_And_Suppliers_By_Cities.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * All key fields of the Customer_And_Suppliers_By_Cities entity
     */
    static _keys: string[];
    /**
     * City.
     * Maximum length: 15.
     * @nullable
     */
    city?: DeserializedType<T, 'Edm.String'> | null;
    /**
     * Company Name.
     * Maximum length: 40.
     */
    companyName: DeserializedType<T, 'Edm.String'>;
    /**
     * Contact Name.
     * Maximum length: 30.
     * @nullable
     */
    contactName?: DeserializedType<T, 'Edm.String'> | null;
    /**
     * Relationship.
     * Maximum length: 9.
     */
    relationship: DeserializedType<T, 'Edm.String'>;
}
export interface Customer_And_Suppliers_By_CitiesType<T extends DeSerializers = DefaultDeSerializers> {
    city?: DeserializedType<T, 'Edm.String'> | null;
    companyName: DeserializedType<T, 'Edm.String'>;
    contactName?: DeserializedType<T, 'Edm.String'> | null;
    relationship: DeserializedType<T, 'Edm.String'>;
}
//# sourceMappingURL=Customer_And_Suppliers_By_Cities.d.ts.map