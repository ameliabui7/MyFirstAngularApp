import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstAngularApp';
  contacts = [];
  constructor() {
    this.contacts = [
      {
        ID: 1,
        first_name: 'Amelia',
        last_name: 'Bui',
        email: 'ameliabui@mail.fresnostate.edu'
      },
      {
        ID: 2,
        first_name: 'Joe',
        last_name: 'Biden',
        email: 'ameliabui@mail.fresnostate.edu'
      },
      {
        ID: 3,
        first_name: 'Mike',
        last_name: 'Tyson',
        email: 'ameliabui@mail.fresnostate.edu'
      }
    ];
  }

  delete(e) {
    console.log('from delete e: ', e);
    this.contacts.splice(e, 1);
  }
  addRow() {
    this.contacts.unshift({
      ID: 99,
      first_name: 'Amelia',
      last_name: 'Bui',
      email: 'ameliabui@mail.fresnostate.edu'
    });
  }
    save(row) {
      console.log('from save row: ', row);
    };
}