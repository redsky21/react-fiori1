import { Alphabetical_List_Of_Products } from './Alphabetical_List_Of_Products';
import { Alphabetical_List_Of_ProductsRequestBuilder } from './Alphabetical_List_Of_ProductsRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class Alphabetical_List_Of_ProductsApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<Alphabetical_List_Of_Products<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
    ]): this;
    entityConstructor: typeof Alphabetical_List_Of_Products;
    requestBuilder(): Alphabetical_List_Of_ProductsRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<Alphabetical_List_Of_Products<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<Alphabetical_List_Of_Products<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof Alphabetical_List_Of_Products, DeSerializersT>;
    private _schema?;
    get schema(): {
        PRODUCT_ID: OrderableEdmTypeField<Alphabetical_List_Of_Products<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int32", false, true>;
        PRODUCT_NAME: OrderableEdmTypeField<Alphabetical_List_Of_Products<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        SUPPLIER_ID: OrderableEdmTypeField<Alphabetical_List_Of_Products<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int32", true, true>;
        CATEGORY_ID: OrderableEdmTypeField<Alphabetical_List_Of_Products<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int32", true, true>;
        QUANTITY_PER_UNIT: OrderableEdmTypeField<Alphabetical_List_Of_Products<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        UNIT_PRICE: OrderableEdmTypeField<Alphabetical_List_Of_Products<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        UNITS_IN_STOCK: OrderableEdmTypeField<Alphabetical_List_Of_Products<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int16", true, true>;
        UNITS_ON_ORDER: OrderableEdmTypeField<Alphabetical_List_Of_Products<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int16", true, true>;
        REORDER_LEVEL: OrderableEdmTypeField<Alphabetical_List_Of_Products<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int16", true, true>;
        DISCONTINUED: OrderableEdmTypeField<Alphabetical_List_Of_Products<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", false, true>;
        CATEGORY_NAME: OrderableEdmTypeField<Alphabetical_List_Of_Products<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        ALL_FIELDS: AllFields<Alphabetical_List_Of_Products<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
//# sourceMappingURL=Alphabetical_List_Of_ProductsApi.d.ts.map