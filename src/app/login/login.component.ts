import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login= new FormControl('Amir', [Validators.required,Validators.minLength(6)])
  pwd= new FormControl('', Validators.required)
  email= new FormControl('', [Validators.required, Validators.email])
  telephone = new FormControl('',Validators.required)


  formLogin = new FormGroup({
  login: new FormControl('', [Validators.required,Validators.minLength(6)]),
  pwd: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
  telephone : new FormControl('',[Validators.required, Validators.pattern('^[0-9]{8}')])
  })
}





// import { Component } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

// login = new FormControl('Jamila', [Validators.required,Validators.minLength(6)])
// pwd=  new FormControl ( '',Validators.required)
// email= new FormControl('', [Validators.required,Validators.email])
// Telephone= new FormControl('',Validators.required)


//  formsLogin =new FormGroup({
//   login : new FormControl('Jamila', [Validators.required,Validators.minLength(6)]),
//   pwd:  new FormControl ( '',Validators.required),
//   email: new FormControl('', [Validators.required,Validators.email]),
//   Telephone: new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')])
//  }); 

  
//    save() {
//     console.log(this.formsLogin.get('login')?.value);   // Accéder à la valeur de login
//     console.log(this.formsLogin.get('pwd')?.value);     // Accéder à la valeur de pwd
//     console.log(this.formsLogin.get('email')?.value);   // Accéder à la valeur de email
//     console.log(this.formsLogin.get('Telephone')?.value); // Accéder à la valeur de Telephone
//   }
// }
