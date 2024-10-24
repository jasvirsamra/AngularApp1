import { Component } from '@angular/core';

@Component({
  selector: 'app-store',   // Use <app-store> in templates to display this component
  template: `
    <div>
      <h1>Welcome to the Store</h1>
      <p>This is the store component where reservations will be handled.</p>
    </div>
  `,
})
export class StoreComponent { }
