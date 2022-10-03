"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sales_Totals_By_AmountsRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const Sales_Totals_By_Amounts_1 = require("./Sales_Totals_By_Amounts");
/**
 * Request builder class for operations supported on the {@link Sales_Totals_By_Amounts} entity.
 */
class Sales_Totals_By_AmountsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `Sales_Totals_By_Amounts` entity based on its keys.
     * @param orderId Key property. See {@link Sales_Totals_By_Amounts.orderId}.
     * @param companyName Key property. See {@link Sales_Totals_By_Amounts.companyName}.
     * @returns A request builder for creating requests to retrieve one `Sales_Totals_By_Amounts` entity based on its keys.
     */
    getByKey(orderId, companyName) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            OrderID: orderId,
            CompanyName: companyName
        });
    }
    /**
     * Returns a request builder for querying all `Sales_Totals_By_Amounts` entities.
     * @returns A request builder for creating requests to retrieve all `Sales_Totals_By_Amounts` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Sales_Totals_By_Amounts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Sales_Totals_By_Amounts`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `Sales_Totals_By_Amounts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Sales_Totals_By_Amounts`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(orderIdOrEntity, companyName) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, orderIdOrEntity instanceof Sales_Totals_By_Amounts_1.Sales_Totals_By_Amounts ? orderIdOrEntity : {
            OrderID: orderIdOrEntity,
            CompanyName: companyName
        });
    }
}
exports.Sales_Totals_By_AmountsRequestBuilder = Sales_Totals_By_AmountsRequestBuilder;
//# sourceMappingURL=Sales_Totals_By_AmountsRequestBuilder.js.map