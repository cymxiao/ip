import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { SMS } from '@ionic-native/sms';
import { Alipay } from '@ionic-native/alipay';
//It's quite important to delcare in provider
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Logger } from "angular2-logger/core";
import { GlobalErrorHandler } from '../providers/global-error-handler/global-error-handler'; 

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '返回',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: GlobalErrorHandler},
    SMS,
    LocalNotifications,
    Alipay,
    Logger,
    //Amin: IMP. GlobalErrorHandler should be here, otherwise it would not be triggerred.
    GlobalErrorHandler,
    Geolocation 
  ]
})
export class AppModule {}
