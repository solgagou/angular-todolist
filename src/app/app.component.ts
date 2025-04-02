import { ChangeDetectorRef, Component, DoCheck } from '@angular/core';
import { AddComponent } from './components/addTask/add.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms'; // IMPORTANTE: Para ngModel y ngForm
import { RouterModule } from '@angular/router'; // IMPORTANTE: Para router-outlet

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,  // Añadir esta línea para hacer que AppComponent también sea standalone
  imports: [AddComponent, ListComponent, FormsModule, RouterModule],

})
export class AppComponent implements DoCheck {
  value: number = 0;
  previousValue: number = 0;
  changesDetected: boolean = false;

  updateValue(): void {
    this.value++;
    setInterval(() => {
      this.changesDetected = false;
    }, 2000);
  }

  ngDoCheck(): void {
    if (this.value !== this.previousValue) {
      this.changesDetected = true;
      this.previousValue = this.value;
    }
  }
}
