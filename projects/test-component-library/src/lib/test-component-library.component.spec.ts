import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponentLibraryComponent } from './test-component-library.component';

describe('TestComponentLibraryComponent', () => {
  let component: TestComponentLibraryComponent;
  let fixture: ComponentFixture<TestComponentLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponentLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponentLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
