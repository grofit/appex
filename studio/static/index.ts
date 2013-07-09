﻿/// <reference path="../references.ts" />

import fs = require('fs');

export module studio.static {

    var static_dir = './studio/static/';

    export function wildcard(context, path) {
        
        var not_found = () => {

            context.response.writeHead(404, {'content-type' : 'text/plain'});

            context.response.write(path + ' not found.');

            context.response.end();         
        };

        if(path.indexOf('..') !== -1) {
        
            not_found();

            return;
        }

        path = static_dir + path;
        
        fs.exists(path, (exists) =>{

            if(!exists) {
                
                not_found();

                return;
            }

            fs.readFile(path, (err, data) => {
                
                context.response.writeHead(200, {'content-type' : context.mime.lookup(path) });

                context.response.write(data);

                context.response.end();
            });
        }); 
    }
}