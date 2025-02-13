import { Routes } from '@angular/router';
import { ViewformComponent } from './components/viewform/viewform.component';
import { DynamicDropdownComponent } from './components/dynamic-dropdown/dynamic-dropdown.component';

export const routes: Routes = [
  { path: 'my-view', component: ViewformComponent },
  { path: 'dynamic-dropdown', component: DynamicDropdownComponent },
  { path: '', redirectTo: 'my-view', pathMatch: 'full' },
  { path: '**', redirectTo: 'my-view' }
];
