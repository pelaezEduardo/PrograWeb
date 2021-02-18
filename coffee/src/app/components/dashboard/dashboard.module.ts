import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ProcessComponent } from './process/process.component';
import { MethodsComponent } from './methods/methods.component';
import { HistoryComponent } from './history/history.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from "../../material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [HomeComponent, UserComponent, ProcessComponent, MethodsComponent, HistoryComponent, LayoutComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }