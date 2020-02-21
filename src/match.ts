export class Match {
	private matchId: number;
	private playerHomeId: number; //keine Anpassung nach Initialisierung
	private playerAwayId: number;
	playerHomeScore: number;
	playerAwayScore: number;
	
	constructor(playerHomeId?: number, playerAwayId?: number) {//? = optionaler Parameter, entweder alle oder keine optional
		this.matchId = 1;
		this.playerHomeId = playerHomeId;
		this.playerAwayId = playerAwayId;
	}
	
	getWinner() {
		if (this.playerHomeScore > this.playerAwayScore) {
			return this.playerHomeScore;
		} else if(this.playerAwayScore > this.playerHomeScore) {
			return this.playerAwayScore;
		}
		return 0;
	}
	
	setResult(playerHomeScore: number, playerAwayScore: number) {
		this.playerHomeScore = playerHomeScore;
		this.playerAwayScore = playerAwayScore;
	}
	
	//Properties:
	getPlayerAwayScore() {
		return this.playerAwayScore;
	}
	
	setPlayerAwayScore(value) {
		this.playerAwayScore = value;
	}
	
}

/*let match = new Match();
match.playerAwayId = 1;
match.playerHomeId = 2;*/

//access Modifiers: public, private, protected