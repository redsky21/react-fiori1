"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuppliersApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Suppliers_1 = require("./Suppliers");
const SuppliersRequestBuilder_1 = require("./SuppliersRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SuppliersApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Suppliers_1.Suppliers;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRODUCTS: new odata_v2_1.Link('Products', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new SuppliersRequestBuilder_1.SuppliersRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Suppliers_1.Suppliers, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
             * Static representation of the {@link supplierId} property for query construction.
             * Use to reference this property in query operations such as 'select' in the fluent request API.
             */
                SUPPLIER_ID: fieldBuilder.buildEdmTypeField('SupplierID', 'Edm.Int32', false),
                /**
                 * Static representation of the {@link companyName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPANY_NAME: fieldBuilder.buildEdmTypeField('CompanyName', 'Edm.String', false),
                /**
                 * Static representation of the {@link contactName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONTACT_NAME: fieldBuilder.buildEdmTypeField('ContactName', 'Edm.String', true),
                /**
                 * Static representation of the {@link contactTitle} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONTACT_TITLE: fieldBuilder.buildEdmTypeField('ContactTitle', 'Edm.String', true),
                /**
                 * Static representation of the {@link address} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS: fieldBuilder.buildEdmTypeField('Address', 'Edm.String', true),
                /**
                 * Static representation of the {@link city} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', true),
                /**
                 * Static representation of the {@link region} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REGION: fieldBuilder.buildEdmTypeField('Region', 'Edm.String', true),
                /**
                 * Static representation of the {@link postalCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                POSTAL_CODE: fieldBuilder.buildEdmTypeField('PostalCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link country} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true),
                /**
                 * Static representation of the {@link phone} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PHONE: fieldBuilder.buildEdmTypeField('Phone', 'Edm.String', true),
                /**
                 * Static representation of the {@link fax} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FAX: fieldBuilder.buildEdmTypeField('Fax', 'Edm.String', true),
                /**
                 * Static representation of the {@link homePage} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HOME_PAGE: fieldBuilder.buildEdmTypeField('HomePage', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Suppliers_1.Suppliers)
            };
        }
        return this._schema;
    }
}
exports.SuppliersApi = SuppliersApi;
//# sourceMappingURL=SuppliersApi.js.map