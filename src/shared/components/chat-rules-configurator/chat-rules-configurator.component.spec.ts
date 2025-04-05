import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRulesConfiguratorComponent } from './chat-rules-configurator.component';

describe('ChatRulesConfiguratorComponent', () => {
  let component: ChatRulesConfiguratorComponent;
  let fixture: ComponentFixture<ChatRulesConfiguratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatRulesConfiguratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatRulesConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
