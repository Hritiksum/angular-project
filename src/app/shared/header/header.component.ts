import { Component, OnInit } from '@angular/core';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // fontawesome: Tie the icon to the property in your component
  faigloo = faIgloo;

  constructor() { }

  ngOnInit(): void {
  }

}
