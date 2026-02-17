import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, ModalController } from '@ionic/angular';
import { ImageModalComponent } from '../../../components/image-modal/image-modal.component';

@Component({
  selector: 'app-por-leer',
  templateUrl: './por-leer.page.html',
  styleUrls: ['./por-leer.page.scss'],
  standalone: false
})
export class PorLeerPage implements OnInit {
  estados: string[] = ['Por Hacer', 'Importante', 'Hecho', 'Eliminar'];
  mangas: any[] = [];

  constructor(private menuCtrl: MenuController,
              private modalCtrl: ModalController,
  ) {}


  ngOnInit() {
    this.menuCtrl.close("main-menu");
  }


  ionViewWillEnter() {
    this.menuCtrl.close("main-menu");

    const guardados = localStorage.getItem('mangas');
    if (guardados) {
      this.mangas = JSON.parse(guardados);
    }
  }

  get mangasFiltrados() {
    return this.mangas.filter(m => m.estadoSeleccionado === 'Importante');
  }

  cambiarEstado(manga: any, nuevoEstado: string) {
    manga.estadoSeleccionado = nuevoEstado;
    localStorage.setItem('mangas', JSON.stringify(this.mangas));
  }

}