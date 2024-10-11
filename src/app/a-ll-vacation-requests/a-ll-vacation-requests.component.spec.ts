import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVacationRequestsComponent } from './a-ll-vacation-requests.component';

describe('ALLVacationRequestsComponent', () => {
  let component: AllVacationRequestsComponent;
  let fixture: ComponentFixture<AllVacationRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllVacationRequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllVacationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
