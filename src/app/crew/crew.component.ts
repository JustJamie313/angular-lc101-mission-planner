import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];
  hovered:object = {};

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg', skills:["Physicist", "Astrophysics"], hoursInSpace:343},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg', skills:["Physician", "Chemical Engineer"], hoursInSpace:190},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg', skills:["Physics", "Electrical Engineer"], hoursInSpace:979},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg', skills:["Information Systems", "Shuttle Pilot", "Fighter Pilot","Helicopter Pilot"], hoursInSpace:455},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg', skills:["Aerospace Engineer", "Philosophy", "Physics","Fighter Pilot"], hoursInSpace:686},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg', skills:["Physician", "Surgeon", "Emergency Medicine"], hoursInSpace:15},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg', skills:["Physicist", "Philosophy", "Aerospace Engineer"], hoursInSpace:343}
  ];
  memberBeingEdited: object = null;

  constructor() { }

  ngOnInit() { }

  addCrewMember(candidate){
    if(!this.crew.includes(candidate)){
      if(this.crew.length<3){
        this.crew.push(candidate);
      }
    } else {
      this.crew.splice(this.crew.indexOf(candidate),1);
      this.hovered = {};
    }
  }
}
