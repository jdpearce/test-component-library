import { NgModule } from '@angular/core';
import 'hammerjs';
import { TestComponentLibraryComponent } from './test-component-library.component';

@NgModule({
  declarations: [TestComponentLibraryComponent],
  imports: [],
  exports: [TestComponentLibraryComponent],
})
export class TestComponentLibraryModule {}
