import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoCardsComponent } from './two-cards.component';

describe('TwoCardsComponent', () => {
  let component: TwoCardsComponent;
  let fixture: ComponentFixture<TwoCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
