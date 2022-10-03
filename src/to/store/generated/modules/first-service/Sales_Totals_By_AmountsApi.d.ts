import { Sales_Totals_By_Amounts } from './Sales_Totals_By_Amounts';
import { Sales_Totals_By_AmountsRequestBuilder } from './Sales_Totals_By_AmountsRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class Sales_Totals_By_AmountsApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<Sales_Totals_By_Amounts<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
    ]): this;
    entityConstructor: typeof Sales_Totals_By_Amounts;
    requestBuilder(): Sales_Totals_By_AmountsRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<Sales_Totals_By_Amounts<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<Sales_Totals_By_Amounts<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof Sales_Totals_By_Amounts, DeSerializersT>;
    private _schema?;
    get schema(): {
        SALE_AMOUNT: OrderableEdmTypeField<Sales_Totals_By_Amounts<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        ORDER_ID: OrderableEdmTypeField<Sales_Totals_By_Amounts<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int32", false, true>;
        COMPANY_NAME: OrderableEdmTypeField<Sales_Totals_By_Amounts<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        SHIPPED_DATE: OrderableEdmTypeField<Sales_Totals_By_Amounts<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        ALL_FIELDS: AllFields<Sales_Totals_By_Amounts<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
//# sourceMappingURL=Sales_Totals_By_AmountsApi.d.ts.map