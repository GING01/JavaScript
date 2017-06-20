import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioGibliMoviesComponent } from './studio-gibli-movies.component';

describe('StudioGibliMoviesComponent', () => {
  let component: StudioGibliMoviesComponent;
  let fixture: ComponentFixture<StudioGibliMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudioGibliMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudioGibliMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
