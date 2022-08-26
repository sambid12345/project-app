import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ITask } from './task';

@Component({
	selector: 'app-to-do',
	templateUrl: './to-do.component.html',
	styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

	taskForm: FormGroup;
	toDoList: ITask[] = [];
	inprogressList: ITask[] = [];
	doneList: ITask[] = [];
	isEditEnabled: boolean = false;
	updatedIndex: number=-1;
	constructor(private fb: FormBuilder) { }

	ngOnInit(): void {
		this.taskForm = this.fb.group({
			task: [null, []]
		})
	}
	addTask(){
		console.log(this.taskForm.get('task').value);
		if(this.taskForm.get('task').value ==null || this.taskForm.get('task').value ==undefined)
			return;
		this.toDoList.push({
			description: this.taskForm.get('task').value,
    		isDone:false
		});
		this.taskForm.reset();
	}
	updateTask(){
		if(this.taskForm.get('task').value ==null || this.taskForm.get('task').value ==undefined)
			return;
		this.toDoList[this.updatedIndex].description = this.taskForm.get('task').value;
		this.toDoList[this.updatedIndex].isDone = false;
		this.taskForm.reset();
		this.isEditEnabled = false;
		this.updatedIndex = -1;
	}
	drop(event: CdkDragDrop<ITask[]>) {
		if (event.previousContainer === event.container) {
		  moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
		  transferArrayItem(
			event.previousContainer.data,
			event.container.data,
			event.previousIndex,
			event.currentIndex,
		  );
		}
	}
	deleteItem(index: number, section: string){
		switch(section){
			case 'toDo':
				this.toDoList.splice(index,1);
				return;
			case 'inprogress':
				this.inprogressList.splice(index,1);
				return;
			case 'done':
				this.doneList.splice(index,1);
				return;
		}
		
	}
	editItem(index: number, item: ITask){
		this.taskForm.controls['task'].setValue(item.description);
		this.updatedIndex = index;
		this.isEditEnabled = true;
	}
}
