import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTemComponent } from './item.component';

describe('MovieTemComponent', () => {
  let component: MovieTemComponent;
  let fixture: ComponentFixture<MovieTemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieTemComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
