import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillMovieComponent } from './detaill-movie.component';

describe('DetaillMovieComponent', () => {
  let component: DetaillMovieComponent;
  let fixture: ComponentFixture<DetaillMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaillMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
