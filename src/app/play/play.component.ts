import { Component, Input } from '@angular/core';
import { Play } from './play';

@Component({
	selector: 'app-play',
	templateUrl: './play.component.html',
	styleUrls: ['./play.component.scss']
})

export class PlayComponent {
	@Input() play: Play;
}
