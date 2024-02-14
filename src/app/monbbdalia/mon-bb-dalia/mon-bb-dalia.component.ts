import {Component, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";


interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-mon-bb-dalia',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
  ],
  templateUrl: './mon-bb-dalia.component.html',
  styleUrl: './mon-bb-dalia.component.css'
})
export class MonBbDaliaComponent implements OnInit{
  lastMessage=''
  showMessage = false;
showEtapeUne = false
  showEtapeDeux = false;
  errorMessage= ''
  showErrorMessage1= false;
  showErrorMessage2= false;
  value: string = '';
  disabledButton = false;
  disabledButton0 = false;
  disabledButton1 = false;
  showEtapeTrois = false;
  showEtapeQuatre = false;
  cities: City[] | undefined;
  intervalId : any;
  intervalId2 : any;
  intervalId3 : any;
  selectedCity: City | undefined;
  disabledButton2 = false;
  value2: string='';
  disabledButton3: boolean = false;
  showEtapeCinq: boolean = false;
  disabledButton4: boolean = false;
  showEtapeDix: boolean = false;
myArr =['M','e','r','c','i',' ','d','´', 'a','v','o','i','r',' ','p','a','t','i','c','i','p','é',' ','a','u',' ','j','e','u','x','!']
  myArr1 =['J','e',' ','v','o','u','l','a', 'i','s',' ','j','u','s','t','e', ' ','t','e',' ','d','i','r','e',' ','q','u','e',' ','j','e',' ',
    't','´','a','i','m','e']

  myArr2 =[' ','e','t', ' ', 'q','u','e', ' ', 'j','e', ' ', 's','u','i','s',
    ' ','h','e','u','r','e','u','x', ' ', 'a','v','e','c', ' ', 't','o','i','!']
  lastMessage2: string = '';
  lastMessage3: string = '';
  dernier: boolean = false;

  etapeUne() {
    this.showEtapeUne= true;
    this.disabledButton=true;
  }

  etapeUneCheck() {
if(this.value != 'dalia' && this.value != 'Dalia'){
  this.errorMessage= 'Tu fais semblant de ne pas connaître hein?'
}
else {
 this.errorMessage=''
  this.showEtapeDeux=true;
 this.disabledButton0=true;
}
  }

  etapeDeux() {
    this.showEtapeTrois=true;
    this.disabledButton1=true;
  }


  ngOnInit() {
    this.cities = [
      { name: 'Mon gar mon combat', code: 'Mon gar mon combat' },
      { name: 'Mon ecole mon combat', code: 'Mon ecole mon combat' },
    ];

    }

  etapeDeuxCheck() {
    if(this.selectedCity?.name != 'Mon gar mon combat'){
      this.showErrorMessage1= true
      this.showErrorMessage2= false;
    }
    else {
      this.showErrorMessage1= false;
      this.showErrorMessage2= true;
      this.showEtapeDix = true;
    }
  }

  etapeTrois() {
    this.showEtapeQuatre=true;
    this.disabledButton2= true;
  }

  etapeQuatre() {
    if(this.value2 != '' && this.value2.length>3){
      this.disabledButton3= true;
      this.showMessage = true;
      this.showEtapeCinq= true;
    }

  }

  etapeCinq() {
    this.disabledButton4= true;
    this.setLastMessage();
  }
  setLastMessage(){
    let vari = false;
  let index =0;
    let index1 =0;
    let index2 =0;
    this.intervalId= setInterval(()=>{
      this.lastMessage= this.lastMessage+ this.myArr[index];
      index++;
      console.log('te', this.myArr[index])
      if(index ==this.myArr.length){
        this.clear()
        this.intervalId2= setInterval(()=>{
          this.lastMessage2= this.lastMessage2+ this.myArr1[index1];
          index1++;
          if(index1 ==this.myArr1.length) {
            this.clear2()
            this.intervalId3= setInterval(()=>{
              this.lastMessage3= this.lastMessage3+ this.myArr2[index2];
              index2++;
              if(index2 ==this.myArr2.length) {
                this.clear3()
                this.dernier= true;
              }
            }, 100)
          }
        }, 100)
      }
    }, 100)


  }

  clear(){
    clearInterval(this.intervalId);
  }
  clear2(){
    clearInterval(this.intervalId2);
  }
  clear3(){
    clearInterval(this.intervalId3);
  }
}
