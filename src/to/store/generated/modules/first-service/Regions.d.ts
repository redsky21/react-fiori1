import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import { Territories, TerritoriesType } from './Territories';
/**
 * This class represents the entity "Regions" of service "first".
 */
export declare class Regions<T extends DeSerializers = DefaultDeSerializers> extends Entity implements RegionsType<T> {
    /**
     * Technical entity name for Regions.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * All key fields of the Regions entity
     */
    static _keys: string[];
    /**
     * Region Id.
     */
    regionId: DeserializedType<T, 'Edm.Int32'>;
    /**
     * Region Description.
     * Maximum length: 50.
     */
    regionDescription: DeserializedType<T, 'Edm.String'>;
    /**
     * One-to-many navigation property to the {@link Territories} entity.
     */
    territories: Territories<T>[];
}
export interface RegionsType<T extends DeSerializers = DefaultDeSerializers> {
    regionId: DeserializedType<T, 'Edm.Int32'>;
    regionDescription: DeserializedType<T, 'Edm.String'>;
    territories: TerritoriesType<T>[];
}
//# sourceMappingURL=Regions.d.ts.map