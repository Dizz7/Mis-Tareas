import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, ModalController } from '@ionic/angular';
import { ImageModalComponent } from '../../../components/image-modal/image-modal.component';

@Component({
  selector: 'app-leidos',
  templateUrl: './leidos.page.html',
  styleUrls: ['./leidos.page.scss'],
  standalone: false
})
export class LeidosPage implements OnInit {
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
    return this.mangas.filter(m => m.estadoSeleccionado === 'Hecho');
  }

  cambiarEstado(manga: any, nuevoEstado: string) {
    manga.estadoSeleccionado = nuevoEstado;
    localStorage.setItem('mangas', JSON.stringify(this.mangas));
  }

}