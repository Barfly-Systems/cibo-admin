import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSetupView } from './product-setup.view';

describe('ProductSetupView', () => {
  let component: ProductSetupView;
  let fixture: ComponentFixture<ProductSetupView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSetupView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSetupView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
