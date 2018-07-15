import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialExamplesComponent } from './material-examples.component';

describe('MaterialExamplesComponent', () => {
  let component: MaterialExamplesComponent;
  let fixture: ComponentFixture<MaterialExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
