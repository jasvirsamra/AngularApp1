import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../destination/model.module";  // Adjust the path to your actual folder structure
import { StoreComponent } from "./store.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [ModelModule, CommonModule, FormsModule],  // Import necessary modules
  declarations: [StoreComponent],                    // Declare the StoreComponent
  exports: [StoreComponent],                         // Export the StoreComponent to use in other modules
})
export class StoreModule { }
