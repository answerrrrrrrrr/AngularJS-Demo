'use strict';

angular.module('confusionApp')
        .constant("baseURL", "http://localhost:3000/")
        .service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) { 

            this.getDishes = function(){
                return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
            };

            // this.getDish = function (index) {

            //     return $http.get(baseURL+"dishes/"+index);
            // };

            // this.getPromotion = function (index) {

            //     return $http.get(baseURL+"promotions/"+index);
            // };

            this.getPromotions = function(){
                return $resource(baseURL+"promotions/:id",null,  {'update':{method:'PUT' }});
            };

        }])

        .constant("baseURL", "http://localhost:3000/")
        .service('feedbackFactory', ['$resource', 'baseURL', function($resource,baseURL) { 

                return $resource(baseURL+"feedback/:id",null);

        }])
        
        .constant("baseURL", "http://localhost:3000/")
        .factory('corporateFactory', ['$http', 'baseURL',
          function($http, baseURL) {

            var corpfac = {};

            
            // Implement two functions, one named getLeaders,
            // the other named getLeader(index)
            // Remember this is a factory not a service
            corpfac.getLeaders = function(){

                return $http.get(baseURL+"leadership");
            };

            corpfac.getLeader = function(index) {

                return $http.get(baseURL+"leadership/"+index);
            };

            return corpfac;

        }])



;
