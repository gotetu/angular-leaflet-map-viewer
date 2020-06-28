import { Injectable } from '@angular/core';

const mapConfig : MapConfig = {
    center: [35.5766335,139.6572773],
    urlTemplates: ['https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',],
    attributions: ['<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院ラスタ</a>',],
};

@Injectable({
    providedIn: 'root',
    useValue : mapConfig,
})

export abstract class MapConfig {
    readonly center: number[];  // 中心点
    readonly urlTemplates: string[];  // url
    readonly attributions: string[];  // 出典
}