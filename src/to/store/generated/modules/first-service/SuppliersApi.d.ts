import { Suppliers } from './Suppliers';
import { SuppliersRequestBuilder } from './SuppliersRequestBuilder';
import { ProductsApi } from './ProductsApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, Link } from '@sap-cloud-sdk/odata-v2';
export declare class SuppliersApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<Suppliers<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
        ProductsApi<DeSerializersT>
    ]): this;
    entityConstructor: typeof Suppliers;
    requestBuilder(): SuppliersRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<Suppliers<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<Suppliers<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof Suppliers, DeSerializersT>;
    private _schema?;
    get schema(): {
        SUPPLIER_ID: OrderableEdmTypeField<Suppliers<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int32", false, true>;
        COMPANY_NAME: OrderableEdmTypeField<Suppliers<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        CONTACT_NAME: OrderableEdmTypeField<Suppliers<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CONTACT_TITLE: OrderableEdmTypeField<Suppliers<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADDRESS: OrderableEdmTypeField<Suppliers<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CITY: OrderableEdmTypeField<Suppliers<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        REGION: OrderableEdmTypeField<Suppliers<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        POSTAL_CODE: OrderableEdmTypeField<Suppliers<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        COUNTRY: OrderableEdmTypeField<Suppliers<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PHONE: OrderableEdmTypeField<Suppliers<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        FAX: OrderableEdmTypeField<Suppliers<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        HOME_PAGE: OrderableEdmTypeField<Suppliers<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        /**
         * Static representation of the one-to-many navigation property {@link products} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTS: Link<Suppliers<DeSerializersT>, DeSerializersT, ProductsApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<Suppliers<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
//# sourceMappingURL=SuppliersApi.d.ts.map