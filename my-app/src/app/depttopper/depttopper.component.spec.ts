import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepttopperComponent } from './depttopper.component';

describe('DepttopperComponent', () => {
  let component: DepttopperComponent;
  let fixture: ComponentFixture<DepttopperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepttopperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepttopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
