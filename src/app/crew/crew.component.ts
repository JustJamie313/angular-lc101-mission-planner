import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];
  memberBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }
  add(memberName: string, isFirst: boolean){
    let found:boolean = false;
    this.crew.forEach((member)=>{
      if(member['name'] === memberName){
        found = true;
      }
      
    });
    if(!found){
      this.crew.push({name: memberName, firstMission: isFirst});
    }
  }
  remove(member: object){
    this.crew.splice(this.crew.indexOf(member),1);
  }
  edit(member: object){
    this.memberBeingEdited = member;
  }
  save(name: string, member: object){
    member['name'] = name;
    this.memberBeingEdited = null;
  }
}
