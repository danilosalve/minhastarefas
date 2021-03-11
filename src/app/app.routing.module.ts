import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SignUpComponent } from "./home/signup/signup.component";
import { SignInComponent } from "./home/signin/signin.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { GlobalErrorComponent } from "./errors/global-error/global-error.component";
import { TaskFormComponent } from "./tasks/task-form/task-form.component";
import { TaskWordAreaComponent } from "./tasks/task-work-area/task-work-area.component";
import { TaskTodoComponent } from "./tasks/task-work-area/taskTodo/task-to-do.component";
import { TaskDoneComponent } from "./tasks/task-work-area/taskDone/task-done.component";
import { AuthGuard } from "./core/auth/auth.guard";
import { TaskChangeComponent } from "./tasks/task-work-area/taskChange/task-change.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: '',
                component: SignInComponent,
                data: {
                    title: 'Entrar'
                }
            },
            {
                path: 'signup',
                component: SignUpComponent,
                data: {
                    title: 'Registrar-se'
                }
            },
        ]
        
    },
    {
      path: 'todotask',
      component: TaskWordAreaComponent,
      canActivate: [AuthGuard],
      children: [
        {
          path: '',
          component: TaskTodoComponent,
          canActivate: [AuthGuard],
          data: {
              title: 'Tarefas a fazer'
          }
        },
        {
          path: 'done',
          component: TaskDoneComponent,
          data: {
              title: 'Tarefas a concluidas'
          }
        },
        {
          path: 'task/add',
          component: TaskFormComponent,
          data: {
            title: 'Incluir Tarefa'
          }
        },
        {
          path: 'task/:taskId',
          component: TaskChangeComponent,
          data: {
            title: 'Alterar Tarefa'
          }
        }
      ]
    },
    {
      path: 'error',
      component: GlobalErrorComponent,
      data: { 
        title: 'Ops...Encontramos um erro.'
      }
    },
    {
      path: "not-found",
      component: NotFoundComponent,
      data: {
        title: 'Pagina não encontrada'
      }
    },
    {
      path: "**",
      redirectTo: 'not-found'
    }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true })],
    exports: [ RouterModule ]

})
export class AppRoutingModule{

}