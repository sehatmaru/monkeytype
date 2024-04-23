import { Component } from '@angular/core';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faA, faAt, faBell, faCircleDollarToSlot, faClock, faCode, faCodeBranch, faCrown, faEnvelope, faFileContract, faGear, faGlobe, faGlobeAmericas, faHashtag, faInfo, faKeyboard, faLock, faMountain, faPalette, faPencil, faQuoteLeft, faRotateRight, faScrewdriverWrench, faShield, faWrench } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

}
