import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-test-component-library',
  template: `
    <p>
      test-component-library works!
    </p>
  `,
  styles: [],
})
export class TestComponentLibraryComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
