import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilHomeComponent } from './perfil-home.component';

describe('PerfilHomeComponent', () => {
  let component: PerfilHomeComponent;
  let fixture: ComponentFixture<PerfilHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
