import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyExpensesTableComponent } from './daily-expenses-table.component';

describe('DailyExpensesTableComponent', () => {
  let component: DailyExpensesTableComponent;
  let fixture: ComponentFixture<DailyExpensesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyExpensesTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyExpensesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
