import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome: string = "Dener";
  public idade: number = 29;

  public checkedDisabled: boolean = false;
  public imgSrc: string = "https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2010/10/07/500x_keizersgrachtreguliersgrachtamsterdamcompressed.jpg";
  public imgTitle: string = "Property Binding";

  constructor() { }

  ngOnInit(): void {
  }

  public alertaInfo(){
    alert('Deu bom')
  }

}
