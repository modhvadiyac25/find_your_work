import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContactusComponent } from './user-contactus.component';

describe('UserContactusComponent', () => {
  let component: UserContactusComponent;
  let fixture: ComponentFixture<UserContactusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserContactusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
