import {Component, Input, Output, EventEmitter, Injectable} from '@angular/core';

export interface JsonTransformationService {
    rawJsonChanged : EventEmitter<Object>
    transformedJson : any;
    rawJson : string;
}