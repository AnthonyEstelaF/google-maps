import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
     AgmCoreModule.forRoot({apiKey: 'AIzaSyAAyjlyMDmzh8cBfV73m8PsHNNRZGKkLZE'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
