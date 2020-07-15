import { Component } from '@angular/core';

export interface Table{
    position : number //order 
    name : string //name of the table
    viewType : Component //component or prefered component associated with the view
}