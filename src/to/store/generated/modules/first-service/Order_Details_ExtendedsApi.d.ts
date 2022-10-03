import { Order_Details_Extendeds } from './Order_Details_Extendeds';
import { Order_Details_ExtendedsRequestBuilder } from './Order_Details_ExtendedsRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class Order_Details_ExtendedsApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<Order_Details_Extendeds<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
    ]): this;
    entityConstructor: typeof Order_Details_Extendeds;
    requestBuilder(): Order_Details_ExtendedsRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<Order_Details_Extendeds<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<Order_Details_Extendeds<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof Order_Details_Extendeds, DeSerializersT>;
    private _schema?;
    get schema(): {
        ORDER_ID: OrderableEdmTypeField<Order_Details_Extendeds<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int32", false, true>;
        PRODUCT_ID: OrderableEdmTypeField<Order_Details_Extendeds<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int32", false, true>;
        PRODUCT_NAME: OrderableEdmTypeField<Order_Details_Extendeds<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        UNIT_PRICE: OrderableEdmTypeField<Order_Details_Extendeds<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", false, true>;
        QUANTITY: OrderableEdmTypeField<Order_Details_Extendeds<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int16", false, true>;
        DISCOUNT: OrderableEdmTypeField<Order_Details_Extendeds<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Single", false, true>;
        EXTENDED_PRICE: OrderableEdmTypeField<Order_Details_Extendeds<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        ALL_FIELDS: AllFields<Order_Details_Extendeds<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
//# sourceMappingURL=Order_Details_ExtendedsApi.d.ts.map