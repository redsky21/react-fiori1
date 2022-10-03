import { Products_Above_Average_Prices } from './Products_Above_Average_Prices';
import { Products_Above_Average_PricesRequestBuilder } from './Products_Above_Average_PricesRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class Products_Above_Average_PricesApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<Products_Above_Average_Prices<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
    ]): this;
    entityConstructor: typeof Products_Above_Average_Prices;
    requestBuilder(): Products_Above_Average_PricesRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<Products_Above_Average_Prices<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<Products_Above_Average_Prices<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof Products_Above_Average_Prices, DeSerializersT>;
    private _schema?;
    get schema(): {
        PRODUCT_NAME: OrderableEdmTypeField<Products_Above_Average_Prices<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        UNIT_PRICE: OrderableEdmTypeField<Products_Above_Average_Prices<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        ALL_FIELDS: AllFields<Products_Above_Average_Prices<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
//# sourceMappingURL=Products_Above_Average_PricesApi.d.ts.map