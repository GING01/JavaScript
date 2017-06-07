import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GravedadComponent } from './gravedad.component';

describe('GravedadComponent', () => {
  let component: GravedadComponent;
  let fixture: ComponentFixture<GravedadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GravedadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GravedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
