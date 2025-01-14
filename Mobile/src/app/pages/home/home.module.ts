import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';
import { PlayerComponent } from '../../components/player/player.component';
import { UpcommingComponent, UpcommingModule } from '../../components/upcomming/upcomming.component';

import { HomePage } from './home.page';
import { PlayerPage } from '../player/player.page';
import { Routes, PreloadAllModules, RouterModule } from '@angular/router';
import { TeamComponent, TeamModule } from '../../components/team/team.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TranslateModule,
    UpcommingModule,
    TeamModule
  ],
  declarations: [HomePage, PlayerComponent]
})
export class HomePageModule {}
