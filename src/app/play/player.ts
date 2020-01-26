import { User } from '../user/user';
import { OutcomeEnum } from './outcome';

export class Player {
	public id: number;
	public user: User;
	public outcome: OutcomeEnum;

	constructor(user: User) {
		this.user = user;
	}
}
