import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P10Component } from './p10.component';

describe('P10Component', () => {
  let component: P10Component;
  let fixture: ComponentFixture<P10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
