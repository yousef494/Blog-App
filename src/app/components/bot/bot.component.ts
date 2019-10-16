import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { BotService } from '../../services/bot.service'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.scss']
})
export class BotComponent implements OnInit, AfterViewChecked {

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  conversation = [];
  chatForm: FormGroup;

  constructor(
    private botService: BotService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.chatForm = this.formBuilder.group(
      {
        msgCtr: new FormControl('', [Validators.required])
      });

  }

  send() {
    const msgCtr = this.chatForm.controls['msgCtr'];
    let msg = msgCtr.value;
    msgCtr.setValue('');
    this.pushConversation('outgoing', 'Me', msg, '11:01 AM', 'Yesterday');
    let res = this.botService.sendMessage(msg).subscribe(result => {
      this.pushConversation('incoming', 'Bot', result[0]['resp'], '11:01 AM', 'Yesterday');
    }, err => {
      console.error(err);
    });
  }

  pushConversation(type, user, text, time, day) {
    this.conversation.push(
      { 'type': type, 'user': user, 'text': text, 'time': time, 'day': day }
    );
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

}
