import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormFieldComponent } from "./componentes/form-field/form-field.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormFieldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Login';
}
