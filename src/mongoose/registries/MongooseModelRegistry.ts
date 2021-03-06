/**
 *
 * @type {Registry<Provider<any>, IProvider<any>>}
 */
import {GlobalProviders, Provider, TypedProvidersRegistry} from "@tsed/common";

// tslint:disable-next-line: variable-name
export const MongooseModelRegistry: TypedProvidersRegistry = GlobalProviders.createRegistry("mongooseModel", Provider, {
  injectable: true,
  buildable: false
});
/**
 * Add a new model in the `ProviderRegistry`. This model will be built when `InjectorService` will be loaded.
 *
 * #### Example
 *
 * ```typescript
 * import {registerModel, InjectorService} from "@tsed/common";
 *
 * export default class MyModel {
 *     constructor(){}
 *     getFoo() {
 *         return "test";
 *     }
 * }
 *
 * registerModel({provide: MyModel});
 * // or
 * registerModel(MyModel);
 *
 * const injector = new InjectorService();
 * injector.load();
 *
 * const myModel = injector.get<MyModel>(MyModel);
 * myModel.getFoo(); // test
 * ```
 *
 * @param provider Provider configuration.
 */
export const registerModel = GlobalProviders.createRegisterFn("mongooseModel");
