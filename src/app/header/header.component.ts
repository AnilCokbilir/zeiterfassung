import { Component, OnInit } from '@angular/core';

import { Userdata } from '../userdata';
import { UserdataService } from '../userdata.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(private userdataService: UserdataService) { }
  userName: Userdata[] = [];
  ngOnInit(): void {
    this.userName = this.userdataService.getUserdata();
    console.log(this.userName)
  }

}
