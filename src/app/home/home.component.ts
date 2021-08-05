import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  //==styleUrls: ['./home.component.css']
})
export class HomeComponent {
    items: MenuItem[]=[];
  constructor() { }

  ngOnInit() {
    this.items = [
        {
            label:'home',
            icon:'pi pi pi-home',
            routerLink: '/',
            items:[
                {
                    label:'Left',
                    icon:'pi pi-fw pi-align-left',
                },
            ]
        },
        {
            label:'User',
            icon:'pi pi-fw pi-user',
            items:[
                {
                    label:'New User',
                    icon:'pi pi-fw pi-plus',
                    routerLink: 'register-User'
                },
                {
                    label:'Login',
                    icon:'pi pi-fw pi-user-plus',
                    routerLink: 'login-User'
                },
            ]
        },
        {
            label:'Recipes',
            icon:'pi pi-fw pi-pencil',
            items:[
                {
                    label:'new recipes',
                    icon:'pi pi-fw pi-plus',
                },
                {
                    label:'Remove recipes ',
                    icon:'pi pi-fw pi-minus'
                }, 
            ]
        },

        {
            label:'Events',
            icon:'pi pi-fw pi-calendar',
            items:[
                {
                    label:'Edit',
                    icon:'pi pi-fw pi-pencil',
                    items:[
                    {
                        label:'Save',
                        icon:'pi pi-fw pi-calendar-plus'
                    },
                    {
                        label:'Delete',
                        icon:'pi pi-fw pi-calendar-minus'
                    },

                    ]
                },
                {
                    label:'Archieve',
                    icon:'pi pi-fw pi-calendar-times',
                    items:[
                    {
                        label:'Remove',
                        icon:'pi pi-fw pi-calendar-minus'
                    }
                    ]
                }
            ]
        },

    ];
}    
}

