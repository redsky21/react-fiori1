import { Orders } from './Orders';
import { OrdersRequestBuilder } from './OrdersRequestBuilder';
import { CustomersApi } from './CustomersApi';
import { EmployeesApi } from './EmployeesApi';
import { Order_DetailsApi } from './Order_DetailsApi';
import { ShippersApi } from './ShippersApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, OneToOneLink, Link } from '@sap-cloud-sdk/odata-v2';
export declare class OrdersApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<Orders<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
        CustomersApi<DeSerializersT>,
        EmployeesApi<DeSerializersT>,
        Order_DetailsApi<DeSerializersT>,
        ShippersApi<DeSerializersT>
    ]): this;
    entityConstructor: typeof Orders;
    requestBuilder(): OrdersRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<Orders<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<Orders<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof Orders, DeSerializersT>;
    private _schema?;
    get schema(): {
        ORDER_ID: OrderableEdmTypeField<Orders<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int32", false, true>;
        CUSTOMER_ID: OrderableEdmTypeField<Orders<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        EMPLOYEE_ID: OrderableEdmTypeField<Orders<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int32", true, true>;
        ORDER_DATE: OrderableEdmTypeField<Orders<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        REQUIRED_DATE: OrderableEdmTypeField<Orders<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        SHIPPED_DATE: OrderableEdmTypeField<Orders<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        SHIP_VIA: OrderableEdmTypeField<Orders<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int32", true, true>;
        FREIGHT: OrderableEdmTypeField<Orders<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        SHIP_NAME: OrderableEdmTypeField<Orders<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SHIP_ADDRESS: OrderableEdmTypeField<Orders<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SHIP_CITY: OrderableEdmTypeField<Orders<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SHIP_REGION: OrderableEdmTypeField<Orders<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SHIP_POSTAL_CODE: OrderableEdmTypeField<Orders<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SHIP_COUNTRY: OrderableEdmTypeField<Orders<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        /**
         * Static representation of the one-to-one navigation property {@link customer} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER: OneToOneLink<Orders<DeSerializersT>, DeSerializersT, CustomersApi<DeSerializersT>>;
        /**
         * Static representation of the one-to-one navigation property {@link employee} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE: OneToOneLink<Orders<DeSerializersT>, DeSerializersT, EmployeesApi<DeSerializersT>>;
        /**
         * Static representation of the one-to-many navigation property {@link orderDetails} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_DETAILS: Link<Orders<DeSerializersT>, DeSerializersT, Order_DetailsApi<DeSerializersT>>;
        /**
         * Static representation of the one-to-one navigation property {@link shipper} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPER: OneToOneLink<Orders<DeSerializersT>, DeSerializersT, ShippersApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<Orders<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
//# sourceMappingURL=OrdersApi.d.ts.map