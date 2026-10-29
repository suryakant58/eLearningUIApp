import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteLoderTs } from './remote-loder.ts';

describe('RemoteLoderTs', () => {
  let component: RemoteLoderTs;
  let fixture: ComponentFixture<RemoteLoderTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoteLoderTs],
    }).compileComponents();

    fixture = TestBed.createComponent(RemoteLoderTs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
