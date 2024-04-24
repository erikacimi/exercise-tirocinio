import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirigentiComponentComponent } from './dirigenti-component.component';

describe('DirigentiComponentComponent', () => {
  let component: DirigentiComponentComponent;
  let fixture: ComponentFixture<DirigentiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirigentiComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirigentiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
