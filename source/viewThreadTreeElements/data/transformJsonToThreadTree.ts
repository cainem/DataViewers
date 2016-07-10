import {Component, Input, Output, EventEmitter, Injectable} from '@angular/core';
import {JsonTransformationService} from '../../service/jsonTransformationService';

export class TransformJsonToThreadTree implements JsonTransformationService  {
    rawJsonChanged : EventEmitter<Object>
    transformedJson : any;
    rawJson : string;
}