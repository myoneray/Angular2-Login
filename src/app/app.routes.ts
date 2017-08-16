import { Routes } from '@angular/router';
import { FlowerComponent } from './component/flower/flower.component';
import { TreeComponent } from './component/tree/tree.component';
import { SchoolComponent } from './component/school/school.component';
import { TaobaoComponent } from './component/taobao/taobao.component';
import { OfoComponent } from './component/ofo/ofo.component';

//1>导入守卫
import {LoggedInGuard}from './guard/loggedIn.guard';


// 2>在路由中配置LoggedInGuard
export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'Flower', component: FlowerComponent, canActivate: [LoggedInGuard] },
  { path: 'Tree', component: TreeComponent },
  { path: 'School', component: SchoolComponent },
  { path: 'Taobao', component: TaobaoComponent },
  { path: 'Ofo', component: OfoComponent }

];
