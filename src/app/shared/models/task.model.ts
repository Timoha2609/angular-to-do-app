export class Task {
  id: number;
  title: string;
  note: string;
  status:'finished'|'pending'|'not started'='not started';
  difficulty:number=1;

  constructor(title: string = '', 
  note: string = '', 
  id: number = null,
  status:'finished'|'pending'|'not started'='not started',
  difficulty:number=1) {
    this.title = title;
    this.note = note;
    this.id = id;
    this.status=status;
    this.difficulty=difficulty;
  }
}
