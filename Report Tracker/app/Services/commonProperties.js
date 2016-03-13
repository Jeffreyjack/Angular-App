(function(){
    'use strict'
    angular.module('reportTracker.services', ['ngRoute'])
        .service('CommonService', [function() {            
            return{
                
                    getTopIconElements:function(){

                        var topIconElements = [{                    
                        "id": 0,
                        "title": "hours",
                        "icon":"/app/images/hours_icon.png"
                        }, {
                        "id": 1,
                        "title": "videos",
                         "icon":"/app/images/tracts.png"
                        }, {
                        "id": 2,
                        "title": "returnVisits",
                        "icon":"/app/images/rv.png"
                        }, {
                        "id": 3,
                        "title": "books",
                        "icon":"/app/images/books.png"
                        }, {
                        "id": 4,
                        "title": "bibleStudy",
                        "icon":"/app/images/bible_study.png"
                        }, {
                        "id": 5,
                        "title": "assignments",
                        "icon":"/app/images/bible_study.png"
                        }
                        ];
                        return topIconElements;
                    },

                    getAssignmentItems : function(){

                        var assignmentItems = [{             
                        "id": 1,
                        "title": "Talk",
                        },{
                        "id": 2,
                        "title": "Reading",
                        },{
                        "id": 3,
                        "title": "Mike Roaming",
                        },{
                        "id": 4,
                        "title": "Demo",
                        }];
                        return assignmentItems;
                    }
                    
            }
        
        }])
})();