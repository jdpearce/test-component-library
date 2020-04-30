import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import 'hammerjs';
import { TestComponentLibraryComponent } from './test-component-library.component';

@NgModule({
  declarations: [TestComponentLibraryComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: TestComponentLibraryComponent,
      },
    ]),
  ],
  exports: [TestComponentLibraryComponent],
  bootstrap: [TestComponentLibraryComponent],
})
export class TestComponentLibraryModule {}
