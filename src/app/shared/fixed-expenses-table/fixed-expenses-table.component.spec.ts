import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedExpensesTableComponent } from './fixed-expenses-table.component';

describe('FixedExpensesTableComponent', () => {
  let component: FixedExpensesTableComponent;
  let fixture: ComponentFixture<FixedExpensesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixedExpensesTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FixedExpensesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
