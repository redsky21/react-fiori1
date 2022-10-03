import { CustomerDemographics } from './CustomerDemographics';
import { CustomerDemographicsRequestBuilder } from './CustomerDemographicsRequestBuilder';
import { CustomersApi } from './CustomersApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, Link } from '@sap-cloud-sdk/odata-v2';
export declare class CustomerDemographicsApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<CustomerDemographics<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
        CustomersApi<DeSerializersT>
    ]): this;
    entityConstructor: typeof CustomerDemographics;
    requestBuilder(): CustomerDemographicsRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<CustomerDemographics<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<CustomerDemographics<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof CustomerDemographics, DeSerializersT>;
    private _schema?;
    get schema(): {
        CUSTOMER_TYPE_ID: OrderableEdmTypeField<CustomerDemographics<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        CUSTOMER_DESC: OrderableEdmTypeField<CustomerDemographics<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        /**
         * Static representation of the one-to-many navigation property {@link customers} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMERS: Link<CustomerDemographics<DeSerializersT>, DeSerializersT, CustomersApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<CustomerDemographics<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
//# sourceMappingURL=CustomerDemographicsApi.d.ts.map