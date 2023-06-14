import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{

  constructor(
    private authService: AuthService){

  }

  excursions = [{
    name:"Екскурсія територією музею «Звідки починався Київ»",
  src:"https://tickikids.ams3.cdn.digitaloceanspaces.com/z1.cache/gallery/activities/59380/image_6273d6ad82a491.40322783.jpg       ",
  category:"діти від 8 років та дорослі",
  duration:45,
  count: "1–15 осіб",
  cost:250,
  desc: "Екскурсія Старокиївською горою, найдавнішою частиною Києва. Під час заходу ви дізнаєтеся, коли та як виникло наше місто, про утворення держави Русь, відвідаєте місця, де колись височіли князівські палаци. Поговоримо про політичні інтриги перших князів, хрещення Русі, боротьбу з язичництвом і будівництво першого кам’яного храму – Десятинної церкви."
  }]

  ngOnInit(){
  this.authService.getBooks().subscribe({next:(data:any) => this.excursions = data})
  }

  
}
