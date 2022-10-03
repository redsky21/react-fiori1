import { Category_Sales_For_1997 } from './Category_Sales_For_1997';
import { Category_Sales_For_1997RequestBuilder } from './Category_Sales_For_1997RequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class Category_Sales_For_1997Api<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<Category_Sales_For_1997<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
    ]): this;
    entityConstructor: typeof Category_Sales_For_1997;
    requestBuilder(): Category_Sales_For_1997RequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<Category_Sales_For_1997<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<Category_Sales_For_1997<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof Category_Sales_For_1997, DeSerializersT>;
    private _schema?;
    get schema(): {
        CATEGORY_NAME: OrderableEdmTypeField<Category_Sales_For_1997<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        CATEGORY_SALES: OrderableEdmTypeField<Category_Sales_For_1997<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        ALL_FIELDS: AllFields<Category_Sales_For_1997<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
//# sourceMappingURL=Category_Sales_For_1997Api.d.ts.map