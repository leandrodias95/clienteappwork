import { Component, OnInit} from '@angular/core';
import { faTachometer, faColumns, faAngleDown, faBookOpen, faChartArea, faTable, faMoneyBill, faPowerOff  } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
fatachometer= faTachometer
facolumns= faColumns;
faangledown= faAngleDown;
fabookopen= faBookOpen;
fachartarea= faChartArea;
fatable= faTable;
faMoneyBill= faMoneyBill;
faPowerOff= faPowerOff;
usuario: String="";
constructor(private authService: AuthService){
}
  ngOnInit(): void {
    this.usuario= this.authService.nomeDoUsuario;
  }

}
