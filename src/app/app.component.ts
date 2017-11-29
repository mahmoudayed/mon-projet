import { Component, OnInit } from '@angular/core';
import { ConnectBoService } from "../common/services/connect-bo.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    title = '';
    private dataLists;
    public message: string = '';

  constructor (private _ConnectBo: ConnectBoService) { }

  ngOnInit() {

      /*this._ConnectBo.list().subscribe( (response) => {
          console.log(response);
          if(response.status == 200) {
              return this.dataLists = response.body;
          } else {
              return this.message = 'NOT ACCES';
          }

      })*/

      this.title = this._ConnectBo.myObject.channel.title;
      this.dataLists = this._ConnectBo.myObject.channel.item;
      console.log(this.dataLists);



  }

}
