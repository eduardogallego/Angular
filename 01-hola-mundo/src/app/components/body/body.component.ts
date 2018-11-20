import { Component } from '@angular/core'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {

  showMessage = true

  phrase: any = {
    message: 'Un gran poder requiere una gran responsabilidad',
    author: 'Ben Parker'
  }

  players: string[] = ['Spiderman', 'Venom', 'Dr. Octopus']

}
