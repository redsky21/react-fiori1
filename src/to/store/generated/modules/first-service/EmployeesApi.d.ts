import { Employees } from './Employees';
import { EmployeesRequestBuilder } from './EmployeesRequestBuilder';
import { OrdersApi } from './OrdersApi';
import { TerritoriesApi } from './TerritoriesApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, EdmTypeField, Link, OneToOneLink } from '@sap-cloud-sdk/odata-v2';
export declare class EmployeesApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<Employees<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
        EmployeesApi<DeSerializersT>,
        EmployeesApi<DeSerializersT>,
        OrdersApi<DeSerializersT>,
        TerritoriesApi<DeSerializersT>
    ]): this;
    entityConstructor: typeof Employees;
    requestBuilder(): EmployeesRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<Employees<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<Employees<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof Employees, DeSerializersT>;
    private _schema?;
    get schema(): {
        EMPLOYEE_ID: OrderableEdmTypeField<Employees<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int32", false, true>;
        LAST_NAME: OrderableEdmTypeField<Employees<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        FIRST_NAME: OrderableEdmTypeField<Employees<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        TITLE: OrderableEdmTypeField<Employees<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TITLE_OF_COURTESY: OrderableEdmTypeField<Employees<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BIRTH_DATE: OrderableEdmTypeField<Employees<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        HIRE_DATE: OrderableEdmTypeField<Employees<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        ADDRESS: OrderableEdmTypeField<Employees<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CITY: OrderableEdmTypeField<Employees<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        REGION: OrderableEdmTypeField<Employees<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        POSTAL_CODE: OrderableEdmTypeField<Employees<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        COUNTRY: OrderableEdmTypeField<Employees<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        HOME_PHONE: OrderableEdmTypeField<Employees<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        EXTENSION: OrderableEdmTypeField<Employees<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PHOTO: EdmTypeField<Employees<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Binary", true, true>;
        NOTES: OrderableEdmTypeField<Employees<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        REPORTS_TO: OrderableEdmTypeField<Employees<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int32", true, true>;
        PHOTO_PATH: OrderableEdmTypeField<Employees<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        /**
         * Static representation of the one-to-many navigation property {@link employees1} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEES_1: Link<Employees<DeSerializersT>, DeSerializersT, EmployeesApi<DeSerializersT>>;
        /**
         * Static representation of the one-to-one navigation property {@link employee1} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_1: OneToOneLink<Employees<DeSerializersT>, DeSerializersT, EmployeesApi<DeSerializersT>>;
        /**
         * Static representation of the one-to-many navigation property {@link orders} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERS: Link<Employees<DeSerializersT>, DeSerializersT, OrdersApi<DeSerializersT>>;
        /**
         * Static representation of the one-to-many navigation property {@link territories} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERRITORIES: Link<Employees<DeSerializersT>, DeSerializersT, TerritoriesApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<Employees<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
//# sourceMappingURL=EmployeesApi.d.ts.map