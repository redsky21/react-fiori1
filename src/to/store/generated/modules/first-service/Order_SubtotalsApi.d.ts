import { Order_Subtotals } from './Order_Subtotals';
import { Order_SubtotalsRequestBuilder } from './Order_SubtotalsRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class Order_SubtotalsApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<Order_Subtotals<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
    ]): this;
    entityConstructor: typeof Order_Subtotals;
    requestBuilder(): Order_SubtotalsRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<Order_Subtotals<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<Order_Subtotals<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof Order_Subtotals, DeSerializersT>;
    private _schema?;
    get schema(): {
        ORDER_ID: OrderableEdmTypeField<Order_Subtotals<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int32", false, true>;
        SUBTOTAL: OrderableEdmTypeField<Order_Subtotals<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        ALL_FIELDS: AllFields<Order_Subtotals<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
//# sourceMappingURL=Order_SubtotalsApi.d.ts.map