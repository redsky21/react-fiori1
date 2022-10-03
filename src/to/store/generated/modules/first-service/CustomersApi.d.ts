import { Customers } from './Customers';
import { CustomersRequestBuilder } from './CustomersRequestBuilder';
import { OrdersApi } from './OrdersApi';
import { CustomerDemographicsApi } from './CustomerDemographicsApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, Link } from '@sap-cloud-sdk/odata-v2';
export declare class CustomersApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<Customers<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
        OrdersApi<DeSerializersT>,
        CustomerDemographicsApi<DeSerializersT>
    ]): this;
    entityConstructor: typeof Customers;
    requestBuilder(): CustomersRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<Customers<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<Customers<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof Customers, DeSerializersT>;
    private _schema?;
    get schema(): {
        CUSTOMER_ID: OrderableEdmTypeField<Customers<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        COMPANY_NAME: OrderableEdmTypeField<Customers<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        CONTACT_NAME: OrderableEdmTypeField<Customers<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CONTACT_TITLE: OrderableEdmTypeField<Customers<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADDRESS: OrderableEdmTypeField<Customers<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CITY: OrderableEdmTypeField<Customers<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        REGION: OrderableEdmTypeField<Customers<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        POSTAL_CODE: OrderableEdmTypeField<Customers<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        COUNTRY: OrderableEdmTypeField<Customers<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PHONE: OrderableEdmTypeField<Customers<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        FAX: OrderableEdmTypeField<Customers<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        /**
         * Static representation of the one-to-many navigation property {@link orders} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERS: Link<Customers<DeSerializersT>, DeSerializersT, OrdersApi<DeSerializersT>>;
        /**
         * Static representation of the one-to-many navigation property {@link customerDemographics} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_DEMOGRAPHICS: Link<Customers<DeSerializersT>, DeSerializersT, CustomerDemographicsApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<Customers<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
//# sourceMappingURL=CustomersApi.d.ts.map