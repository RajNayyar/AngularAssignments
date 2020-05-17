import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderDetailComponentComponent } from './customer-order-detail-component.component';

describe('CustomerOrderDetailComponentComponent', () => {
  let component: CustomerOrderDetailComponentComponent;
  let fixture: ComponentFixture<CustomerOrderDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerOrderDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOrderDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
