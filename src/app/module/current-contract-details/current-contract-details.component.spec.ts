import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentContractDetailsComponent } from './current-contract-details.component';

describe('CurrentContractDetailsComponent', () => {
  let component: CurrentContractDetailsComponent;
  let fixture: ComponentFixture<CurrentContractDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentContractDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentContractDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
