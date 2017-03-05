import {Component} from '@angular/core';
import {DataTableModule, TreeTableModule,TreeNode,SharedModule} from 'primeng/primeng';
import {Http} from "@angular/http";     //accordion and accordion tab

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  data;

  constructor(private http: Http){
    this.http.get("./app/home/step2compliance.json").subscribe((data) => {
      console.log(data.json());
      this.data = data.json();
      this.setDataTable();
      this.setCertifcateIssuers();
      this.setCertifcateExpiring();
    });
  }

  certifcateExpiring;

  setCertifcateExpiring(){
    this.certifcateExpiring = {
      labels: ['Recently Expired','Under 30','30 to 60', '60 to 90', 'Over 90'],
      datasets: [
        {
          data: [this.data["CertificateExpired"],this.data["CertificateExpiringUnder30"],this.data["CertificateExpiring30to60"],this.data["CertificateExpiring60to90"],this.data["CertifcateExpiringOver90"]],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "green"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "green"
          ]
        }]
    };
  }

  setCertifcateIssuers(){
    let data = {
      labels: [],
        datasets: [
      {
        data: [],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "green"
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "green"
        ]
      }]
    };

    let obj = {};

    for(let item of this.data.Certificates){
      console.log(item)
      if(obj[item.Issuer]){
        obj[item.Issuer] = obj[item.Issuer] + 1;
      }else {
        obj[item.Issuer] = 1;
      }
    }

    for(let key in obj){
      data.labels.push(key);
      data.datasets[0].data.push(obj[key]);
    }

    this.certifcateIssuers = data;
  }

  certifcateIssuers;

  selectIssuers(e){
    console.log(e.element._model.label)
    this.http.get("./app/home/step2compliance.json").subscribe((data) => {
      this.data = data.json();
      this.setDataTable();
      this.dataTable = this.dataTable.filter((item) => {
        console.log(item,item.issuer , e.element._model.label)
        return item.issuer === e.element._model.label
      })
    });
  }

  selectExpiring(e){
    console.log(e)
  }

  dataTable;

  refresh(){
    this.http.get("./app/home/step2compliance.json").subscribe((data) => {
      this.data = data.json();
      this.setDataTable();
    });
  }

  setDataTable(){
    this.dataTable = [];

    for(let item of this.data.Certificates){
      this.dataTable.push({
          "subject": item.Subject,
          "issuer": item.Issuer,
          "overlapping": item.OverlappingCount,
          "overlappingby": item.OverlappingCount,
          "grade": item.SecurityGrade,
          "expires": this.getDate(item.Expires),
          "alt": item.AltNameCount,
        "OverlappingCertificateIds": item.OverlappingCertificateIds,
        "AltNames": item.AltNames
      })
    }
  }

  getDate(d){
    let date = new Date(d);
    return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
  }

  files: TreeNode =
    [
      {
        "data":{
          "name":"Documents",
          "size":"75kb",
          "type":"Folder"
        },
        "children":[
          {
            "data":{
              "name":"Work",
              "size":"55kb",
              "type":"Folder"
            },
            "children":[
              {
                "data":{
                  "name":"Expenses.doc",
                  "size":"30kb",
                  "type":"Document"
                }
              },
              {
                "data":{
                  "name":"Resume.doc",
                  "size":"25kb",
                  "type":"Resume"
                }
              }
              ]
          },
          {
            "data":{
              "name":"Home",
              "size":"20kb",
              "type":"Folder"
            },
            "children":[
              {
                "data":{
                  "name":"Invoices",
                  "size":"20kb",
                  "type":"Text"
                }
              }
              ]
          }
          ]
      },
      {
        "data":{
          "name":"Pictures",
          "size":"150kb",
          "type":"Folder"
        },
        "children":[
          {
            "data":{
              "name":"barcelona.jpg",
              "size":"90kb",
              "type":"Picture"
            }
          },
          {
            "data":{
              "name":"primeui.png",
              "size":"30kb",
              "type":"Picture"
            }
          },
          {
            "data":{
              "name":"optimus.jpg",
              "size":"30kb",
              "type":"Picture"
            }
          }
          ]
      }
      ]


}
