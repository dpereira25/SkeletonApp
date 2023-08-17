import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginExitosoPage } from './login-exitoso.page';

describe('LoginExitosoPage', () => {
  let component: LoginExitosoPage;
  let fixture: ComponentFixture<LoginExitosoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginExitosoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
