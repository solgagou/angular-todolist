import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";  // IMPORTANTE: Para usar ngForm

@Component({
  selector: 'app-addTask',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  numberTasks: number = 10;
  titleTask: string = '';
  activeButton: boolean = true;

  sendData(form: NgForm) {
    if (form.valid) {
      console.log(this.titleTask);
    }
  }

  sendTask() {
    const sizeTitleTask = this.titleTask.split("");
    if (sizeTitleTask.length > 0) {
      this.activeButton = false;
    } else {
      this.activeButton = true;
    }
    console.log(`Tarea enviada con éxito! ${this.titleTask}`);
  }
}
