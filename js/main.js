let mainApp = /**
* mainApp Module
*
* Description
*/
angular.module('mainApp', []);
mainApp.controller('mainCtrl', function($scope,$rootScope,$http) {
	/*
	$rootScope.obtenerDatos = function(id) {
		$http({
			method: 'GET',
			url: 'https://pokeapi.co/api/v2/pokemon/' + id.number
		}).then(function getDate(x) {
			$rootScope.info = x.data;
			console.log(x.data.name);
		})
	};
	*//*
	for( $rootScope.i = 1; $rootScope.i < 11; $rootScope.i++ ) {
		// console.log($rootScope.url + [i]);
		console.log($rootScope.i)
		$http({
				method: 'GET',
				url:  'https://pokeapi.co/api/v2/pokemon/' + $rootScope.i + '/'
			}).then(function getDate(info) {
				// $rootScope.datos = [info.data];
				// console.log($rootScope.datos);
				$rootScope.datos = [info.data];
			});
			01000011 01100101 01101100 01110110 01111001 01101110
	}*/
	/*
	$http({
			method: 'GET',
			url: 'https://pokeapi.co/api/v2/pokemon/25/'	
		}).then(function getDate(info) {
			$rootScope.datos = [info.data];
			console.log($rootScope.datos);
		});
	*/
	$scope.PokedexB = [];
	for ( let i = 1; i < 5; i++ ) {
		$http({
		method: 'GET',
		url: 'https://pokeapi.co/api/v2/pokemon/' + i 
	}).then(function (snapshot) {
		$scope.PokedexB.push(snapshot);
	})
	}
	$(document).ready(function () {
		$("#hide").click(function() {
			$('#foto').toggle('drop',3000,function() {
			})
		})
	})
});