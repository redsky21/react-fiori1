import { Customer_And_Suppliers_By_Cities } from './Customer_And_Suppliers_By_Cities';
import { Customer_And_Suppliers_By_CitiesRequestBuilder } from './Customer_And_Suppliers_By_CitiesRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class Customer_And_Suppliers_By_CitiesApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<Customer_And_Suppliers_By_Cities<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
    ]): this;
    entityConstructor: typeof Customer_And_Suppliers_By_Cities;
    requestBuilder(): Customer_And_Suppliers_By_CitiesRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<Customer_And_Suppliers_By_Cities<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<Customer_And_Suppliers_By_Cities<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof Customer_And_Suppliers_By_Cities, DeSerializersT>;
    private _schema?;
    get schema(): {
        CITY: OrderableEdmTypeField<Customer_And_Suppliers_By_Cities<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        COMPANY_NAME: OrderableEdmTypeField<Customer_And_Suppliers_By_Cities<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        CONTACT_NAME: OrderableEdmTypeField<Customer_And_Suppliers_By_Cities<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        RELATIONSHIP: OrderableEdmTypeField<Customer_And_Suppliers_By_Cities<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        ALL_FIELDS: AllFields<Customer_And_Suppliers_By_Cities<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
//# sourceMappingURL=Customer_And_Suppliers_By_CitiesApi.d.ts.map