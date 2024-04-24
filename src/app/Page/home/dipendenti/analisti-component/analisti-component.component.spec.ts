import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalistiComponentComponent } from './analisti-component.component';

describe('AnalistiComponentComponent', () => {
  let component: AnalistiComponentComponent;
  let fixture: ComponentFixture<AnalistiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalistiComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalistiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
