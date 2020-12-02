import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAboutusComponent } from './user-aboutus.component';

describe('UserAboutusComponent', () => {
  let component: UserAboutusComponent;
  let fixture: ComponentFixture<UserAboutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAboutusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
