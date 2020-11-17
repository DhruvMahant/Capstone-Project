import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-addnewcompany',
  templateUrl: './addnewcompany.component.html',
  styleUrls: ['./addnewcompany.component.css']
})
export class AddnewcompanyComponent implements OnInit {

  companyRef = new FormGroup({
    company: new FormControl
  });

  result:string;

  constructor(public comService: CompanyService, private router:Router) { }

  ngOnInit(): void {
  }

    addNewCompany():void{
      this.comService.addCompany(this.companyRef.value).subscribe(data=>{

        this.router.navigate(['/companies-list']);
        
      },
      (err) => {this.result = err});
    }


}
