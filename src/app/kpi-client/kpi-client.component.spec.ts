import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiClientComponent } from './kpi-client.component';

describe('KpiClientComponent', () => {
  let component: KpiClientComponent;
  let fixture: ComponentFixture<KpiClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
