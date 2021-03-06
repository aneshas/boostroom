import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountRegistrationComponent } from './account-registration.component';
import { RegistrationConfirmationComponent } from './registration-confirmation/registration-confirmation.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
import { SellerRegistrationConfirmationComponent } from './seller-registration-confirmation/seller-registration-confirmation.component';

const routes: Routes = [
  {
    path: 'accounts/register',
    component: AccountRegistrationComponent
  },
  {
    path: 'accounts/registration-confirmation',
    component: RegistrationConfirmationComponent
  },
  {
    path: 'accounts/seller-registration-confirmation',
    component: SellerRegistrationConfirmationComponent
  },
  {
    path: 'accounts/confirm-email/:uuid',
    component: EmailConfirmationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRegistrationRoutingModule { }
