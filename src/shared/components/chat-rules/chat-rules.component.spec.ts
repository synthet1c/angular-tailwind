import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRulesComponent } from './chat-rules.component';

describe('ChatRulesComponent', () => {
  let component: ChatRulesComponent;
  let fixture: ComponentFixture<ChatRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatRulesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
