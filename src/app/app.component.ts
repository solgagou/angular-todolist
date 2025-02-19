import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})

  export class AppComponent implements AfterViewInit{


    ngAfterViewInit(): void {
      console.log("Ha sido inicializado la vista de componentes e hijos")

    }

}
