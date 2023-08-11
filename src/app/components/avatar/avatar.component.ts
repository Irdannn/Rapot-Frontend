import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateform';
import { Avatar } from 'src/app/models/avatar';
import { UserProfile } from 'src/app/models/userProfile';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { AvatarService } from 'src/app/services/avatar.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  user:UserProfile  = new UserProfile();
  updateAvatarForm!: FormGroup;
  selectedFile: File | null = null;

  public id:string = "";

  constructor(
    private route : ActivatedRoute,
    private api : ApiService,
    private toast : NgToastService,
    private apiAvatar : AvatarService,
    private fb : FormBuilder,
    private router : Router,
    private location: Location,
    private userStore: UserStoreService,
    private auth: AuthService
    ) { 
  }

  ngOnInit(){
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.api.getUserProfile(id)
          .subscribe({
            next: (response) => {
              this.user = response;
            }
          })
        }
      }
    });
    this.updateAvatarForm = this.fb.group({
      user_id: ['', Validators.required],
      avatar: [File]
    });
    this.userStore.getIDFromStore()
    .subscribe(val=>{
      let idFromToken = this.auth.getIdFromToken()
      this.id=val || idFromToken;
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  updateAvatar(){
    if (!this.selectedFile) {
      return;
    }

    if(this.updateAvatarForm.valid) {

    const formData = new FormData();
    formData.append('user_id',this.updateAvatarForm.value.user_id);
    formData.append('avatar', this.selectedFile);
    this.apiAvatar.addAvatar(formData)
      .subscribe({
        next:()=>{
          this.toast.success({detail: "BERHASIL!", summary:"Sukses Mengubah Foto Profile", duration: 5000});
          this.router.navigate(['profile', this.id])
          this.updateAvatarForm.reset();
        },
        error:()=>{
          this.toast.error({detail: "ERROR", summary:"Oops, ada Api yang salah!", duration: 5000});
        }
      })
    }else {
        console.log("form is not valid")
        // check if the form is invalid
        ValidateForm.validateAllformsFields(this.updateAvatarForm);
        this.toast.error({detail: "ERROR", summary:"Input Invalid, pastikan semua sudah diisi", duration: 5000});   
}
  }

  goBack(): void {
    this.location.back();
  }
}