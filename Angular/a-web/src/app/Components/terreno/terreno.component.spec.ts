import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrenoComponent } from './terreno.component';

describe('TerrenoComponent', () => {
  let component: TerrenoComponent;
  let fixture: ComponentFixture<TerrenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
