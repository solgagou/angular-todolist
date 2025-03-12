import { AfterViewInit, ChangeDetectorRef, Component, DoCheck, ValueProvider } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})

  export class AppComponent implements DoCheck{


    // ngAfterViewInit(): void {
    //   console.log("Ha sido inicializado la vista de componentes e hijos")

    // }

    // isDestroyed: boolean = true

    // countDown: number;
    // intervalID: any;

    value: number = 0;
    previousValue: number = 0;
    changesDetected: boolean = false;

    updateValue(): void{
      this.value++
      setInterval(() => {
        this.changesDetected = false
      }, 2000);
    }

    ngDoCheck(): void {
      if (this.value !== this.previousValue) {
        this.changesDetected = true
        this.previousValue = this.value
      }
    }

    }

