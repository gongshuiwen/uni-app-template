import { createPinia } from 'pinia'
import { createUnistorage } from 'pinia-plugin-unistorage'

declare module "pinia" {
  export interface DefineStoreOptionsBase<S, Store> {
    unistorage?: boolean;
  }
}

const pinia = createPinia()
pinia.use(createUnistorage())

export default pinia
