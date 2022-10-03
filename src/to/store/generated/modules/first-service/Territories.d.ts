import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import { Regions, RegionsType } from './Regions';
import { Employees, EmployeesType } from './Employees';
/**
 * This class represents the entity "Territories" of service "first".
 */
export declare class Territories<T extends DeSerializers = DefaultDeSerializers> extends Entity implements TerritoriesType<T> {
    /**
     * Technical entity name for Territories.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * All key fields of the Territories entity
     */
    static _keys: string[];
    /**
     * Territory Id.
     * Maximum length: 20.
     */
    territoryId: DeserializedType<T, 'Edm.String'>;
    /**
     * Territory Description.
     * Maximum length: 50.
     */
    territoryDescription: DeserializedType<T, 'Edm.String'>;
    /**
     * Region Id.
     */
    regionId: DeserializedType<T, 'Edm.Int32'>;
    /**
     * One-to-one navigation property to the {@link Regions} entity.
     */
    region?: Regions<T> | null;
    /**
     * One-to-many navigation property to the {@link Employees} entity.
     */
    employees: Employees<T>[];
}
export interface TerritoriesType<T extends DeSerializers = DefaultDeSerializers> {
    territoryId: DeserializedType<T, 'Edm.String'>;
    territoryDescription: DeserializedType<T, 'Edm.String'>;
    regionId: DeserializedType<T, 'Edm.Int32'>;
    region?: RegionsType<T> | null;
    employees: EmployeesType<T>[];
}
//# sourceMappingURL=Territories.d.ts.map