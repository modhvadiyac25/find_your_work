import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTakeworkComponent } from './user-takework.component';

describe('UserTakeworkComponent', () => {
  let component: UserTakeworkComponent;
  let fixture: ComponentFixture<UserTakeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTakeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTakeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
