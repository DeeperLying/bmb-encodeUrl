import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppUtilModule {
  constructor () {}
}

export const AppType = {
  isInWeChat: function() { // 判断是否是在微信内打开
    return /MicroMessenger/i.test(window.navigator.userAgent);
  },
  isInQQ: function() { // 判断是否是在微信内打开
    return /MicroMessenger/i.test(window.navigator.userAgent);
  },
  isInApp: function() { // 包含bmb and bmLive
    return /Banma/i.test(window.navigator.userAgent);
  },
  isInBmApp: function() {
    return /Banma/i.test(window.navigator.userAgent) && !(/BanmaLive/i.test(window.navigator.userAgent));
  },
  isInLiveApp: function() {
    return /BanmaLive/i.test(window.navigator.userAgent);
  },
  isInAndroid: function() {
    return /Android/i.test(window.navigator.userAgent);
  }
};
