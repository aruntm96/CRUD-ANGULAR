import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  name : string = "";
  id : string = "";
  language : string = "";
  framework : string = "";

  constructor(private http: HttpClient)
  {
  }

  save()
  {
    let bodyData = {
      "name" : this.name,
      "id" : this.id,
      "language" : this.language,
      "framework" : this.framework 
  };
    this.http.post("http://localhost:8000/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Server saved successfully")
        this.name = '';
        this.id = '';
        this.language  = '';
        this.framework  = '';
    });
  }
}
