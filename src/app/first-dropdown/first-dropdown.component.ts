import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-first-dropdown',
  templateUrl: './first-dropdown.component.html',
  styleUrls: ['./first-dropdown.component.css']
})
export class FirstDropdownComponent implements OnInit {
  @ViewChild('dropdownContent') dropdownContentElement: ElementRef;

  constructor() { 

  }

  ngOnInit() {
  }

  toggleDropdown() {
    this.dropdownContentElement.nativeElement.classList.toggle("show");
    window.addEventListener("click", this.closeDropdown);
  }
  closeDropdown() {
    this.dropdownContentElement.nativeElement.classList.toggle("show");
    window.addEventListener("click", this.closeDropdown);
  }
}
