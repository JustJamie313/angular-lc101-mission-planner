import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiments = ["Mars soil sample","Plant growth in habitat","Human bone density"];
  experimentBeingEdited: string = '';
  constructor() { }

  ngOnInit() {
  }
  add(experiment: string){
    if(experiment){
      if(!this.experiments.includes(experiment)){
        this.experiments.push(experiment);
      }
    }
  }
  edit(experiment: string){
    this.experimentBeingEdited = experiment;
  }
  save(newValue: string,currentValue: string){
    this.experiments.splice(this.experiments.indexOf(currentValue),1,newValue);
    this.experimentBeingEdited = '';
  }
  remove(experiment: string){
    this.experiments.splice(this.experiments.indexOf(experiment),1);
  }
}
