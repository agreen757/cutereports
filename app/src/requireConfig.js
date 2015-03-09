/*globals require*/
require.config({
    shim: {

    },
    paths: {
        famous: '../bower_components/famous/src',
        requirejs: '../bower_components/requirejs/require',
        almond: '../bower_components/almond/almond',
        hello: '../bower_components/hello/dist/hello.all.min',
        jquery: '../bower_components/jquery/dist/jquery'
    },
    packages: [

    ]
});
require(['main']);

