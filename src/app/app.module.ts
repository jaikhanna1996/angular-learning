import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomStyleDirective } from './attribute directives/custom-style.directive';
import { UsdInrPipe } from './custom pipe/usd-inr.pipe';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ChildOneComponent } from './child-component/child-one/child-one.component';
import { ChildTwoComponent } from './child-component/child-two/child-two.component';
import { RouterModule, Routes} from '@angular/router';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './structrul-directive/structrul-directive.component'; 

const appRoute: Routes = [
  {path: '', component: AppComponent},
  {path: 'Child', component: ChildComponentComponent},
  {path: 'ChildOne', component: ChildOneComponent},
  {path: 'ChildTwo', component: ChildTwoComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    CustomStyleDirective,
    UsdInrPipe,
    ChildComponentComponent,
    AttributeDirectiveComponent,
    StructuralDirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
