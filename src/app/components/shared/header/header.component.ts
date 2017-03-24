import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../../models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Output() loginClicked = new EventEmitter();
  @Output() logoutClicked = new EventEmitter();
  @Input() user: User = null;
  constructor() { }

  ngOnInit() {
  }

  //Login With given provider
  login(provider: string) {
    this.loginClicked.emit(provider);
  }

  logout(){
    this.logoutClicked.emit();
  }

}