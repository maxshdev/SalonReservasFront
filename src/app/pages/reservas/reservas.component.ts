import { Component } from '@angular/core';
import { NbLayoutModule, NbCardModule, NbButtonModule } from '@nebular/theme';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [NbLayoutModule, NbCardModule, NbButtonModule],
  template: `
    <nb-layout>
      <nb-layout-header fixed>Reservas</nb-layout-header>
      <nb-layout-column>
        <nb-card>
          <nb-card-header>Gestión de Reservas</nb-card-header>
          <nb-card-body>
            Aquí podrás listar, crear o eliminar reservas (a implementar).
          </nb-card-body>
        </nb-card>
      </nb-layout-column>
    </nb-layout>
  `,
})
export class ReservasComponent {}
