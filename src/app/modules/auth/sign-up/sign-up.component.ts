import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { TreoAnimations } from '@treo/animations';
import { AuthService } from 'app/core/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

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
        private _router: Router
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
            ownername : ['',Validators.required],
            shopname : ['',Validators.required],
            email : ['',Validators.required],
            password : ['',Validators.required],
         });
         this.locationgroup = this._formBuilder.group({
            address : ['',Validators.required],
            GSTno : ['',Validators.required],
            location : ['',Validators.required],
                });
         this.verificationform = this._formBuilder.group({
            adharfront : ['',Validators.required],
            adharback : ['',Validators.required]
        });
     }
 
    

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

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
