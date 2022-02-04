import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

const ELEMENT_DATA = [
  {
    nombre: 'Año 2020-2021',
    fecha_inicio: '01-09-2020',
    fecha_fin: '01-09-2021',
  },
  {
    nombre: 'Año 2020-2021',
    fecha_inicio: '01-09-2021',
    fecha_fin: '01-09-2022',
  },
  {
    nombre: 'Año 2021-2022',
    fecha_inicio: '01-09-2022',
    fecha_fin: '01-09-2023',
  },
  {
    nombre: 'Año 2021-2022',
    fecha_inicio: '01-09-2023',
    fecha_fin: '01-09-2024',
  },
  {
    nombre: 'Año 2021-2022',
    fecha_inicio: '01-09-2024',
    fecha_fin: '01-09-2025',
  },
  {
    nombre: 'Año 2022-2023',
    fecha_inicio: '01-09-2025',
    fecha_fin: '01-09-2026',
  },
  {
    nombre: 'Año 2022-2023',
    fecha_inicio: '01-09-2026',
    fecha_fin: '01-09-2027',
  },
  {
    nombre: 'Año 2022-2023',
    fecha_inicio: '01-09-2027',
    fecha_fin: '01-09-2028',
  },
  {
    nombre: 'Año 2023-2024',
    fecha_inicio: '01-09-2028',
    fecha_fin: '01-09-2029',
  },
  {
    nombre: 'Año 2023-2024',
    fecha_inicio: '01-09-2029',
    fecha_fin: '01-09-2030',
  },
  {
    nombre: 'Año 2020-2021',
    fecha_inicio: '01-09-2020',
    fecha_fin: '01-09-2021',
  },
  {
    nombre: 'Año 2020-2021',
    fecha_inicio: '01-09-2021',
    fecha_fin: '01-09-2022',
  },
  {
    nombre: 'Año 2021-2022',
    fecha_inicio: '01-09-2022',
    fecha_fin: '01-09-2023',
  },
  {
    nombre: 'Año 2021-2022',
    fecha_inicio: '01-09-2023',
    fecha_fin: '01-09-2024',
  },
  {
    nombre: 'Año 2021-2022',
    fecha_inicio: '01-09-2024',
    fecha_fin: '01-09-2025',
  },
  {
    nombre: 'Año 2022-2023',
    fecha_inicio: '01-09-2025',
    fecha_fin: '01-09-2026',
  },
  {
    nombre: 'Año 2022-2023',
    fecha_inicio: '01-09-2026',
    fecha_fin: '01-09-2027',
  },
  {
    nombre: 'Año 2022-2023',
    fecha_inicio: '01-09-2027',
    fecha_fin: '01-09-2028',
  },
  {
    nombre: 'Año 2023-2024',
    fecha_inicio: '01-09-2028',
    fecha_fin: '01-09-2029',
  },
  {
    nombre: 'Año 2023-2024',
    fecha_inicio: '01-09-2029',
    fecha_fin: '01-09-2030',
  },
  {
    nombre: 'Año 2022-2023',
    fecha_inicio: '01-09-2026',
    fecha_fin: '01-09-2027',
  },
  {
    nombre: 'Año 2022-2023',
    fecha_inicio: '01-09-2027',
    fecha_fin: '01-09-2028',
  },
  {
    nombre: 'Año 2023-2024',
    fecha_inicio: '01-09-2028',
    fecha_fin: '01-09-2029',
  },
  {
    nombre: 'Año 2023-2024',
    fecha_inicio: '01-09-2029',
    fecha_fin: '01-09-2030',
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('sort') sort!: MatSort;
  displayedColumns: string[] = ['nombre', 'fecha_inicio', 'fecha_fin'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
