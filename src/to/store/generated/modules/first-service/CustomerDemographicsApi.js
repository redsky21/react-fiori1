"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerDemographicsApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const CustomerDemographics_1 = require("./CustomerDemographics");
const CustomerDemographicsRequestBuilder_1 = require("./CustomerDemographicsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustomerDemographicsApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = CustomerDemographics_1.CustomerDemographics;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            CUSTOMERS: new odata_v2_1.Link('Customers', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new CustomerDemographicsRequestBuilder_1.CustomerDemographicsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(CustomerDemographics_1.CustomerDemographics, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
             * Static representation of the {@link customerTypeId} property for query construction.
             * Use to reference this property in query operations such as 'select' in the fluent request API.
             */
                CUSTOMER_TYPE_ID: fieldBuilder.buildEdmTypeField('CustomerTypeID', 'Edm.String', false),
                /**
                 * Static representation of the {@link customerDesc} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_DESC: fieldBuilder.buildEdmTypeField('CustomerDesc', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', CustomerDemographics_1.CustomerDemographics)
            };
        }
        return this._schema;
    }
}
exports.CustomerDemographicsApi = CustomerDemographicsApi;
//# sourceMappingURL=CustomerDemographicsApi.js.map