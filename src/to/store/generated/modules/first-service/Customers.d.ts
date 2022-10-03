import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import { Orders, OrdersType } from './Orders';
import { CustomerDemographics, CustomerDemographicsType } from './CustomerDemographics';
/**
 * This class represents the entity "Customers" of service "first".
 */
export declare class Customers<T extends DeSerializers = DefaultDeSerializers> extends Entity implements CustomersType<T> {
    /**
     * Technical entity name for Customers.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * All key fields of the Customers entity
     */
    static _keys: string[];
    /**
     * Customer Id.
     * Maximum length: 5.
     */
    customerId: DeserializedType<T, 'Edm.String'>;
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
     * Contact Title.
     * Maximum length: 30.
     * @nullable
     */
    contactTitle?: DeserializedType<T, 'Edm.String'> | null;
    /**
     * Address.
     * Maximum length: 60.
     * @nullable
     */
    address?: DeserializedType<T, 'Edm.String'> | null;
    /**
     * City.
     * Maximum length: 15.
     * @nullable
     */
    city?: DeserializedType<T, 'Edm.String'> | null;
    /**
     * Region.
     * Maximum length: 15.
     * @nullable
     */
    region?: DeserializedType<T, 'Edm.String'> | null;
    /**
     * Postal Code.
     * Maximum length: 10.
     * @nullable
     */
    postalCode?: DeserializedType<T, 'Edm.String'> | null;
    /**
     * Country.
     * Maximum length: 15.
     * @nullable
     */
    country?: DeserializedType<T, 'Edm.String'> | null;
    /**
     * Phone.
     * Maximum length: 24.
     * @nullable
     */
    phone?: DeserializedType<T, 'Edm.String'> | null;
    /**
     * Fax.
     * Maximum length: 24.
     * @nullable
     */
    fax?: DeserializedType<T, 'Edm.String'> | null;
    /**
     * One-to-many navigation property to the {@link Orders} entity.
     */
    orders: Orders<T>[];
    /**
     * One-to-many navigation property to the {@link CustomerDemographics} entity.
     */
    customerDemographics: CustomerDemographics<T>[];
}
export interface CustomersType<T extends DeSerializers = DefaultDeSerializers> {
    customerId: DeserializedType<T, 'Edm.String'>;
    companyName: DeserializedType<T, 'Edm.String'>;
    contactName?: DeserializedType<T, 'Edm.String'> | null;
    contactTitle?: DeserializedType<T, 'Edm.String'> | null;
    address?: DeserializedType<T, 'Edm.String'> | null;
    city?: DeserializedType<T, 'Edm.String'> | null;
    region?: DeserializedType<T, 'Edm.String'> | null;
    postalCode?: DeserializedType<T, 'Edm.String'> | null;
    country?: DeserializedType<T, 'Edm.String'> | null;
    phone?: DeserializedType<T, 'Edm.String'> | null;
    fax?: DeserializedType<T, 'Edm.String'> | null;
    orders: OrdersType<T>[];
    customerDemographics: CustomerDemographicsType<T>[];
}
//# sourceMappingURL=Customers.d.ts.map