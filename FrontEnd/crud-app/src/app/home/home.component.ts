import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  serverDetails : any[] = [];
  currentID = "";
  name: string ="";
  id: string ="";
  language: string ="";
  framework: string ="";

  originalServerDetails: any[] = [];
  originalServerDetail: any[] = [];
  searchServer: string = '';
  isEditing: boolean = false;

  constructor(private http: HttpClient) 
  {
    this.getAllRecords();
  }

  getAllRecords() {
    this.http.get("http://localhost:8000/read")
    .subscribe((resultData: any)=>
    {
        console.log(resultData);
        this.serverDetails = resultData.data;
        this.originalServerDetails = [...this.serverDetails];
    });    
  }
  
  getRecordsByName() {
    this.http.get(`http://localhost:8000/read/${this.searchServer}`)
      .subscribe(
        (resultData: any) => {
          console.log(resultData);
          this.serverDetails = resultData;
          this.originalServerDetail = [this.serverDetails];

        },
        (error) => {
          if (error.status === 404) {
            alert('Record not found');
          } else {
            alert(`Error fetching records by name: ${error}`);
          }
        }
      );
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

  editButtonClicked(data: any) {
    this.isEditing = true;
    this.name = data.name;
    this.id = data.id;
    this.language = data.language;
    this.framework = data.framework;
    this.currentID = data._id;
  }

  update()
  {
    if(this.currentID == '')
    {
        this.save();
    }
    else
    {
      this.UpdateRecords();
    }       
  }

  UpdateRecords()
  {
    let bodyData = {
      "name" : this.name,
      "id" : this.id,
      "language" : this.language,
      "framework" : this.framework
    };
    
    this.http.patch("http://localhost:8000/update"+ "/"+this.currentID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Server details updated!")
        this.getAllRecords();
      
    });
    this.isEditing = false;
  }

  delete(data: any) {
    const confirmed = confirm("Are you sure you want to delete this record?");
    if (confirmed) {
      this.http.delete("http://localhost:8000/delete"+ "/"+ data._id).subscribe((resultData: any)=>
      {
        console.log(resultData);
        alert("Server details deleted!");
        this.getAllRecords();    
      });
    }
  }
}
