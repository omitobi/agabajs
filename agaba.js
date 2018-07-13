'use strict'


(function() {
       Agaba = {};

       Agaba.method_get = 'GET';
       Agaba.method_post = 'POST';
       Agaba.method_put = 'PUT';
       Agaba.method_del = 'DELETE';

       Agaba.get = function (url, data, success_callback, error_callback) {
           Agaba.make(this.method_get, url, data, success_callback, error_callback);
       };

       Agaba.put = function (url, data, success_callback, error_callback) {
           Agaba.make(this.method_put, url, data, success_callback, error_callback);
       };

       Agaba.post = function (url, data, success_callback, error_callback) {
           Agaba.make(this.method_post, url, data, success_callback, error_callback);
       };

       Agaba.del = function (url, data, success_callback, error_callback) {
           Agaba.make(this.method_del, url, data, success_callback, error_callback);
       };

       Agaba.make = function make(method, url, data, success_callback, error_callback) {
           $.ajax({
               method: method,
               url: url,
               data: data,
               success: success_callback,
               error: error_callback
           });
       };

       /**
        * Wrap around console.log to show a json formatted log value
        * @param val
        */
       Agaba.dumpd = function(val){
           console.log(arguments.length === 1
               ? JSON.parse(JSON.stringify(val))
               : JSON.parse(JSON.stringify(Array.apply(null, arguments)))
           );
       };

       Agaba.objKeys = function(_array) {
         return Object.keys(_array);
       }

       Agaba.objFirst = function (_array) {
         return _array[Agaba.objKeys(_array)[0]];
       }

       return Agaba;
   })();
