import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../destination/model.module';
import { StoreComponent } from './store.component';

@NgModule({
  imports: [CommonModule, FormsModule, ModelModule],
  declarations: [StoreComponent],
  exports: [StoreComponent],
})
export class StoreModule {}
