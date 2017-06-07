import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoOrbitalComponent } from './periodo-orbital.component';

describe('PeriodoOrbitalComponent', () => {
  let component: PeriodoOrbitalComponent;
  let fixture: ComponentFixture<PeriodoOrbitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodoOrbitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodoOrbitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
