import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, ModalController } from '@ionic/angular';
import { ImageModalComponent } from '../../../components/image-modal/image-modal.component';

@Component({
  selector: 'app-leyendo',
  templateUrl: './leyendo.page.html',
  styleUrls: ['./leyendo.page.scss'],
  standalone: false
})
export class LeyendoPage implements OnInit {
  estados: string[] = ['Por Hacer', 'Importante', 'Hecho', 'Eliminar'];
  mangas: any[] = [];

  constructor(private menuCtrl: MenuController,
              private alertController: AlertController,
              private modalCtrl: ModalController,
  ) {}

  ngOnInit() {
    this.menuCtrl.close("main-menu");

    // Solo se ejecuta la primera vez (cuando no hay nada guardado)
    const guardados = localStorage.getItem('mangas');
    if (!guardados) {
      this.mangas = [

      ];
      localStorage.setItem('mangas', JSON.stringify(this.mangas));
    }
  }

  // Este se ejecuta siempre que entra a la tab
  ionViewWillEnter() {
    this.menuCtrl.close("main-menu");

    const guardados = localStorage.getItem('mangas');
    if (guardados) {
      this.mangas = JSON.parse(guardados);
    }
  }

  get mangasFiltrados() {
    return this.mangas.filter(m => m.estadoSeleccionado === 'Por Hacer');
  }

  cambiarEstado(manga: any, nuevoEstado: string) {
    manga.estadoSeleccionado = nuevoEstado;
    localStorage.setItem('mangas', JSON.stringify(this.mangas));
  }

async agregarManga() {
    const alert = await this.alertController.create({
      cssClass: 'alert-custom',
      header: '¿Qué harémos hoy? ✨',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Escribe la tarea'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Agregar',
          handler: (data) => { 
            const nuevoManga = {
              nombre: data.nombre,
              estadoSeleccionado: 'Por Hacer' // Por defecto al agregar
            };
  
            this.mangas.push(nuevoManga);
            localStorage.setItem('mangas', JSON.stringify(this.mangas));
          }
        }
      ]
    });
  
    await alert.present();
  }


}