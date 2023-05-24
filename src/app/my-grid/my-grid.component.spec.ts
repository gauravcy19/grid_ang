import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGridComponent } from './my-grid.component';

describe('MyGridComponent', () => {
  let component: MyGridComponent;
  let fixture: ComponentFixture<MyGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyGridComponent]
    });
    fixture = TestBed.createComponent(MyGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
