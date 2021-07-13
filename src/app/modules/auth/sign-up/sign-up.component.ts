import { Component, OnDestroy, OnInit, ViewEncapsulation, ɵSWITCH_RENDERER2_FACTORY__POST_R3__ } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { TreoAnimations } from '@treo/animations';
import { AuthService } from 'app/core/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Globals } from '../../../Globlevalidation';

@Component({
    selector     : 'auth-sign-up',
    templateUrl  : './sign-up.component.html',
    styleUrls    : ['./sign-up.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : TreoAnimations
})
export class AuthSignUpComponent implements OnInit
{
    isLinear = true;
    signInForm: FormGroup;
    formNameGroup: FormGroup;
    locationgroup:FormGroup;
    verificationform:FormGroup;
    message: any;

    /**
     * Constructor
     *
     * @param {ActivatedRoute} _activatedRoute
     * @param {AuthService} _authService
     * @param {FormBuilder} _formBuilder
     * @param {Router} _router
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private _router: Router,
        public _globals:Globals
    )
    {
        // Set the defaults
        this.message = null;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
     ngOnInit(): void
     {
         // Create the form
         this.signInForm = this._formBuilder.group({
             email     : ['watkins.andrew@company.com'],
             password  : ['admin'],
             rememberMe: ['']
         });
         this.formNameGroup = this._formBuilder.group({
            mobilenumber : ['',Validators.required],
            OTP: ['',Validators.required],
            ownername : ['',Validators.required],
            shopname : ['',Validators.required],
            email : ['',Validators.required],
            password : ['',Validators.required],
         });
         this.locationgroup = this._formBuilder.group({
            pincode : ['',Validators.required],
            GSTno : ['',Validators.required],
            city : ['',Validators.required],
            state : ['',Validators.required],
        });
         this.verificationform = this._formBuilder.group({
            adharfront : ['',Validators.required],
            adharback : ['',Validators.required]
        });
        this.Pincode();
     }
 
    

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    verify(type,e){
        console.log(e.target.value.length)
        if(type=="mobile" && e.target.value.length==10){
            console.log('data',e.target.value)
            this.verifymobile(e.target.value);
        }
    }

    verifymobile(mobile){
        const data={
            mobileno:mobile
        }
        this._authService.mobbileverify(data, (res) => {
            if (res.success_code === 200) {
                this.Sendotp(data)
            }
          });
    }

    Sendotp(data){
        this._authService.sendotp(data, (res) => {
            if (res.success_code === 200) {
                console.log(res)
            }
          });
    }

    Pincode(){
        this._authService.Pincode(res=> {
            if (res.success_code === 200) {
                console.log(res)
            }
          });
    }

    UploadImage(e,type){
        var fileData =e.target.files[0];
        console.log(fileData)
        var formData1 = new FormData();
        formData1.append('img', fileData);
        console.log(formData1)
        this._authService.Uploadimage(formData1, (res) => {
            if (res.success_code === 200) {
                console.log(res)
            }
          });
    }

    registration(){
        const data={
            mobileno:this.formNameGroup.value.mobilenumber,
            emailid:this.formNameGroup.value.email,
            vendor_name:this.formNameGroup.value.ownername,
            cancel_check_img:'',
            address_proof_img:'',
            aadhar_card_front_img:'',
            aadhar_card_back_img:'',
            password:this.formNameGroup.value.password,
            shop_cover_image:'',
            shop_profile_image:'',
            shop_address:'',
            gstno:this.locationgroup.value.GSTno,
            ip_address:'',
            shop_name:this.formNameGroup.value.password,
            city:this.locationgroup.value.city,
            state:this.locationgroup.value.state,
            pincode:this.locationgroup.value.pincode
        }
    }
    /**
     * Sign up
     */
     signIn(): void
     {
         // Disable the form
         this.signInForm.disable();
 
         // Hide the message
         this.message = null;
            console.log('123')
         // Get the credentials
         const credentials = this.signInForm.value;
 
         // Sign in
         this._authService.signIn(credentials)
             .subscribe(() => {
 
                 // Set the redirect url.
                 // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
                 // to the correct page after a successful sign in. This way, that url can be set via
                 // routing file and we don't have to touch here.
                 const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';
 
                 // Navigate to the redirect url
                 this._router.navigateByUrl(redirectURL);
 
             }, (response) => {
 
                 // Re-enable the form
                 this.signInForm.enable();
 
                 // Show the error message
                 this.message = {
                     appearance: 'outline',
                     content   : response.error,
                     shake     : true,
                     showIcon  : false,
                     type      : 'error'
                 };
             });
     }
}
