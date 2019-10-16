import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgsComponent } from './algs.component';

describe('AlgsComponent', () => {
  let component: AlgsComponent;
  let fixture: ComponentFixture<AlgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
