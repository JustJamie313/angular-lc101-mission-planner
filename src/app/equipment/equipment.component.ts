import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipment = ["Habitat dome","Drones","Food containers","Oxygen tanks"];
  itemBeingEdited: string = '';
  constructor() { }

  ngOnInit() {
  }
  add(item: string){
    if(item){
      if(!this.equipment.includes(item)){
        this.equipment.push(item);
      }
    }
  }
  edit(item: string){
    this.itemBeingEdited = item;
  }
  save(newValue: string,currentValue: string){
    this.equipment.splice(this.equipment.indexOf(currentValue),1,newValue);
    this.itemBeingEdited = '';
  }
  remove(item: string){
    this.equipment.splice(this.equipment.indexOf(item),1);
  }
}
