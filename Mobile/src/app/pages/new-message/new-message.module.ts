import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewMessagePageRoutingModule } from './new-message-routing.module';

import { NewMessagePage } from './new-message.page';
import { TagInputComponent } from 'src/app/components/tag-input/tag-input.component';
import { SmallplayerComponent, SmallplayerModule } from 'src/app/components/smallplayer/smallplayer.component';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewMessagePageRoutingModule,
    TranslateModule,
    SmallplayerModule
  ],
  declarations: [NewMessagePage, TagInputComponent]
})
export class NewMessagePageModule {}
