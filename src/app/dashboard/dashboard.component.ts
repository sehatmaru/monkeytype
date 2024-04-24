import { Component, OnInit } from '@angular/core';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faKeyboard, faUser, faBell, faClock, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGear, faInfo, faCrown, faHashtag, faAt, faA, faQuoteLeft, faWrench, faScrewdriverWrench, faMountain, faCircleDollarToSlot, faCode, faFileContract, faShield, faLock, faPalette, faCodeBranch, faGlobeAmericas, faRotateRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'monkeytype';

  faGear = faGear
  faInfo = faInfo
  faCrown = faCrown
  faKeyboard = faKeyboard
  faUser = faUser
  faBell = faBell
  faHashtag = faHashtag
  faAt = faAt
  faClock = faClock
  faA = faA
  faQuote = faQuoteLeft
  faWrench = faWrench
  faScrewdriverWrench = faScrewdriverWrench
  faMountain = faMountain
  faEnvelope = faEnvelope
  faCircleDollarToSlot = faCircleDollarToSlot
  faCode = faCode
  faDiscord = faDiscord
  faTwitter = faTwitter
  faFileContract = faFileContract
  faShield = faShield
  faLock = faLock
  faPalette = faPalette
  faCodeBranch = faCodeBranch
  faGlobeAmericas = faGlobeAmericas
  faRotateRight = faRotateRight

  caretStyle = {
    left: 5,
    top: 4
  }

  constructor() {

  }

  ngOnInit(): void {
      
  }

}
