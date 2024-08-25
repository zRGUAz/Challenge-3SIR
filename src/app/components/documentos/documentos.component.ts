import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-documentos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './documentos.component.html',
  styleUrl: './documentos.component.css'
})
export class DocumentosComponent {
  personalDocuments: string[] = [
    'Documento 01', 'Documento 02', 'Documento 03',
    'Documento 04', 'Documento 05', 'Documento 06'
  ];

  complianceDocuments: string[] = [
    'Documento 01', 'Documento 02', 'Documento 03',
    'Documento 04', 'Documento 05', 'Documento 06'
  ];

  requestDocuments: string[] = [
    'Documento 01', 'Documento 02', 'Documento 03',
    'Documento 04', 'Documento 05', 'Documento 06'
  ];
}
