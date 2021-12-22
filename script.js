var myApp = angular.module("myList", []);//we dont have dependencies now so we leave this array as empty
myApp.controller("myListController", function($scope){//we define over controller
    $scope.items = []; //it is defining a variable item that is referring to an array
    //we are binding the items with the scope because we are creating a controller on that element
    $scope.newItem = "";//First we need to assign thenewItem value as empty because the input box doesn't have any data
    $scope.pushItem = function(){//we need to push the data to the above newItem line by this function
        if($scope.newItem != "") {//by checking the condition that if the input box contains any value then the control will go into the loop accordingly
            $scope.items.push($scope.newItem);//push the new item which is entered in the input box into the array list of items
            $scope.newItem = "";//after entering the value into the items array we need to make the input tag empty   
        }
    }
    $scope.deleteItem =function(index){//function for deleting the each item in the list
        //here we recieved the index value from the index.html 
        $scope.items.splice(index, 1);//slice function is for ,and mentioned how many items we want to remove
    }

})