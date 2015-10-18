/*reusable business logic independent of views*/

myApp.service('nameService', function(){
	return { name: 'Thor' }

	// or use this.name = 'value'
});