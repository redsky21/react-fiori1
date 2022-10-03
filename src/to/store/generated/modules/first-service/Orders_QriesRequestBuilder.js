"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orders_QriesRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const Orders_Qries_1 = require("./Orders_Qries");
/**
 * Request builder class for operations supported on the {@link Orders_Qries} entity.
 */
class Orders_QriesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `Orders_Qries` entity based on its keys.
     * @param orderId Key property. See {@link Orders_Qries.orderId}.
     * @param companyName Key property. See {@link Orders_Qries.companyName}.
     * @returns A request builder for creating requests to retrieve one `Orders_Qries` entity based on its keys.
     */
    getByKey(orderId, companyName) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            OrderID: orderId,
            CompanyName: companyName
        });
    }
    /**
     * Returns a request builder for querying all `Orders_Qries` entities.
     * @returns A request builder for creating requests to retrieve all `Orders_Qries` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Orders_Qries` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Orders_Qries`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `Orders_Qries`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Orders_Qries`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(orderIdOrEntity, companyName) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, orderIdOrEntity instanceof Orders_Qries_1.Orders_Qries ? orderIdOrEntity : {
            OrderID: orderIdOrEntity,
            CompanyName: companyName
        });
    }
}
exports.Orders_QriesRequestBuilder = Orders_QriesRequestBuilder;
//# sourceMappingURL=Orders_QriesRequestBuilder.js.map