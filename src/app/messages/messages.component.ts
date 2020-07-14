import { Component, OnInit } from '@angular/core';

// TODO: Remove since this is only temporarily importing the dndapi service to test it
import { DndapiService } from '../dndapi.service';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  public races: JSON[];

  constructor(
    private dndapiService: DndapiService,
    public messageService: MessageService) { }

  ngOnInit(): void {
    this.getRaces();  // TODO: remove this later when get races is setup somewhere
  }

  // TODO: remove this later when get races is setup somewhere
  getRaces(): void {
    this.dndapiService.getRaces()
      .subscribe(races => {
        this.races = races['results'];
        //console.log(this.races);
      });
  }

}
