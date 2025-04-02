import { Component, OnInit } from "@angular/core";
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { NgIf, NgClass, CommonModule } from "@angular/common";

@Component({
  selector: 'app-addTask',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  standalone: true,  // Esto indica que el componente es standalone
  imports: [ReactiveFormsModule, NgIf, NgClass, CommonModule],  // Asegúrate de importar FormsModule
})
export class AddComponent implements OnInit {

    numberTasks: number = 12

    isActive: boolean = false

    taskActive!: boolean;

    tasks: any[] = ['tarea1', 'tarea2', 'tarea3']

    constructor(private fb: FormBuilder) {}

      form!: FormGroup;

      ngOnInit(): void {
        this.form = this.fb.group({
          title: new FormControl('', [Validators.required, Validators.maxLength(10)])
        })

      }
      sendTaskTitle(): void{
        if(this.form.valid && this.form.get('title')?.value !== ''){
          this.taskActive = false
          console.log(this.form.value.title)
        }else{
          this.taskActive = true
        }
    }

  }

  // sendData(form: NgForm) {
  //   if (form.valid) {
  //     console.log(this.titleTask);
  //   }
  // }

  // sendTask() {
  //   const sizeTitleTask = this.titleTask.split("");
  //   if (sizeTitleTask.length > 0) {
  //     this.activeButton = false;
  //   } else {
  //     this.activeButton = true;
  //   }
  //   console.log(`Tarea enviada con éxito! ${this.titleTask}`);
  // }

