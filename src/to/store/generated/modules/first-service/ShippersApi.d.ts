import { Shippers } from './Shippers';
import { ShippersRequestBuilder } from './ShippersRequestBuilder';
import { OrdersApi } from './OrdersApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, Link } from '@sap-cloud-sdk/odata-v2';
export declare class ShippersApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<Shippers<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
        OrdersApi<DeSerializersT>
    ]): this;
    entityConstructor: typeof Shippers;
    requestBuilder(): ShippersRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<Shippers<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<Shippers<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof Shippers, DeSerializersT>;
    private _schema?;
    get schema(): {
        SHIPPER_ID: OrderableEdmTypeField<Shippers<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int32", false, true>;
        COMPANY_NAME: OrderableEdmTypeField<Shippers<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        PHONE: OrderableEdmTypeField<Shippers<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        /**
         * Static representation of the one-to-many navigation property {@link orders} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERS: Link<Shippers<DeSerializersT>, DeSerializersT, OrdersApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<Shippers<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
//# sourceMappingURL=ShippersApi.d.ts.map