﻿/// <reference path="node_modules/appex/appex.d.ts" />

export function index(context) {
    
    context.response.headers['Content-Type'] = 'text/html';

    var code = context.template.render('./tdest.txt')

    context.response.send(code);
}

