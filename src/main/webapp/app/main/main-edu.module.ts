import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppCustomMaterialModule } from './framework/shared/mat/app-custom-material.module';
import { SharedLibsModule } from './framework/shared/shared-libs.module';

@NgModule({
    imports: [
        AppCustomMaterialModule,
        SharedLibsModule
    ],
    exports: [
        AppCustomMaterialModule,
        SharedLibsModule
    ],
    declarations: [
    ],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainEduModule {
}
