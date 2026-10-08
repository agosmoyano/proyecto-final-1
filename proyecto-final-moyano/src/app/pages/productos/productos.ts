import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoCard } from '../../components/producto-card/producto-card';

@Component({
  imports: [ProductoCard],
  selector: 'app-productos',
  styleUrl: './productos.css',
  templateUrl: './productos.html',
})
export class Productos {
  productos: Producto[] = [
    { titulo: 'Osaka Pro Tour 100 2.0 - Proto Bow', subtitulo: 'Palo de élite (98% carbono / 2% kevlar), potente y veloz, con curvatura Proto Bow (24 mm a 200 mm) para máximo control de especialistas.', precio: '$799.000,00', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbaOqVMzIp9cWgFRsnK_WLvapPiW8BvZ88fto8Z_sa4w&s=10'},
    { titulo: 'Osaka Pro Tour Stickbag XL 2.0 - Iconic Black', subtitulo: 'El Osaka Pro Tour 100 Proto Bow es un palo de hockey de élite fabricado con 98% de carbono y 2% de kevlar para ofrecer máxima potencia, velocidad y un control inigualable en el campo.', precio: '$390.000,00', image:'https://acdn-us.mitiendanube.com/stores/005/296/339/products/bag00062_9013_1_pro-tour-stickbag-xl-2-0_iconic-black-a08dd55e9af895dcaf17392955867064-1024-1024.webp' },
    { titulo: 'Osaka Footwear RYU - Iconic White', subtitulo: 'La Osaka Ryu es una zapatilla de alto rendimiento diseñada para velocidad, control y estabilidad en hockey, pádel o entrenamiento. Su estructura liviana y reactiva asegura una respuesta precisa y segura en movimientos explosivos.', precio: '$325.000,00', image:'https://acdn-us.mitiendanube.com/stores/005/296/339/products/ftw00049_1022_1_ryu_iconic-white-49fdfe300f4361612217901012599693-1024-1024.webp' },
    { titulo: 'Osaka Proto Bow 85 - Navy Peony', subtitulo: 'El Osaka Proto Bow 85 - Navy Peony es un palo de hockey de alto rendimiento compuesto por 85% carbono, 15% fibra de vidrio y 5% kevlar. Ofrece una excelente potencia de golpeo manteniendo una gran sensibilidad para el control de la bocha.', precio: '$530.000,00' , image:'https://acdn-us.mitiendanube.com/stores/005/296/339/products/stk00370_6099_1_proto-bow-85_navy-peony-e912466083d44af8f517745509657005-1024-1024.webp'},
    { titulo: 'Osaka Sports Stickbag Large - Peony', subtitulo: 'La Osaka Sports Stickbag Large - Peony es una funda de hockey de alto rendimiento con capacidad de 48 litros para llevar hasta 4 palos. Está confeccionada en poliéster 600D ultra resistente para garantizar máxima durabilidad en el uso diario.', precio:'$195.000,00', image:'https://acdn-us.mitiendanube.com/stores/005/296/339/products/bag00121_6086_1_sports-stickbag-large_peony-bdcdde445601b0d55d17539858458982-1024-1024.webp' },
    { titulo: 'Osaka Footwear Kai Mk1 - Blue Topaz', subtitulo: 'La Osaka Kai MK1 - Pro Tour es una zapatilla de alto rendimiento diseñada para brindar versatilidad, estabilidad y confort en hockey, pádel o entrenamiento. Su estructura liviana favorece movimientos rápidos y una respuesta precisa en distintas superficies.', precio: '$245.000,00', image:'https://acdn-us.mitiendanube.com/stores/005/296/339/products/ftw00044_6005_1_kai-mk1-pro-tour_blue-topaz-c0f833be1df75138e817901010357126-1024-1024.webp' },
    { titulo: 'Hub USB-C', subtitulo: '', precio: '', image:'' },
    { titulo: 'Hub USB-C', subtitulo: '', precio: '', image:'' },
];
}
