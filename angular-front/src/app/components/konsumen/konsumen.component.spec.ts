import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonsumenComponent } from './konsumen.component';

describe('KonsumenComponent', () => {
  let component: KonsumenComponent;
  let fixture: ComponentFixture<KonsumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonsumenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KonsumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
