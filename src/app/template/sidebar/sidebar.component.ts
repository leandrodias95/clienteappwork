import { Component } from '@angular/core';
import { faTachometer, faColumns, faAngleDown, faBookOpen, faChartArea, faTable } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
fatachometer= faTachometer
facolumns= faColumns;
faangledown= faAngleDown;
fabookopen= faBookOpen;
fachartarea= faChartArea;
fatable= faTable;
}
