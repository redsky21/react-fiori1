import { Summary_Of_Sales_By_Quarters } from './Summary_Of_Sales_By_Quarters';
import { Summary_Of_Sales_By_QuartersRequestBuilder } from './Summary_Of_Sales_By_QuartersRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class Summary_Of_Sales_By_QuartersApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<Summary_Of_Sales_By_Quarters<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
    ]): this;
    entityConstructor: typeof Summary_Of_Sales_By_Quarters;
    requestBuilder(): Summary_Of_Sales_By_QuartersRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<Summary_Of_Sales_By_Quarters<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<Summary_Of_Sales_By_Quarters<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof Summary_Of_Sales_By_Quarters, DeSerializersT>;
    private _schema?;
    get schema(): {
        SHIPPED_DATE: OrderableEdmTypeField<Summary_Of_Sales_By_Quarters<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        ORDER_ID: OrderableEdmTypeField<Summary_Of_Sales_By_Quarters<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int32", false, true>;
        SUBTOTAL: OrderableEdmTypeField<Summary_Of_Sales_By_Quarters<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        ALL_FIELDS: AllFields<Summary_Of_Sales_By_Quarters<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
//# sourceMappingURL=Summary_Of_Sales_By_QuartersApi.d.ts.map