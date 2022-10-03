import { Current_Product_Lists } from './Current_Product_Lists';
import { Current_Product_ListsRequestBuilder } from './Current_Product_ListsRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class Current_Product_ListsApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<Current_Product_Lists<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
    ]): this;
    entityConstructor: typeof Current_Product_Lists;
    requestBuilder(): Current_Product_ListsRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<Current_Product_Lists<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<Current_Product_Lists<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof Current_Product_Lists, DeSerializersT>;
    private _schema?;
    get schema(): {
        PRODUCT_ID: OrderableEdmTypeField<Current_Product_Lists<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int32", false, true>;
        PRODUCT_NAME: OrderableEdmTypeField<Current_Product_Lists<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        ALL_FIELDS: AllFields<Current_Product_Lists<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
//# sourceMappingURL=Current_Product_ListsApi.d.ts.map