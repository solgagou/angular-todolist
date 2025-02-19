import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-addTask',
  standalone: true,
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']

})

export class AddComponent implements OnInit{


  ngOnInit(): void {
    console.log("Creándose desde el ng on Init")

  }

  constructor(){
    console.log("Creándose desde el constructor")

  }
}
