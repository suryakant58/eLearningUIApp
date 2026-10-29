import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponentTs } from './layout.component.ts';

describe('LayoutComponentTs', () => {
  let component: LayoutComponentTs;
  let fixture: ComponentFixture<LayoutComponentTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutComponentTs],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutComponentTs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
