import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFeaturesConfiguratorComponent } from './chat-features-configurator.component';

describe('ChatFeaturesConfiguratorComponent', () => {
  let component: ChatFeaturesConfiguratorComponent;
  let fixture: ComponentFixture<ChatFeaturesConfiguratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatFeaturesConfiguratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatFeaturesConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
