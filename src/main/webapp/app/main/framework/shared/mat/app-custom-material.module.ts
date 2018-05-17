import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatCardModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatMenuModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        FlexLayoutModule
    ],
    exports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatMenuModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        FlexLayoutModule
    ],
    declarations: []
})
export class AppCustomMaterialModule { }
