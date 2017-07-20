import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TextAnalyzerComponent } from './components/text-analyzer/text-analyzer.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'analyzer', component: TextAnalyzerComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TextAnalyzerComponent,
    HomeComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
