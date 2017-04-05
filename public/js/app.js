'use strict'

import angular from 'angular'

import angularUIRouter from 'angular-ui-router'

import config from './config/config.md'
import services from './services/services.md'
import search from './components/search.md'

let app = angular.module('searchApp', [
    angularUIRouter,
    config,
    services,
    search
])