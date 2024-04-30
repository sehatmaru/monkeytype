import { Component, OnInit } from '@angular/core';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUser, } from '@fortawesome/free-regular-svg-icons';
import { faGear, faInfo, faCrown, faHashtag, faAt, faA, faQuoteLeft, faWrench, faScrewdriverWrench, faMountain, faCircleDollarToSlot, faCode, faFileContract, faShield, faLock, faPalette, faCodeBranch, faGlobeAmericas, faRotateRight, faKeyboard, faBell, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

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

  words: {value: string, status: string}[][] = [
    [{value: 's', status: ''},{value: 'a', status: ''},{value: 'b', status: ''},{value: 'a', status: ''},{value: 'r', status: ''},{value: ' ', status: ''}],
    [{value: 't', status: ''},{value: 'o', status: ''},{value: 'l', status: ''},{value: 'o', status: ''},{value: 'n', status: ''},{value: 'g', status: ''},{value: ' ', status: ''}],
    [{value: 'm', status: ''},{value: 'e', status: ''},{value: 's', status: ''},{value: 'k', status: ''},{value: 'i', status: ''},{value: ' ', status: ''}],
    [{value: 'a', status: ''},{value: 'p', status: ''},{value: 'a', status: ''},{value: 'l', status: ''},{value: 'a', status: ''},{value: 'g', status: ''},{value: 'i', status: ''},{value: ' ', status: ''}],
    [{value: 'b', status: ''},{value: 'e', status: ''},{value: 'b', status: ''},{value: 'e', status: ''},{value: 'r', status: ''},{value: 'a', status: ''},{value: 'p', status: ''},{value: 'a', status: ''},{value: ' ', status: ''}],
    [{value: 't', status: ''},{value: 'i', status: ''},{value: 'd', status: ''},{value: 'a', status: ''},{value: 'k', status: ''},{value: ' ', status: ''}],
    [{value: 'a', status: ''},{value: 'n', status: ''},{value: 'g', status: ''},{value: 'k', status: ''},{value: 'a', status: ''},{value: ' ', status: ''}],
    [{value: 'a', status: ''},{value: 'n', status: ''},{value: 'a', status: ''},{value: 'k', status: ''},{value: ' ', status: ''}],
    [{value: 'r', status: ''},{value: 'a', status: ''},{value: 'g', status: ''},{value: 'a', status: ''},{value: 'm', status: ''},{value: ' ', status: ''}],
    [{value: 'd', status: ''},{value: 'e', status: ''},{value: 's', status: ''},{value: 'a', status: ''},{value: ' ', status: ''}],
    [{value: 'b', status: ''},{value: 'e', status: ''},{value: 'l', status: ''},{value: 'u', status: ''},{value: 'm', status: ''},{value: ' ', status: ''}],
    [{value: 'a', status: ''},{value: 'n', status: ''},{value: 'd', status: ''},{value: 'a', status: ''},{value: ' ', status: ''}],
    [{value: 'n', status: ''},{value: 'i', status: ''},{value: 'k', status: ''},{value: 'm', status: ''},{value: 'a', status: ''},{value: 't', status: ''},{value: ' ', status: ''}],
    [{value: 's', status: ''},{value: 'e', status: ''},{value: 'l', status: ''},{value: 'a', status: ''},{value: 'n', status: ''},{value: 'j', status: ''},{value: 'u', status: ''},{value: 't', status: ''},{value: 'n', status: ''},{value: 'y', status: ''},{value: 'a', status: ''},{value: ' ', status: ''}],
    [{value: 'l', status: ''},{value: 'a', status: ''},{value: 'g', status: ''},{value: 'i', status: ''},{value: 'p', status: ''},{value: 'u', status: ''},{value: 'l', status: ''},{value: 'a', status: ''},{value: ' ', status: ''}],
    [{value: 'm', status: ''},{value: 'a', status: ''},{value: 'n', status: ''},{value: 'a', status: ''},{value: ' ', status: ''}],
    [{value: 'd', status: ''},{value: 'e', status: ''},{value: 'm', status: ''},{value: 'i', status: ''},{value: ' ', status: ''}],
    [{value: 'r', status: ''},{value: 'a', status: ''},{value: 'g', status: ''},{value: 'a', status: ''},{value: 'm', status: ''},{value: ' ', status: ''}],
    [{value: 'm', status: ''},{value: 'e', status: ''},{value: 'n', status: ''},{value: 'a', status: ''},{value: 'n', status: ''},{value: 'g', status: ''},{value: ' ', status: ''}],
    [{value: 'm', status: ''},{value: 'a', status: ''},{value: 'a', status: ''},{value: 'f', status: ''},{value: ' ', status: ''}],
    [{value: 'b', status: ''},{value: 'e', status: ''},{value: 'b', status: ''},{value: 'e', status: ''},{value: 'r', status: ''},{value: 'a', status: ''},{value: 'p', status: ''},{value: 'a', status: ''},{value: ' ', status: ''}],
    [{value: 'k', status: ''},{value: 'e', status: ''},{value: 'r', status: ''},{value: 't', status: ''},{value: 'a', status: ''},{value: 's', status: ''},{value: ' ', status: ''}],
    [{value: 'p', status: ''},{value: 'u', status: ''},{value: 'b', status: ''},{value: 'l', status: ''},{value: 'i', status: ''},{value: 'k', status: ''},{value: ' ', status: ''}],
    [{value: 'm', status: ''},{value: 'e', status: ''},{value: 'l', status: ''},{value: 'a', status: ''},{value: 'l', status: ''},{value: 'u', status: ''},{value: 'i', status: ''},{value: ' ', status: ''}],
    [{value: 'y', status: ''},{value: 'a', status: ''},{value: 'k', status: ''},{value: 'i', status: ''},{value: 'n', status: ''},{value: ' ', status: ''}],
    [{value: 'b', status: ''},{value: 'e', status: ''},{value: 'r', status: ''},{value: 'm', status: ''},{value: 'a', status: ''},{value: 'i', status: ''},{value: 'n', status: ''},{value: ' ', status: ''}],
    [{value: 'm', status: ''},{value: 'e', status: ''},{value: 'n', status: ''},{value: 'g', status: ''},{value: 'e', status: ''},{value: 'n', status: ''},{value: 'a', status: ''},{value: 'i', status: ''},{value: ' ', status: ''}],
    [{value: 'p', status: ''},{value: 'r', status: ''},{value: 'i', status: ''},{value: 'a', status: ''},{value: ' ', status: ''}],
    [{value: 't', status: ''},{value: 'o', status: ''},{value: 'l', status: ''},{value: 'o', status: ''},{value: 'n', status: ''},{value: 'g', status: ''},{value: ' ', status: ''}],
    [{value: 'b', status: ''},{value: 'a', status: ''},{value: 'k', status: ''},{value: 'u', status: ''},{value: ' ', status: ''}],
    [{value: 'j', status: ''},{value: 'a', status: ''},{value: 'r', status: ''},{value: 'a', status: ''},{value: 'n', status: ''},{value: 'g', status: ''},{value: ' ', status: ''}],
    [{value: 't', status: ''},{value: 'e', status: ''},{value: 'r', status: ''},{value: 'n', status: ''},{value: 'y', status: ''},{value: 'a', status: ''},{value: 't', status: ''},{value: 'a', status: ''},{value: ' ', status: ''}],
    [{value: 'c', status: ''},{value: 'a', status: ''},{value: 'n', status: ''},{value: 't', status: ''},{value: 'i', status: ''},{value: 'k', status: ''},{value: ' ', status: ''}],
    [{value: 's', status: ''},{value: 'e', status: ''},{value: 'r', status: ''},{value: 'u', status: ''},{value: ' ', status: ''}],
    [{value: 'm', status: ''},{value: 'u', status: ''},{value: 'n', status: ''},{value: 'g', status: ''},{value: 'k', status: ''},{value: 'i', status: ''},{value: 'n', status: ''},{value: ' ', status: ''}],
    [{value: 'm', status: ''},{value: 'e', status: ''},{value: 's', status: ''},{value: 'k', status: ''},{value: 'i', status: ''},{value: ' ', status: ''}],
    [{value: 'a', status: ''},{value: 'y', status: ''},{value: 'o', status: ''},{value: ' ', status: ''}],
  ]

  currentWordArray = 0
  currentLetterArray = 0

  currentLetter = ''

  caretStyle = {
    left: 5,
    top: 4
  }

  isOdd = true
  increment = 14

  constructor() {

  }

  ngOnInit(): void {
    this.currentLetter = this.words[0][0].value;
  }

  onKeyDown(event: KeyboardEvent) {
    console.log('Key pressed:', event.key);
    console.log('odd:', this.isOdd);

    const value = event.key
    const mutedKey = ['Meta', 'Shift', 'Enter', 'Alt', 'Control', 'Tab', 'KanjiMode', 'Escape']

    if (!mutedKey.filter(e => value == e).length) {
      this.updateLetter(value)
    }
  }

  updateLetter(value: string) {
    this.words[this.currentWordArray][this.currentLetterArray].status = this.currentLetter == value ? 'correct' : 'incorrect';
    console.log(`w ${this.currentWordArray} , l ${this.currentLetterArray} = ${this.currentLetter}`);

    if ((this.words[0].length-2 == this.currentLetterArray && value == ' ') || value == ' ') {
      this.currentWordArray += 1
      this.currentLetterArray = 0
      this.increment = 12
    } else if (value == 'Backspace') {
      if (this.currentLetterArray == 0) {
        this.currentWordArray -=1
        this.currentLetterArray = this.words[this.currentWordArray].length-2
      }

      this.currentLetterArray -= 1
      this.caretStyle.left -= 15
    } else {
      this.currentLetterArray += 1
      this.increment = this.isOdd ? 14 : 15
    }

    this.currentLetter = this.words[this.currentWordArray][this.currentLetterArray].value
    this.caretStyle.left += this.increment
    this.isOdd = !this.isOdd

    console.log(`> w ${this.currentWordArray} , l ${this.currentLetterArray} = ${this.currentLetter}`);
  }

}
