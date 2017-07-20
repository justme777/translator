import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAnalyzerComponent } from './text-analyzer.component';

describe('TextAnalyzerComponent', () => {
  let component: TextAnalyzerComponent;
  let fixture: ComponentFixture<TextAnalyzerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAnalyzerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
