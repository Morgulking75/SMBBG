import { Player } from './player';
import { Game } from '../game/game';

export class Play {
	public id: number;
	public display: string;
	public start: Date;
	public end: Date;
	public game: Game;
	public players: Array<Player>;

	constructor(game: Game, players: Array<Player>) {
		this.game = game;
		this.players = players;
	}
}
