"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary_Of_Sales_By_QuartersApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Summary_Of_Sales_By_Quarters_1 = require("./Summary_Of_Sales_By_Quarters");
const Summary_Of_Sales_By_QuartersRequestBuilder_1 = require("./Summary_Of_Sales_By_QuartersRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class Summary_Of_Sales_By_QuartersApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Summary_Of_Sales_By_Quarters_1.Summary_Of_Sales_By_Quarters;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new Summary_Of_Sales_By_QuartersRequestBuilder_1.Summary_Of_Sales_By_QuartersRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Summary_Of_Sales_By_Quarters_1.Summary_Of_Sales_By_Quarters, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
             * Static representation of the {@link shippedDate} property for query construction.
             * Use to reference this property in query operations such as 'select' in the fluent request API.
             */
                SHIPPED_DATE: fieldBuilder.buildEdmTypeField('ShippedDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link orderId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORDER_ID: fieldBuilder.buildEdmTypeField('OrderID', 'Edm.Int32', false),
                /**
                 * Static representation of the {@link subtotal} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUBTOTAL: fieldBuilder.buildEdmTypeField('Subtotal', 'Edm.Decimal', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Summary_Of_Sales_By_Quarters_1.Summary_Of_Sales_By_Quarters)
            };
        }
        return this._schema;
    }
}
exports.Summary_Of_Sales_By_QuartersApi = Summary_Of_Sales_By_QuartersApi;
//# sourceMappingURL=Summary_Of_Sales_By_QuartersApi.js.map