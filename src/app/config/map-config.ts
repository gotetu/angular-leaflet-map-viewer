import { Injectable } from '@angular/core';

const mapConfig : MapConfig = {
    center: [35.5766335,139.6572773],
    layerNames: ['地理院地図 標準地図','地理院地図 淡色地図',],
    urlTemplates: ['https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png','https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png',],
    attributions: ['<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院ラスタ</a>','<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院ラスタ</a>',],
};

@Injectable({
    providedIn: 'root',
    useValue : mapConfig,
})

export abstract class MapConfig {
    readonly center: number[];  // 中心点
    readonly layerNames: string[]; // レイヤ名称
    readonly urlTemplates: string[];  // url
    readonly attributions: string[];  // 出典
}