import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { Tab3Page } from './tab3.page';
import { HTTP } from '@ionic-native/http/ngx'; // import the plugin

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page],
  providers: [HTTP] // plugin providers not sure if this made any difference ... 
})
export class Tab3PageModule {}
