
var myApp = angular
				.module("myApp", [])
				.controller("myController", function($scope){
					console.log("in controller...");
					
					$scope.newUser={};
					$scope.clickedUser={};
					
					$scope.users=[
						{userName: "Moshiur", fullName:"Md. Moshiur Rahman", email:"moshiurrahman6674@gmail.com"},
						{userName: "Siam", fullName:"Siam Riaz", email:"siamriaz065@gmail.com"},
						{userName: "Moinul", fullName:"Md. Moinul Hasan", email:"moinul0410@gmail.com"}
					];
					
					$scope.saveUser= function(){
						//alert("test");
						console.log($scope.newUser);
						
						$scope.users.push($scope.newUser);
						$scope.newUser={};
					};
					
					$scope.selectUser=function(user){
						console.log(user);
						
						$scope.clickedUser= user;
					};
					
					$scope.updateUser= function(){
						//$scope.
					};
					
					$scope.deleteUser =function(){
						$scope.users.splice($scope.users.indexOf($scope.clickedUser),1);
					};
				
				});