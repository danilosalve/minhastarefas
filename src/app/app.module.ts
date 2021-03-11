import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ErrorsModule } from './errors/errors.module';
import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from './home/home.module';
import { AuthGuard } from './core/auth/auth.guard';
import { LoadingModule } from './shared/component/loading/loading.module';
import { TasksModule } from './tasks/tasks.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TasksModule,
    HomeModule,
    ErrorsModule,    
    LoadingModule,
    AppRoutingModule,    
    CoreModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
