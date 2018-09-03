import {Component, Input, OnInit} from '@angular/core';
import {IngredientListBuilder} from '../../classes/ingredient-list-builder';


@Component({
  selector: 'app-step-complete',
  templateUrl: './step-complete.component.html',
  styleUrls: ['./step-complete.component.css']
})
export class StepCompleteComponent implements OnInit {

  constructor() {
  }


  private timerPause = false;

  @Input() elementState: string;
  @Input() list: any[];
  @Input() item: any;
  @Input() itemIterator: number;
  @Input() itemType: string;
  @Input() seconds = 1;

  ngOnInit() {
  }


  /**
   * Sets state of ingredients and methods. Validation is performed on ingredients on its previous instances in the list for their state.
   * This function is triggered by tapping the tick button on the html.
   * For non timed functions there are two states, IDLE and DONE.
   * Timed Functions there are four states, IDLE, RUNNING, PAUSED, and DONE.
   */
  setDone() {

    if (this.itemType === 'ingredient') {
      const isStateChangeable = IngredientListBuilder.checkParentIngredientStates(this.list, this.itemIterator, this.item.type);

      // If parent states are in the correct state (e.g. all ingredients with add=start DONE) then current ingredient state may change.
      if (isStateChangeable === true) {
        this.list[this.itemIterator].buttonState = 'DONE';

      }
    } else if (this.itemType === 'method') {

      if (this.item.duration !== null && this.item.duration > 0 && this.item.buttonState === 'IDLE') {
        this.countdown();
        this.list[this.itemIterator].buttonState = 'RUNNING';

      } else if (this.item.buttonState === 'RUNNING') {

        this.timerPause = true;
        this.list[this.itemIterator].buttonState = 'PAUSED';
      } else if (this.item.buttonState === 'PAUSED') {

        this.timerPause = false;
        this.list[this.itemIterator].buttonState = 'RUNNING';
      } else {

        this.list[this.itemIterator].buttonState = 'DONE';
      }
    }
  }


  /**
   * Countdown timer function, which on command will start a countdown and terminate upon reaching a 0 value
   */
  countdown() {

    const countDownTimer = setInterval(() => {

      if (this.timerPause === false) {
        this.list[this.itemIterator].duration = this.list[this.itemIterator].duration - 1;

      }

      // Set state to DONE and reset the counter
      if (this.list[this.itemIterator].duration === 0) {
        this.list[this.itemIterator].buttonState = 'DONE';
        clearInterval(countDownTimer);

      }
    }, 1000 * this.seconds);
  }
}
