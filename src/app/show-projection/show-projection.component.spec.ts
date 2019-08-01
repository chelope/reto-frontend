import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProjectionComponent } from './show-projection.component';

describe('ShowProjectionComponent', () => {
  let component: ShowProjectionComponent;
  let fixture: ComponentFixture<ShowProjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
