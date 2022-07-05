import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';


@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

	private userSub: Subscription;
	isAunthicated = false;
	collapsed = true;
	constructor(private dataStorageSrvice: DataStorageService, private authService: AuthService) { }

	ngOnInit(): void {
		this.userSub = this.authService.user.subscribe(user =>{
			this.isAunthicated = user?true:false;
			console.log(this.isAunthicated);
		});
	}
	onChange(value: any){
		console.log(value);
		if(value === 'Save Data'){
			this.dataStorageSrvice.storeRecipe().subscribe();
		}else if(value === 'Fetch Data'){
			this.dataStorageSrvice.fetchRecipe().subscribe();
		}
	}
	onLogOut(){
		this.authService.logOut();
	}
	ngOnDestroy(): void {
		this.userSub.unsubscribe();
	}
}
