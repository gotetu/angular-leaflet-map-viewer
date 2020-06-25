import { Injectable } from '@angular/core';

const mapConfig : MapConfig = {
    center: [35.5766335,139.6572773],
    urlTemplate: 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
};

@Injectable({
    providedIn: 'root',
    useValue : mapConfig,
})

export abstract class MapConfig {
    readonly center: number[];
    readonly urlTemplate: string;
}