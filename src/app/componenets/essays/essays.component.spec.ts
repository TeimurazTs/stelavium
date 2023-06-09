import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssaysComponent } from './essays.component';

describe('EssaysComponent', () => {
  let component: EssaysComponent;
  let fixture: ComponentFixture<EssaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EssaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EssaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
