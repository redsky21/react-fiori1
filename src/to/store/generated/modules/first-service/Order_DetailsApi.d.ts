import { Order_Details } from './Order_Details';
import { Order_DetailsRequestBuilder } from './Order_DetailsRequestBuilder';
import { OrdersApi } from './OrdersApi';
import { ProductsApi } from './ProductsApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, OneToOneLink } from '@sap-cloud-sdk/odata-v2';
export declare class Order_DetailsApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<Order_Details<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
        OrdersApi<DeSerializersT>,
        ProductsApi<DeSerializersT>
    ]): this;
    entityConstructor: typeof Order_Details;
    requestBuilder(): Order_DetailsRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<Order_Details<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<Order_Details<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof Order_Details, DeSerializersT>;
    private _schema?;
    get schema(): {
        ORDER_ID: OrderableEdmTypeField<Order_Details<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int32", false, true>;
        PRODUCT_ID: OrderableEdmTypeField<Order_Details<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int32", false, true>;
        UNIT_PRICE: OrderableEdmTypeField<Order_Details<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", false, true>;
        QUANTITY: OrderableEdmTypeField<Order_Details<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int16", false, true>;
        DISCOUNT: OrderableEdmTypeField<Order_Details<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Single", false, true>;
        /**
         * Static representation of the one-to-one navigation property {@link order} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER: OneToOneLink<Order_Details<DeSerializersT>, DeSerializersT, OrdersApi<DeSerializersT>>;
        /**
         * Static representation of the one-to-one navigation property {@link product} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT: OneToOneLink<Order_Details<DeSerializersT>, DeSerializersT, ProductsApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<Order_Details<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
//# sourceMappingURL=Order_DetailsApi.d.ts.map