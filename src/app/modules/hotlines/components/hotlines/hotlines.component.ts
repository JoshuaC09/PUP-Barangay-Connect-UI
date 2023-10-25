import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-hotlines',
  templateUrl: './hotlines.component.html',
  styleUrls: ['./hotlines.component.css']
})
export class HotlinesComponent {
  dataSource = new MatTableDataSource([
    { agency: 'Bureau of Fire Protection (BFP)', hotlineNumber: '117', specializedFor: 'Fire emergencies' },
    { agency: 'National Disaster Risk Reduction and Management Council (NDRRMC)', hotlineNumber: '911', specializedFor: 'Disaster-related emergencies' },
    { agency: 'Philippine Red Cross', hotlineNumber: '143', specializedFor: 'Emergency medical services and disaster response' },
    { agency: 'Department of Health (DOH) COVID-19 Hotline', hotlineNumber: '(02) 894-COVID (26843)', specializedFor: 'COVID-19 related inquiries and information' },
    { agency: 'Department of Social Welfare and Development (DSWD)', hotlineNumber: '(02) 931-8101 to 07', specializedFor: 'Social welfare and development concerns' },
    { agency: 'MMDA Metrobase', hotlineNumber: '136', specializedFor: 'Metro Manila traffic and disaster management' },
    { agency: 'PNP Highway Patrol Group', hotlineNumber: '(02) 853-3333', specializedFor: 'Highway and traffic-related concerns' },
    { agency: 'Department of Social Welfare and Development (DSWD)', hotlineNumber: '(02) 895-4417', specializedFor: 'Child abuse and neglect' },
    { agency: 'Department of Health (DOH)', hotlineNumber: '(02) 894-2684', specializedFor: 'Mental health emergencies' },
    { agency: 'Bureau of Immigration (BI)', hotlineNumber: '(02) 881-9999', specializedFor: 'Immigration emergencies' },
    { agency: 'Overseas Workers Welfare Administration (OWWA)', hotlineNumber: '(02) 882-3352', specializedFor: 'Overseas Filipino worker (OFW) concern' },
  ]);   

  displayedColumns: string[] = ['agency', 'hotlineNumber', 'specializedFor'];
}
