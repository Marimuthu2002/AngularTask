import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractChangeProcedureComponent } from './contract-change-procedure.component';

describe('ContractChangeProcedureComponent', () => {
  let component: ContractChangeProcedureComponent;
  let fixture: ComponentFixture<ContractChangeProcedureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractChangeProcedureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractChangeProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
