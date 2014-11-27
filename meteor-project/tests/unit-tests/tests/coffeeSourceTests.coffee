'use strict';
should = require('should')
sinon = require('sinon')
global._ = require('underscore')
Megaclass = require('../../coffeeSource')


describe 'coffeeSource.coffee: Megaclass', ->
  beforeEach ->
    @megaclass = new Megaclass


  it 'should return 2', ->
    should(@megaclass.uberMethod()).be.eql 2
