import { AfterContentInit, Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: 'app-addTask',
  standalone: true,
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']

})

export class AddComponent implements OnDestroy, AfterContentInit{


  // ngOnInit(): void {
  //   console.log("Creándose desde el ng on Init")

  // }

  // constructor(){
  //   console.log("Creándose desde el constructor")

  // }

  ngOnDestroy(): void {
    console.log("El componente ha sido destruido")
  }

  ngAfterContentInit(): void {
    console.log("El contenido proyectado ha sido inicializado")
  }
}
