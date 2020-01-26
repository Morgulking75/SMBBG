import { Component, OnInit } from '@angular/core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	title = 'smbgg';

	constructor() { }
	public enteredText: string;
	public guessedWords: Map<string, number>;
	public wordList: Map<string, number>;
	public timeTaken = 0;
	public wordCount = 0;
	private scoring: Map<number, number>;
	public totalPoints = 0;
	public showFoundWords = false;

	faAngleDown = faAngleDown;
	faAngleUp = faAngleUp;

	ngOnInit() {
		this.guessedWords = new Map<string, number>();
		this.wordList = new Map<string, number>();
		this.scoring = new Map<number, number>();
		this.scoring[3] = 1;
		this.scoring[4] = 1;
		this.scoring[5] = 2;
		this.scoring[6] = 3;
		this.scoring[7] = 5;
		this.scoring[8] = 11;
	}

	public generateBoard = () => {
	}

	public showOnBoard = () => {
	}
}
