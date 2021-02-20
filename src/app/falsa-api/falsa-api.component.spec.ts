import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalsaApiComponent } from './falsa-api.component';

describe('FalsaApiComponent', () => {
  let component: FalsaApiComponent;
  let fixture: ComponentFixture<FalsaApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalsaApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FalsaApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
